import Hero from "../components/Hero";
import Meta from "../components/Meta";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Nav from "../components/Nav";
import { useSelector } from "react-redux";

export default function Home() {
  const darkMode = useSelector((state) => state.themeToggle.value);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Meta title="Bibek | Full Stack Developer" />
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />

      <Contact />
    </div>
  );
}
