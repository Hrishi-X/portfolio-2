import React, { useRef } from "react";
import "./project.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "movix",
    img: "movieepro.png",
    info: " This React project is a movie application that fetches data from the TMDb API to showcase popular movies.Redux for state management, MovieHub delivers a seamless and immersive movie-watching experience. Users can explore a curated selection of popular movies and watch trailers using the React Player . The application features an unlimited scroll functionality, allowing users to seamlessly browse through an extensive collection of movies. Built with Tailwind CSS, the interface is visually appealing , ensuring a delightful user experience across devices.",
    link: "https://moviee-hrishi-x.vercel.app/",
  },
  {
    id: 2,
    title: "Crypto  Tracker",
    img: "crypto.png",
    info: " This React project is a responsive cryptocurrency price tracker that leverages the CoinGecko API to fetch real-time data. The application showcases cryptocurrency prices through interactive charts powered by Chart.js, providing users with insightful visualizations of market trends. Utilizing Material-UI components, it offers both grid and list views for easy navigation and comparison of cryptocurrency data. Moreover, animations powered by Framer Motion enhance the user experience, making the interface dynamic and engaging.",
    link: "https://crypto-tracker-realtime-final.vercel.app/",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    img: "portfolio.png",
    info: " Take your personal portfolio to the next level with this immersive React project featuring SCSS styling, Framer Motion animations, a captivating parallax effect, and a fully functional contact form powered by EmailJS. This portfolio showcases your professional journey, skills, and projects in an engaging . With the addition of a parallax effect, users can enjoy a unique scrolling experience that enhances engagement. Furthermore, the inclusion of EmailJS enables visitors to connect with you effortlessly by sending messages directly through the contact form",
  },
  {
    id: 4,
    title: "E-Commerce",
    img: " ecoomerce.png",
    info: "Revolutionize your online shopping experience with this cutting-edge e-commerce website built using React.js, Tailwind CSS, and featuring seamless integration with local storage. Redux for state management , By fetching data from a dummy API, this platform offers a diverse range of products conveniently organized into categories for easy browsing,What sets this e-commerce website apart is its ability to add products to the cart and save them using local storage.",
    link: "https://github.com/Hrishi-X/e-commerce-hrishi-x",
  },
];
const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-400, 400]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div ref={ref} className="imageContainer">
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.info}</p>
            {/* <button>See Demo</button> */}
            <a className="" href={`${item.link}`}>
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Projects = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>feature Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id}></Single>
      ))}
    </div>
  );
};

export default Projects;
