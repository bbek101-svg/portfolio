import Hero from "../components/Hero";
import Meta from "../components/Meta";
import Nav from "../components/Nav";
import About from "../components/About";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Meta title="Bibek | Full Stack Developer" />
      <Nav />
      <Hero />
      <About />
      <Skills />
    </div>
  );
}
