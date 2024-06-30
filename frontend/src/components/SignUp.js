import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineGoogle, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const SignupForm = ({ handleSubmit, handleChange, handleImageChange, formData, loading, googleSignup, visible, setVisible, terms, setTerms }) => {
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
        <InputField type="text" placeholder="Your Full Names" name="fullName" value={formData.fullName} onChange={handleChange} />
        <InputField type="email" placeholder="Email..." name="email" value={formData.email} onChange={handleChange} />
        <PasswordField visible={visible} name="password" setVisible={setVisible} value={formData.password} onChange={handleChange} />
        <PhoneNumberField value={formData.phoneNumber} onChange={handleChange} />
        <InputField type="text" placeholder="Username..." name="username" value={formData.username} onChange={handleChange} />
        <FileInputField onChange={handleImageChange} />
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

const FileInputField = ({ onChange }) => (
  <div className="flex flex-col text-gray-400 py-1">
    <label htmlFor="userprofile" className="text-sm">Profile Picture (Optional)</label>
    <input
      type="file"
      id="userprofile"
      name="userprofile"
      accept="image/*"
      className="p-1 rounded-sm focus:border-blue-500 border border-[#20B486] bg-white indent-3 text-gray-700"
      onChange={onChange}
    />
  </div>
);

const PhoneNumberField = ({ value, onChange }) => {
  const [countryCode, setCountryCode] = useState("+250");
  const handlePhoneNumberChange = (e) => {
    onChange({
      target: {
        name: "phoneNumber",
        value: countryCode + e.target.value,
      },
    });
  };

  return (
    <div className="flex flex-col text-gray-800 py-1">
      <div className="flex">
        <select
          className="p-1 rounded-l-sm focus:border-blue-500 border border-[#20B486] bg-white text-gray-700"
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
        >
          <option value="+250">Rwanda (+250)</option>
          <option value="+1">USA (+1)</option>
          <option value="+44">UK (+44)</option>
          <option value="+91">India (+91)</option>
          {/* Add more country codes as needed */}
        </select>
        <input
          className="p-1 rounded-r-sm focus:border-blue-500 border border-[#20B486] bg-white indent-3 text-gray-700 flex-grow"
          type="tel"
          placeholder="786146983"
          value={value.replace(countryCode, "")}
          onChange={handlePhoneNumberChange}
        />
      </div>
    </div>
  );
};

export default SignupForm;
