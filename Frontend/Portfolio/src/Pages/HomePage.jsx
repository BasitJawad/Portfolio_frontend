import React from 'react'
import Basit from "../assets/Basit1.jpg"
import { motion } from "framer-motion";
import {Globe} from "../Components/Globe"
import SkillsSection from "../Components/SkillsSection"
import  Cv from "../assets/CV.pdf"
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HomePage = () => {
  return (
    <>
    <title>BasitJawad</title>
    <div className="relative select-none min-h-screen flex items-center justify-center mt-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
      {/* Subtle Background Overlay */}
      <div className="absolute inset-0 bg-opacity-40 bg-black blur-xl"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full">
        {/* Left Section - Text */}
        <motion.div 
          className="text-white text-center md:text-left w-full md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-8xl font-extrabold text-orange-500">Hi!</h1>
          <h2 className="text-4xl md:text-7xl font-extrabold text-blue-400">
            I'm Basit Jawad
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
            Passionate MERN Stack Developer with hands-on experience in crafting 
            dynamic, interactive web applications. Skilled in React, Node.js, 
            MongoDB, and Express, delivering seamless user experiences & 
            efficient solutions.
          </p>
          
          {/* Call-to-Action Button */}
          <motion.a 
            href="mailto:muhbasit235@gmail.com"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Contact Me
          </motion.a>
          <motion.a 
            href={Cv}
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl shadow-lg transition-all duration-300 ml-4"
            whileHover={{ scale: 1.1}}
          >
           My Cv
          </motion.a>
          <div className="flex gap-6 mt-4 justify-center md:justify-start">
  <a 
    href="https://github.com/BasitJawad" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-none hover:text-gray-300 transition-all text-3xl"
  >
    <FaGithub />
  </a>
  <a 
    href="https://www.linkedin.com/in/basit-jawad/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-none hover:text-blue-400 transition-all text-3xl"
  >
    <FaLinkedin />
  </a>
</div>

        </motion.div>
        {/* Right Section - Image */}
        <motion.div 
          className="relative flex justify-center md:justify-end w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img 
            src={Basit} 
            alt="Basit Jawad" 
            className="rounded-full md:rounded-r-full w-40 h-40 md:w-80 md:h-80 filter hue-rotate-180 shadow-2xl border-4 border-gray-700"
          />

          {/* Decorative Glow Effect */}
          <div className="absolute -top-4 -right-4 w-28 h-28 bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-orange-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        </motion.div>
      </div>
    </div>
      
      <div className="SkillsSection select-none md:h-[100vh] h-[150vh] flex justify-center items-center">
        <div className="SkillsGrid  w-[100%]  ">
          <SkillsSection />
        </div>
      </div>




      <div className="CobeVercelSection md:h-[100vh]   h-[100vh]">
        <Globe/>
        </div>  
        </>
  )
}

export default HomePage
