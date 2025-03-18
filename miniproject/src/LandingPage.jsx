import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import GetInternship from "./GetInternship";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#FCFAEE] flex flex-col items-center justify-center p-4">
      {/* Main Content */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-[#566730]">Find Your Dream Internship</h1>
        <p className="text-lg text-[#DCBE82] mt-2 max-w-xl mx-auto">
          Kickstart your career with the best internship opportunities.
        </p>
<NavLink to={"/getinternship"}>
        <button className="mt-6 bg-[#566730] text-[#FCFAEE] px-6 py-3 rounded-lg shadow-lg hover:bg-[#445522]">
          Get Started
        </button>
        </NavLink>
      </div>
      
      {/* Floating Cards */}
      <motion.div 
        className="absolute top-20 left-1/4 bg-[#566730] text-white p-4 rounded-2xl shadow-xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="text-lg font-semibold">I got 10 LPA in Microsoft!</p>
      </motion.div>
      
      <motion.div 
        className="absolute top-40 right-1/4 bg-[#566730] text-white p-4 rounded-2xl shadow-xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="text-lg font-semibold">I got 12 LPA in Google!</p>
      </motion.div>
    </div>
  );
};

export default LandingPage;
