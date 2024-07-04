/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineGoogle } from "react-icons/ai";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { ImagetoBase64 } from './utility/ImagetoBase64';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    phoneNumber: "",
    password: "",
    userprofile: ""
  });
  const [visible, setVisible] = useState(false);
  const [terms, setTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((preve) => ({ 
        ...preve,
      [name] : value
    }))
  }

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file.size > 2 * 1024 * 1024) { // 2MB limit
      toast.error("Image size should be less than 2MB");
      return;
    }
    const data = await ImagetoBase64(file);
    setFormData((prev) => ({
      ...prev,
      userprofile: data
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields and email/password format
    if (!formData.fullName || !formData.email || !formData.password || !formData.username || !formData.phoneNumber ) {
      toast.error("Please enter all required fields.");
      return;
    }

    if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
      toast.error("Invalid email format");
      return;
    }

    if (!formData.phoneNumber.match(/^\+?\d{10,15}$/)) {
      toast.error("Invalid phone number format");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    // const formDataPayload = {
    //   fullName: formData.fullName,
    //   email: formData.email,
    //   password: formData.password,
    //   username: formData.username,
    //   phoneNumber: formData.phoneNumber,
    //   userprofile: formData.userprofile
    // };

    const {fullName, email, password, username, phoneNumber} = formData;

    setLoading(true);

    try {
      const response = await fetch('https://eventconnect2.onrender.com/v1/api/signup', {
        method: 'POST',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.message || "Something went wrong");
        setLoading(false);
        return;
      }

      const dataRes = await response.json();
      toast.success(dataRes.message);
      navigate("/authentication");
    } catch (error) {
      console.error("Error during form submission:", error);
      toast.error("Network error, please check your internet connection");
    } finally {
      setLoading(false);
    }
  };

  const googleSignup = () => {
    setLoading(true);
    window.location.href = `${process.env.REACT_APP_API_URL}/auth/google`;
  };

  const handleUploadProfileImage =  async(e) => {
    const data = await ImagetoBase64(e.target.files[0])
    setFormData((preve) => {
      return {
        ...preve,
        userprofile : data
      }
    })
  }

  return (
    <div className="w-full flex flex-col shadow-xl justify-center items-center mt-20">
      {loading && (
        <div className="fixed inset-0 bg-[#20B486] bg-opacity-40 flex justify-center items-center z-10">
          <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-[#20B486]"></div>
        </div>
      )}
      <div className="w-1/2 flex text-xl text-black justify-between self-center font-semibold relative pt-4" id="choose">
        Sign up
        <div className="text-sm align-bottom inline">
          or{" "}
          <Link to="../" className="text-[#20B486] inline">Have Account&#63;</Link>
        </div>
      </div>
      <div className="flex flex-col w-1/2 pt-3 self-center relative" id="offPro">
        <div className="p-1 bg-[#20B486] hover:bg-[#608d7f] text-white text-center relative w-full max-h-10 flex justify-center rounded-lg gap-2 mb-4 cursor-pointer" onClick={googleSignup}>
          <AiOutlineGoogle className="text-2xl absolute left-2 p-1" />
          <div>Sign up with Google</div>
        </div>
      </div>
      <div className="flex text-black text-xl text-center self-center justify-center items-center w-2/12 relative" id="or">
        <span className="border border-black w-full min-w-full"></span>
        <span className="px-4">OR</span>
        <span className="border border-black w-full min-w-full"></span>
      </div>
      <form className="grid grid-flow-row gap-3 md:w-3/5 w-1/2 self-center mx-auto pt-3 rounded-lg px-8 py-5 relative" onSubmit={handleSubmit} id="loginForm">
        {/* <InputField type="text" placeholder="Your Full Names" name="fullName" value={formData.fullName} onChange={handleChange} /> */}
        <input type={"text"} name='fullName' placeholder="Enter your fullnames" className='p-1 rounded-sm focus:border-blue-500 border border-[#20B486] bg-white indent-3 text-gray-700' value={formData.fullName} 
        onChange={handleChange} />
        <input type={"email"} name='email' placeholder="Enter your email" className='p-1 rounded-sm focus:border-blue-500 border border-[#20B486] bg-white indent-3 text-gray-700' value={formData.email} 
        onChange={handleChange} />
        <div className="flex flex-col relative text-gray-400 py-1">
        <input type={visible ? "text" : "password"} name="password" placeholder="Enter your password" setVisible={setVisible} className='p-1 rounded-sm focus:border-blue-500 border border-[#20B486] bg-white indent-3 text-gray-700' value={formData.password}   
        onChange={handleChange} />
            {visible ? (
      <AiOutlineEye className="absolute top-3 right-1 cursor-pointer" onClick={() => setVisible(false)} />
    ) : (
      <AiOutlineEyeInvisible className="absolute top-3 right-1 cursor-pointer" onClick={() => setVisible(true)} />
    )}
    </div>
    <input type={"text"} name='username' placeholder="Enter your username" className='p-1 rounded-sm focus:border-blue-500 border border-[#20B486] bg-white indent-3 text-gray-700' value={formData.username} 
    onChange={handleChange} />
    <input type={"tel"} name='phoneNumber' placeholder="Tel +250 786574832" className='p-1 rounded-sm focus:border-blue-500 border border-[#20B486] bg-white indent-3 text-gray-700' value={formData.phoneNumber} 
    onChange={handleChange} />
    <label htmlFor="userprofile">
     <div className='flex flex-col'>
      <p className='text-gray-400 py-1'>User_Profile(Optional)</p>
      <input type={"file"} name='userprofile' accept='image/*' id='userprofile'
        onChange={handleUploadProfileImage} className='p-1 rounded-sm focus:border-blue-500 border border-[#20B486] bg-white indent-3 text-gray-700'/>
      </div>
    </label>
        {/* <InputField type="email" placeholder="Email..." name="email" value={formData.email} onChange={handleChange} /> */}
        {/* <PasswordField visible={visible} name="password" setVisible={setVisible} value={formData.password} onChange={handleChange} /> */}
        {/* <InputField type="tel" placeholder="Tel: +250 789903099" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} /> */}
        {/* <InputField type="text" placeholder="Username..." name="username" value={formData.username} onChange={handleChange} /> */}
        {/* <InputField type={"file"} placeholder="User Profile" accept='image/*' id='userprofile' name="userprofile" value={formData.userprofile} onChange={handleUploadProfileImage} /> */}
        {/* <FileInputField onChange={handleImageChange} /> */}
        <div className="text-sm text-center">
          <input type="checkbox" id="terms" className="w-5" onChange={() => setTerms(!terms)} />
          <label>
            Agree To Our{" "}
            <Link className="text-[#20B486] hover:text-[#43edb7] font-semibold" to="./terms">Terms of Services</Link>{" "}
            and{" "}
            <Link className="text-[#20B486] hover:text-[#43edb7] font-semibold" to="./privacy">Privacy Policy</Link>
          </label>
        </div>
        <button type="submit" className={`w-full my-1 py-1 shadow-lg text-white shadow-slate-500/50 font-semibold rounded-lg mt-1 ${terms ? "bg-[#20B486] hover:bg-[#608d7f]" : "bg-gray-400 cursor-not-allowed"}`} disabled={!terms || loading}>
          Create account
        </button>
      </form>
    </div>
  );
};

const InputField = ({ type, placeholder, name, value, onChange }) => (
  <div className="flex flex-col text-gray-800 py-1">
    <input
      className="p-1 rounded-sm focus:border-blue-500 border border-[#20B486] bg-white indent-3 text-gray-700"
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      autoComplete="off"
    />
  </div>
);

const PasswordField = ({ visible, setVisible, value, onChange }) => (
  <div className="flex flex-col relative text-gray-400 py-1">
    <input
      className="p-1 rounded-sm focus:border-blue-500 border border-[#20B486] bg-white indent-3 text-gray-700"
      type={visible ? "text" : "password"}
      placeholder="Password"
      name="password"
      value={value}
      onChange={onChange}
      autoComplete="off"
    />
    {visible ? (
      <AiOutlineEye className="absolute top-3 right-1 cursor-pointer" onClick={() => setVisible(false)} />
    ) : (
      <AiOutlineEyeInvisible className="absolute top-3 right-1 cursor-pointer" onClick={() => setVisible(true)} />
    )}
  </div>
);

// const FileInputField = ({ onChange }) => (
//   <div className="flex flex-col text-gray-400 py-1">
//     <label htmlFor="userprofile" className="text-sm">Profile Picture (Optional)</label>
//     <input
//       type="file"
//       id="userprofile"
//       name="userprofile"
//       accept="image/*"
//       className="p-1 rounded-sm focus:border-blue-500 border border-[#20B486] bg-white indent-3 text-gray-700"
//       onChange={onChange}
//     />
//   </div>
// );

export default SignUp;
