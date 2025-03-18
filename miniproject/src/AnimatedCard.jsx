import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AnimatedCard = () => {
  const [expanded, setExpanded] = useState(false);
  const [showSides, setShowSides] = useState(false);
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    setTimeout(() => setExpanded(true), 500); // Expand effect
    setTimeout(() => setShowSides(true), 2000); // Reveal side content
    setTimeout(() => setRotate(true), 6000); // Rotate after 6 seconds
  }, []);

  return (
    <motion.div
      className={`relative w-64 h-80 bg-gradient-to-br from-red-400 to-orange-300 text-white p-6 rounded-2xl shadow-lg flex items-center justify-center transition-all duration-700`}
      initial={{ scale: 0.5 }}
      animate={{ scale: expanded ? 1 : 0.5, rotate: rotate ? 360 : 0 }}
      transition={{ duration: 1 }}
    >
      {/* Main Card Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold">Coding Stuff</h2>
        <p className="text-sm text-center mt-2">
          If you want to see more content like this, don't forget to follow.
        </p>
      </div>

      {/* Left Side Content */}
      <motion.div
        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-16 bg-white bg-opacity-30 rounded-r-lg flex items-center justify-center text-black text-xs font-bold opacity-0"
        animate={{ opacity: showSides ? 1 : 0, x: showSides ? "-10px" : "-50px" }}
        transition={{ duration: 0.8 }}
      >
        Left
      </motion.div>

      {/* Right Side Content */}
      <motion.div
        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-16 bg-white bg-opacity-30 rounded-l-lg flex items-center justify-center text-black text-xs font-bold opacity-0"
        animate={{ opacity: showSides ? 1 : 0, x: showSides ? "10px" : "50px" }}
        transition={{ duration: 0.8 }}
      >
        Right
      </motion.div>
    </motion.div>
  );
};

export default AnimatedCard;
