import Image from "next/image";

function SkillRow({ skill }) {
  const colors = {
    next: "hover:text-[#000]",
    react: "hover:text-[#61dafb]",
    tailwind: "hover:text-[#38BDF8]",
    sass: "hover:text-[#cc6699]",
    javascript: "hover:text-[#f7df1e]",
    express: "hover:text-[#000000]",
    graphql: "hover:text-[#e535ab]",
    nodejs: "hover:text-[#339933]",
    mongodb: "hover:text-[#47a248]",
    mysql: "hover:text-[#4479a1]",
    c: "hover:text-[#00599c]",
    java: "hover:text-[#007396]",
    python: "hover:text-[#3776ab]",
    github: "hover:text-[#181717]",
    jira: "hover:text-[#0052cc]",
  };
  let col = `${colors[skill.name]}`;

  return (
    <div
      className={`p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ${col}`}
    >
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image
            alt={`${skill.name}`}
            src={skill.skillImg}
            width="64px"
            height="64px"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h4 className="uppercase">{skill.name}</h4>
        </div>
      </div>
    </div>
  );
}

export default SkillRow;
