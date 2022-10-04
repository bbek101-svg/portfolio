import Image from "next/image";
import whaleSucculent from "../public/assets/projects/homepage.png";
import portfolio from "../public/assets/projects/portfolio.png";
import unknown from "../public/assets/projects/unknown.png";
import Link from "next/link";
import ProjectRow from "./ProjectRow";
import Meta from "./Meta";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function Projects() {
  const darkMode = useSelector((state) => state.themeToggle.value);
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
      tags: ["Next", "Tailwind", "MaterialUI", "FramerMotion", "Redux"],
    },
    {
      id: 3,
      title: "Boost YYC",
      projImage: unknown,
      projectUrl: "/boostyyc",
      tags: [
        "Next",
        "MaterialUI",
        "RestAPI",
        "GoogleMapsAPI",
        "JavaBackend",
        "FacebookAPI",
      ],
    },
  ];
  return (
    <div className={darkMode ? "dark" : ""}>
      <div id="projects" className="dark:bg-[#001B1D] w-full px-4">
        <Meta title="Bibek | Full Stack Developer" />
        <motion.div className="max-w-[1240px] mx-auto px-2 py-16">
          <Link href="/#projects">
            <motion.p
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              className="text-xl tracking-widest uppercase text-[#a456f0] inline cursor-pointer
          relative z-10
                   before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-2 before:right-0 before:z-[-10] before:bg-[#ffcc00] before:scale-x-0 before:origin-left before:transition-transform before:ease-in-out before:duration-300 
                   hover:before:scale-x-100 
                   transition-colors duration-300 ease-in-out
          "
            >
              Projects
            </motion.p>
          </Link>

          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="py-4 text-gray-700 dark:text-[#F2F2F2]"
          >
            A showcase of my works
          </motion.h2>
          <div className="dark:text-[#ecebdb] grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="flex flex-col py-4">
                <p className="tracking-wider" key={project.id}>
                  {project.id}. {project.title}
                </p>
                <ProjectRow
                  key={project.id}
                  title={project.title}
                  projImage={project.projImage}
                  projectUrl={project.projectUrl}
                  tags={project.tags}
                  darkMode={darkMode}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
