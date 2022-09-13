import React from "react";
import Link from "next/link";
import Image from "next/image";

function ProjectRow({ title, projImage, projectUrl, tags }) {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709DFF]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={projImage}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="mb-4 text-2xl text-white tracking-widest text-center">
          {title}
        </h3>
        {tags.map((tag, index) => (
          <p className="p-2 text-white text-center inline bg-slate-600 rounded-xl m-4">
            {tag}
            {(index + 1) % 4 == 0 ? <br className="mb-4 mt-4" /> : ""}
          </p>
        ))}
        <Link href={projectUrl}>
          <p className=" mt-4 text-center py-3 rounded-lg bg-white text-gray-700 text-lg cusror-pointer">
            Details
          </p>
        </Link>
      </div>
    </div>
  );
}

export default ProjectRow;
