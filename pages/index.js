import Hero from "../components/Hero";
import Meta from "../components/Meta";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div>
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
