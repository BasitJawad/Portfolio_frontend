import React,{useRef} from 'react';
import {useNavigate} from "react-router-dom";
import { sendSignUpData } from '../Redux/Slicers/loginSlice';
import { useDispatch } from 'react-redux';
const SignUp = () => {

  const navigate = useNavigate(); // Hook for navigation
  const formRef = useRef(null); // Create a ref for the form
  const dispatch = useDispatch(); // Hook for dispatching actions
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target); // This includes the file
    const sendSignUpdata = await dispatch(sendSignUpData(formData)); // ✅ Pass FormData, not plain object
    console.log(sendSignUpdata);
  
    if (sendSignUpdata.error) {
      console.log("Error in signup");
    } else {
      console.log("Signup successful");
      formRef.current.reset(); // Move this inside successful flow
      setTimeout(() => {
        navigate("/Login");
      }, 3000);
    }
  };
  
  return (
    <div className='w-full h-screen text-white flex justify-center items-center bg-[#111827]'>
      <form ref={formRef} onSubmit={handleSubmit} className='border border-red-800 p-10 bg-[#111827] shadow-lg rounded-xl'>
        <div className="logo text-2xl font-bold mb-6 text-center">Sign Up</div>
        <div className="form text-black flex flex-col gap-4">
          <input name="userName" type="text" placeholder='Enter Your Name' className="p-2 border rounded" />
          <input name="email" type="email" placeholder='Enter your Email' className="p-2 border rounded" />
          <input name="password" type="password" placeholder='Enter your Password' className="p-2 border rounded" />
          <input name="profilePic" type="file" className="p-2" />
        </div>
        <div className="submitButton mt-6 text-center">
          <button type='submit' className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
