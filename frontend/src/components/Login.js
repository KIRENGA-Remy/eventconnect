import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineGoogle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginRedux } from "../redux/userSlice";

export default function Login() {

  const userData = useSelector(state => state.user);
  console.log(userData);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { email, password };
    
    try {
      setLoading(true);
      const response = await fetch(`${process.env.REACT_APP_API_URL}/v1/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const dataRes = await response.json();
      toast(dataRes.message);
  
      if (response.status === 201) {
        dispatch(loginRedux(dataRes));
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      }
    } catch (error) {
      console.error(error);
      toast.error("Login failed. Please check your email and password.");
    } finally {
      setLoading(false);
    }
  };
  
  const googleLogin = async () => {
    setLoading(true);
    window.location.href = `${process.env.REACT_APP_API_URL}/auth/google`;

};
  return (
    <div className="pt-3 flex flex-col justify-center items-center w-full">
      {loading && (
        <div className="fixed inset-0 bg-[#20B486] bg-opacity-40 flex justify-center items-center z-10">
          <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-[#20B486]"></div>
        </div>
      )}
      <div
        className="w-1/2 flex text-xl text-black justify-between font-semibold"
        id="choose"
      >
        Log in{" "}
        <div className="text-sm align-bottom inline">
          or{" "}
          <Link to="./Signup" className="text-[#20B486] inline">
            Create an account
          </Link>
        </div>
      </div>
      <div
        className="flex flex-col w-1/2 pt-3 "
        id="offPro"
      >
        <div className="p-1 bg-[#20B486] hover:bg-[#608d7f] text-white text-center relative w-full max-h-10 flex justify-center rounded-lg gap-2 mb-4 cursor-pointer" onClick={googleLogin}>
          <AiOutlineGoogle className="text-2xl absolute left-2 p-1" />
          Login with Google
        </div>
      </div>
      <div
        className="flex text-black text-xl text-center justify-center items-center w-2/12"
        id="or"
      >
        <span className="border border-black w-full min-w-full"></span>
        <span className="px-4">OR</span>
        <span className="border border-black w-full min-w-full"></span>
      </div>
      <form
        className="grid grid-flow-row gap-3 md:w-3/5 w-1/2 mx-auto rounded-lg p-3 px-8"
        onSubmit={handleSubmit}
        id="loginForm"
      >
        <div className="flex flex-col text-gray-800 py-1">
          <input
            className=" p-1 rounded-sm focus:border-blue-500 border border-[#20B486] bg-white indent-3"
            type="text"
            placeholder="Email..."
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            autoComplete=""
          />
        </div>
        <div className="flex flex-col relative text-gray-800 py-1">
          <input
            className=" p-1 rounded-sm focus:border-blue-500 border border-[#20B486] bg-white indent-3"
            type={visible ? "text" : "password"}
            placeholder="Pass..."
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete=""
          />
          {visible ? (
            <AiOutlineEye
              className="absolute top-3 right-1 cursor-pointer"
              onClick={() => setVisible(false)}
            />
          ) : (
            <AiOutlineEyeInvisible
              className="absolute top-3 right-1 cursor-pointer"
              onClick={() => setVisible(true)}
            />
          )}
        </div>
        <div className="flex justify-between">
          <span className="text-sm">
            <input type="checkbox" id="remember" className="w-5" />
            <label>Remember Me</label>
          </span>
          <button className="p-1 px-5 bg-[#20B486] shadow-lg hover:shadow-slate-950/30 text-white font-semibold rounded-sm" type="submit">
            Log In
          </button>
        </div>
      </form>
      <Link to="forgot" className="text-[#20B486] hover:text-[#558173] hover:underline py-2">Forgot Your Password&#63;</Link>
    </div>
  );
}
