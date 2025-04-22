import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import {logout} from "../Redux/Slicers/loginSlice" // Update path accordingly
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const LoggedIn = useSelector((state) => state.Login.isLoggedIn);
  // const userName = useSelector((state) => state.loginSlice.userName);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/Login");
  };

  const navLinks = [
    { name: "HomePage", path: "/" },
    { name: "Projects", path: "/Projects" },
    // { name: "Blogs", path: "/Blogs" },
  ];

  return (
    <nav className="bg-gray-900 text-white select-none">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="pointer-events-none text-2xl md:text-3xl font-extrabold tracking-wide text-purple-400">
          Basit<span className="text-blue-400">Dev</span>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        <div className={`md:flex md:items-center space-x-6 ${isOpen ? "block" : "hidden"} md:block`}>
          {navLinks.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link to={item.path} className="text-lg font-semibold hover:text-purple-400 transition-all duration-300">
                {item.name}
              </Link>
            </motion.div>
          ))}

          {/* Show Logout if logged in, else Login */}
          {LoggedIn ? (
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <button
                onClick={handleLogout}
                className="text-lg font-semibold hover:text-red-400 transition-all duration-300  "
              >
                Logout
              </button>
            </motion.div>
          ) : (
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <button
                onClick={() => navigate("/Login")}
                className="text-lg font-semibold hover:text-purple-400 transition-all duration-300  "
              >
                Login
              </button>
            </motion.div>
          )}

          {/* SignUp button */}
          {/* <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <button
              onClick={() => navigate("/SignUp")}
              className="text-lg font-semibold hover:text-purple-400 transition-all duration-300"
            >
              SignUp
            </button>
          </motion.div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
