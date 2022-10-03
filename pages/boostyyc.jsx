import Image from "next/image";
import Link from "next/link";
import homepage from "../public/assets/projects/homepage.png";
import unknown from "../public/assets/projects/unknown.png";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { projects } from "../components/projectdata";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { motion } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";

function boostyyc() {
  const darkMode = useSelector((state) => state.themeToggle.value);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="w-full min-h-screen dark:bg-[#001B1D]">
        <div className="w-screen h-[30vh] lg:h-[40vh] relative">
          <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
          <Image
            src={unknown}
            alt="boostyyc"
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
          />

          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white p-2 z-10">
            <motion.h2
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="py-2 text-white z-11"
            >
              Boost YYC
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Next JS/ Google Maps API/ Facebook API/ Java Backend
            </motion.h3>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
          <div className="col-span-4">
            <motion.p
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="uppercase tracking-widest text-[#a456f0]"
            >
              Boost YYC
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="py-2 text-gray-700 dark:text-[#F2F2F2]"
            >
              Overview
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="py-2 dark:text-[#ecebdb]"
            >
              Hosted in the Platform Calgary, I participated in the Hackathon
              event where many participants from different backgrounds and
              skills came together to compete to solve some of the pressing
              problem in the downtown of the Calgary.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="py-2 dark:text-[#ecebdb]"
            >
              The idea we came up with was an website that can help people
              create and promote thier own events. One of the major selling
              point of the website was its authenticity as it was a website
              linked with the City of the Calgary. The users create an event in
              the website and that event is then promoted to various social
              media handles of the City of Calgry Events. We used facebook API
              to post the created events to Facebook, Instagram and even
              Twitter. The backend was made with Java Spring boot and REST API
              was used in the Next JS to get data from the various end points.
            </motion.p>
          </div>
          <div className="col-span-4 md:col-span-1 p-4 rounded-xl">
            <div className="p-2">
              <p className="tracking-wider pb-2 dark:text-[#ecebdb]">
                Technologies
              </p>
              {projects[2].tags.map((tag, index) => (
                <div key={index} className="grid grid-cols-3 md:grid-cols-1">
                  <motion.p
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    key={index}
                    className="text-gray-600 py-2 flex items-center dark:text-[#ecebdb]"
                  >
                    <RadioButtonCheckedIcon key={index} className="pr-1 " />{" "}
                    {tag}
                  </motion.p>
                </div>
              ))}
            </div>
          </div>
          <Link href="/#projects">
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className=" w-full flex items-center justify-start cursor-pointer dark:text-[#ecebdb] dark:hover:text-[#a456f0] hover:text-[#a456f0]"
            >
              <div>
                <ArrowBackIosIcon fontSize="small" />
              </div>

              <p>Back</p>
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default boostyyc;
