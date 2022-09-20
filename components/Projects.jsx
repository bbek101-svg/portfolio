import Image from "next/image";
import whaleSucculent from "../public/assets/projects/homepage.png";
import portfolio from "../public/assets/projects/portfolio.png";
import Link from "next/link";
import ProjectRow from "./ProjectRow";
import Meta from "./Meta";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Whale Succulent E-commerce",
      projImage: whaleSucculent,
      projectUrl: "/whale",
      tags: ["React", "Mongo", "Express", "Node", "Stripe", "GraphQL"],
    },
    {
      id: 2,
      title: "Portfolio",
      projImage: portfolio,
      projectUrl: "/portfolio",
      tags: ["Next", "Tailwind"],
    },
  ];
  return (
    <div id="projects" className="w-full px-4">
      <Meta title="Bibek | Full Stack Developer" />
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#FF6E6C]">
          Projects
        </p>
        <h2 className="py-4">A showcase of my works</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col">
              <h3>{project.title}</h3>
              <ProjectRow
                key={project.id}
                title={project.title}
                projImage={project.projImage}
                projectUrl={project.projectUrl}
                tags={project.tags}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
