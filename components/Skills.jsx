import React from "react";
import SkillRow from "./SkillRow";
import c from "../public/assets/skills/c.png";
import express from "../public/assets/skills/express.png";
import github from "../public/assets/skills/github.png";
import graphql from "../public/assets/skills/graphql.png";
import java from "../public/assets/skills/java.png";
import javascript from "../public/assets/skills/javascript.png";
import jira from "../public/assets/skills/jira.png";
import mongodb from "../public/assets/skills/mongodb.png";
import mysql from "../public/assets/skills/mysql.png";
import next from "../public/assets/skills/next.png";
import nodejs from "../public/assets/skills/nodejs.png";
import python from "../public/assets/skills/python.png";
import sass from "../public/assets/skills/sass.png";
import react from "../public/assets/skills/react.png";
import tailwind from "../public/assets/skills/tailwind-css.png";
import Meta from "./Meta";
import { motion } from "framer-motion";

function Skills() {
  const frontend = [
    { name: "next", skillImg: next },
    { name: "react", skillImg: react },
    { name: "tailwind", skillImg: tailwind },
    { name: "sass", skillImg: sass },
    { name: "javascript", skillImg: javascript },
  ];
  const backend = [
    { name: "express", skillImg: express },
    { name: "graphql", skillImg: graphql },
    { name: "nodejs", skillImg: nodejs },
  ];
  const database = [
    { name: "mongodb", skillImg: mongodb },
    { name: "mysql", skillImg: mysql },
  ];
  const programming = [
    { name: "c", skillImg: c },
    { name: "java", skillImg: java },
    { name: "python", skillImg: python },
  ];
  const tools = [
    { name: "github", skillImg: github },
    { name: "jira", skillImg: jira },
  ];

  return (
    <div id="skills" className="w-full lg:h-full p-2 px-4">
      <Meta title="Bibek | Full Stack Developer" />
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="py-4 text-xl tracking-widest uppercase text-[#FF6E6C]"
        >
          My Arsenal
        </motion.p>
        <div className="py-4 flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="py-4 tracking-wider"
          >
            Frontend
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {frontend.map((skill, index) => (
              <SkillRow skill={skill} key={index} />
            ))}
          </div>
        </div>
        <div className=" py-4 flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="py-4 tracking-wider"
          >
            Backend
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {backend.map((skill, index) => (
              <SkillRow skill={skill} key={index} />
            ))}
          </div>
        </div>
        <div className="py-4 flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="py-4 tracking-wider"
          >
            Database
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {database.map((skill, index) => (
              <SkillRow skill={skill} key={index} />
            ))}
          </div>
        </div>
        <div className="py-4 flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="py-4 tracking-wider"
          >
            Programming Languages
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programming.map((skill, index) => (
              <SkillRow skill={skill} key={index} />
            ))}
          </div>
        </div>
        <div className="py-4 flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="py-4 tracking-wider"
          >
            Management Tools
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((skill, index) => (
              <SkillRow skill={skill} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
