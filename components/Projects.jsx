import Image from "next/image";
import whaleSucculent from "../public/assets/projects/homepage.png";
import Link from "next/link";
import ProjectRow from "./ProjectRow";

function Projects() {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">A showcase of my works</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectRow
            title="Whale Succulent e-commerce website"
            projImage={whaleSucculent}
            projectUrl="/whale"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
