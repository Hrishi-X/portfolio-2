import React from "react";
import "./skills.scss";
import { motion } from "framer-motion";
const listvariant = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.2 * i, type: "spring", stiffness: 300 },
  }),
};

const Skills = () => {
  const skills = [
    {
      title: "HTML5",
      icon: "html.png",
    },

    { title: " CSS3", icon: "css.png" },
    { title: "SASS", icon: "sass.png" },
    { title: " Git", icon: "git.png" },
    { title: " Framer", icon: "framer.png" },
    { title: "Tailwind", icon: "tailwind.png" },
    { title: "Js", icon: "javascript.png" },
    { title: "figma", icon: "figma.png" },
    { title: "Github", icon: "github.png" },
    { title: "React", icon: "react.png" },
  ];
  return (
    <>
      <div className="container-skills">
        <p className="title"> Tech Stack</p>
        <div className="skills-flex">
          {skills.map((item, i) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={listvariant}
              className=" icon-container"
              key={i}
              custom={i}
            >
              <div className="img-container">
                <img className="img-i" src={`${item.icon}`} alt="" />
              </div>
              <p>{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
