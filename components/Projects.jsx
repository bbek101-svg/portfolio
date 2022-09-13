import Image from "next/image";
import whaleSucculent from "../public/assets/projects/homepage.png";
import portfolio from "../public/assets/projects/portfolio.png";
import Link from "next/link";
import ProjectRow from "./ProjectRow";

function Projects() {
  const projects = [
    {
      title: "Whale Succulent E-commerce Website",
      projImage: whaleSucculent,
      projectUrl: "/whale",
      tags: ["React", "Mongo", "Express", "Node", "Stripe", "GraphQL"],
    },
    {
      title: "Portfolio",
      projImage: portfolio,
      projectUrl: "/portfolio",
      tags: ["Next", "Tailwind"],
    },
  ];
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">A showcase of my works</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectRow
              title={project.title}
              projImage={project.projImage}
              projectUrl={project.projectUrl}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
