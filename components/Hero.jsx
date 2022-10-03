import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import Meta from "./Meta";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function Hero() {
  const [linkedinHover, setLinkedinHover] = useState(false);
  const [githubHover, setGithubHover] = useState(false);
  const [emailHover, SetEmailHover] = useState(false);
  const darkMode = useSelector((state) => state.themeToggle.value);
  return (
    <div
      className={
        darkMode ? "dark duration-300 ease-in-out" : "duration-300 ease-in-out"
      }
    >
      <div
        id="home"
        className="  dark:bg-[#001B1D] w-full h-screen transition-height text-center"
      >
        <Meta title="Bibek | Full Stack Developer" />
        <div className=" max-w-[1240px] w-full h-full transition-height ease-in-out duration-100 mx-auto p-2 flex justify-center items-center">
          <div>
            <div className=" flex justify-center items-center uppercase text-sm tracking-widest text-gray-600">
              <p className="dark:text-[#F2F2F2]">Hello, </p>
              <div className="dark:text-[#F2F2F2]">
                <Typewriter
                  options={{
                    strings: ["World!", "Aliens!", "Androids!"],
                    autoStart: true,
                    loop: true,
                    delay: 500,
                    changeDelay: 70,
                  }}
                />
              </div>
            </div>
            <h1 className="dark:text-[#F2F2F2] py-4 text-gray-700">
              I am <span className="text-[#a456f0]">Bibek</span>{" "}
              <span>Regmi</span>{" "}
            </h1>

            <h1 className="py-2 text-gray-700 dark:text-[#F2F2F2]">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("A fullStack Web Developer").start();
                }}
              />
            </h1>
            <p className="py-4 dark:text-[#ecebeb] text-gray-600 max-w-[70%] m-auto">
              Hello, I am a full-stack web developer who enjoys builidng
              products on MERN tech stack. I specialize in React/Next.js,
              Express.js, Node.js and MongoDB along with GraphQL and Apollo.
            </p>
            <motion.div className="flex items-center justify-between max-w-[300px] m-auto py-6">
              <Link href="https://www.linkedin.com/in/bibek-regmi-7a3855154/">
                <div className="flex flex-col  min-h-[114.8px] items-center hover:text-[#0C63BC] ease-in-out duration-100">
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -50,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1,
                      type: "spring",
                    }}
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                    className="rounded-full shadow-lg dark:shadow-[#002A2e] shadow-gray-400 p-4 cursor-pointer ease-in duration-100"
                    onMouseEnter={() => setLinkedinHover(true)}
                    onMouseLeave={() => setLinkedinHover(false)}
                  >
                    <motion.div
                      className="dark:text-[#F2F2F2]"
                      whileHover={{
                        rotate: 360,
                        transition: { duration: 0.5, delay: 0.3 },
                      }}
                    >
                      <LinkedInIcon />
                    </motion.div>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className={
                      linkedinHover
                        ? "inline py-2 ease-in-out duration-100"
                        : "hidden"
                    }
                  >
                    LinkedIn
                  </motion.p>
                </div>
              </Link>
              <Link href="https://github.com/bbek101-svg">
                <div className="flex flex-col  min-h-[114.8px] items-center hover:text-cyan-500 ease-in-out duration-100">
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -50,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2,
                      type: "spring",
                    }}
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                    className="rounded-full shadow-lg dark:shadow-[#002A2e] shadow-gray-400 p-4 cursor-pointer ease-in duration-100"
                    onMouseEnter={() => setGithubHover(true)}
                    onMouseLeave={() => setGithubHover(false)}
                  >
                    <motion.div
                      className="dark:text-[#F2F2F2]"
                      whileHover={{
                        rotate: 360,
                        transition: { duration: 0.5, delay: 0.3 },
                      }}
                    >
                      <GitHubIcon />
                    </motion.div>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className={
                      githubHover
                        ? "inline py-2 ease-in-out duration-100"
                        : "hidden"
                    }
                  >
                    Github
                  </motion.p>
                </div>
              </Link>
              <Link href="mailto:bibek.regmi110@gmail.com">
                <div className="flex flex-col  min-h-[114.8px] items-center hover:text-pink-500 ease-in-out duration-100">
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -50,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3,
                      type: "spring",
                    }}
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                    className="rounded-full shadow-lg dark:shadow-[#002A2e] shadow-gray-400 p-4 cursor-pointer ease-in duration-100"
                    onMouseEnter={() => SetEmailHover(true)}
                    onMouseLeave={() => SetEmailHover(false)}
                  >
                    <motion.div
                      className="dark:text-[#F2F2F2]"
                      whileHover={{
                        rotate: 360,
                        transition: { duration: 0.5, delay: 0.3 },
                      }}
                    >
                      <SendIcon />
                    </motion.div>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className={
                      emailHover
                        ? "inline py-2 ease-in-out duration-100"
                        : "hidden"
                    }
                  >
                    E-mail
                  </motion.p>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
