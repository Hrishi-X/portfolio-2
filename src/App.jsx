import "./app.scss";
import Contact from "./componennt/contact/Contact";
import Hero from "./componennt/hero/Hero";
import Navbar from "./componennt/navbar/Navbar";
import Parallx from "./componennt/parallax/Parallx";
import Projects from "./componennt/projects/Projects";
import Skills from "./componennt/skills/Skills";
const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Skills">
        <Parallx type="Skills" />
      </section>
      <section>
        <Skills />
      </section>
      <section id="Projects">
        {" "}
        <Parallx type="Projects" />
      </section>
      <Projects />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
