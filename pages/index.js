import Hero from "../components/Hero";
import Meta from "../components/Meta";
import Nav from "../components/Nav";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Meta title="Bibek | Full Stack Developer" />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
