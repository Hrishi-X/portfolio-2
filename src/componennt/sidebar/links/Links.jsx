import React from "react";
import { motion } from "framer-motion";

const variants = {
  close: {
    transition: { staggerChildren: 0.05 },
    staggerChildren: -1,
  },
  open: {
    transition: { staggerChildren: 0.1 },
  },
};
const itemvariants = {
  close: {
    y: 50,
    opacity: 0,
  },
  open: {
    opacity: 1,
    y: 50,
  },
};

const Links = () => {
  const items = ["Homepage", "Skills", "Projects", "Contact", "About"];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          variants={itemvariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          href={`#${item}`}
          key={item}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
