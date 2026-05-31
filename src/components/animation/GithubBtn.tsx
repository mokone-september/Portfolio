"use client";

import { Github } from "lucide-react";
import { motion } from "framer-motion";

const GithubBtn = () => {
  return (
    <motion.a
      href="https://github.com/mokone-september"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      className="absolute left-0 top-16 sm:top-5 flex rounded-r-full justify-center items-center gap-2 z-50 w-fit h-fit p-2 shadow-md border-y border-r border-black bg-white text-black hover:bg-primary hover:text-white"
    >
      <Github />
      <span className="font-rubik text-2xl max-sm:text-xl">visit</span>
    </motion.a>
  );
};

export default GithubBtn;
