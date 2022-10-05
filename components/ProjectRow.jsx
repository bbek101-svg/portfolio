import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

function ProjectRow({ title, projImage, projectUrl, tags }) {
  return (
    <Link href={projectUrl}>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 0.5, staggerChildren: 0.5 }}
        whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
        className="cursor-pointer relative flex items-center hover:my-4 justify-center h-auto w-full shadow-xl dark:hover:bg-[#A456F0] dark:shadow-[#002A2e] shadow-gray-400 rounded-xl p-4 group hover:bg-[#001B1D]"
      >
        <Image
          className="rounded-xl group-hover:opacity-10"
          src={projImage}
          alt="/"
        />
        <motion.div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <motion.h3 className="mb-4 lg:text-xl text-sm dark:text-[#fdfdf0] text-white tracking-widest text-center">
            {title}
          </motion.h3>
          {tags.map((tag, index) => (
            <motion.p
              key={index}
              className="p-2 text-gray-700 lg:p-2 text-center inline dark:bg-[#002a2e] dark:text-[#FDFDFD] bg-white rounded-xl m-4"
            >
              {tag}
              {(index + 1) % 3 == 0 ? <br className="mb-4 mt-4" /> : ""}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>
    </Link>
  );
}

export default ProjectRow;
