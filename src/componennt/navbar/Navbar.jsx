import React from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          Hrishi-X
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/hrishikesh-shinde-058bb8206/">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://github.com/dashboard/">
            {" "}
            <img src="github.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
