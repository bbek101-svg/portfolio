import Image from "next/image";
import { motion } from "framer-motion";

function SkillRow({ skill }) {
  const colors = {
    next: "hover:text-[#000]",
    react: "hover:text-[#61dafb]",
    tailwind: "hover:text-[#38BDF8]",
    sass: "hover:text-[#cc6699]",
    javascript: "hover:text-[#f7df1e]",
    express: "hover:text-[#f7df1e]",
    graphql: "hover:text-[#e535ab]",
    nodejs: "hover:text-[#339933]",
    mongodb: "hover:text-[#47a248]",
    mysql: "hover:text-[#4479a1]",
    c: "hover:text-[#00599c]",
    java: "hover:text-[#F27500]",
    python: "hover:text-[#3776ab]",
    github: "hover:text-[#0052cc]",
    jira: "hover:text-[#0052cc]",
  };
  let col = `${colors[skill.name]}`;

  return (
    <div
      className={`p-6 shadow-xl dark:shadow-[#002A2e] rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer ${col}`}
    >
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 0.5, staggerChildren: 0.5 }}
        className="grid grid-cols-2 gap-4 justify-center items-center"
      >
        <motion.div className="m-auto">
          <Image
            alt={`${skill.name}`}
            src={skill.skillImg}
            width="64px"
            height="64px"
          />
        </motion.div>
        <motion.div className="flex flex-col items-center justify-center">
          <motion.h4 className="uppercase">{skill.name}</motion.h4>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default SkillRow;
