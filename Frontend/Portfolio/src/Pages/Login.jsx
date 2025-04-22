import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { sendCredentials } from "../Redux/Slicers/loginSlice";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formRef = useRef(null);
  const { hasError, isLoading, message } = useSelector((state) => state.Login);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);

    const resultAction = await dispatch(sendCredentials(payload));

    if (sendCredentials.fulfilled.match(resultAction)) {
      formRef.current.reset();
      setTimeout(() => {
        navigate("/AdminPage");
      }, 500);
    }
  };

  return (
    <div className="w-full h-screen text-white flex justify-center items-center bg-[#111827]">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="border border-red-800 p-10 bg-[#111827] shadow-lg rounded-xl"
      >
        <div className="logo text-2xl font-bold mb-6 text-center">Login</div>
        <div className="form text-black flex flex-col gap-4">
          <motion.input
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            type="email"
            name="email"
            placeholder="Enter your Email"
            className="p-2 border rounded text-center  font-semibold"
          />

          <motion.input
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            type="password"
            name="password"
            placeholder="Enter your Password"
            className="p-2 border rounded text-center  font-semibold"
          />

          {hasError && (
            <p className="text-red-500 mt-2 text-center font-medium">
              {message}
            </p>
          )}
        </div>

        <div className="submitButton mt-6 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            {isLoading ? "Logging in..." : "Login"}
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default Login;
