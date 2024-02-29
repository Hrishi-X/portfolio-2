import Links from "./links/Links";
import { motion } from "framer-motion";
import "./sidebar.scss";
import React, { useState } from "react";
import ToggleButton from "./tooglebutton/ToggleButton";

const Sidebar = () => {
  const [open, setopen] = useState(false);
  const varient = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    close: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div className="sidebar" animate={open ? "open" : "close"}>
      <motion.div className="bg" variants={varient}>
        <Links />
      </motion.div>
      <ToggleButton setopen={setopen} />
    </motion.div>
  );
};

export default Sidebar;
