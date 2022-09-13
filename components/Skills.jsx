import Image from "next/image";
import React from "react";
import SkillRow from "./SkillRow";

function Skills() {
  const frontend = ["next", "react", "tailwind-css", "sass", "javascript"];
  const backend = ["express", "graphql", "nodejs"];
  const database = ["mongodb", "mysql"];
  const programming = ["c", "java", "python"];
  const tools = ["github", "jira"];

  return (
    <div className="w-full lg:h-full p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="py-4 text-xl tracking-widest uppercase text-[#5651e5]">
          My Arsenal
        </p>
        <div className="py-4 flex flex-col justify-center">
          <h2 className="py-4 tracking-wider">Frontend</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {frontend.map((skill) => (
              <SkillRow skill={skill} />
            ))}
          </div>
        </div>
        <div className=" py-4 flex flex-col justify-center">
          <h2 className="py-4 tracking-wider">Backend</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {backend.map((skill) => (
              <SkillRow skill={skill} />
            ))}
          </div>
        </div>
        <div className="py-4 flex flex-col justify-center">
          <h2 className="py-4 tracking-wider">Database</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {database.map((skill) => (
              <SkillRow skill={skill} />
            ))}
          </div>
        </div>
        <div className="py-4 flex flex-col justify-center">
          <h2 className="py-4 tracking-wider">Programming Languages</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programming.map((skill) => (
              <SkillRow skill={skill} />
            ))}
          </div>
        </div>
        <div className="py-4 flex flex-col justify-center">
          <h2 className="py-4 tracking-wider">Management Tools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((skill) => (
              <SkillRow skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
