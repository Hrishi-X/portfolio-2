// import React from 'react'
import "./hero.scss";
import { motion } from "framer-motion";

const textvariant = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerchildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVarient = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textvariant}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textvariant}>HRISHIKESH SHINDE</motion.h2>
          <motion.h1 variants={textvariant}>FrontEnd Developer</motion.h1>
          <motion.div className="buttons" variants={textvariant}></motion.div>
          <motion.img
            src="/scroll.png"
            alt=""
            variants={textvariant}
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVarient}
        initial="initial"
        animate="animate"
      >
        FrontEnd Developer And UI Desiger
      </motion.div>
      <div className="imageContainer">
        <img src="/actionboy.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
