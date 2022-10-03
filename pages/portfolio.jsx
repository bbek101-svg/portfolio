import Image from "next/image";
import Link from "next/link";
import portfolioPic from "../public/assets/projects/portfolio.png";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { projects } from "../components/projectdata";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function Portfolio() {
  const darkMode = useSelector((state) => state.themeToggle.value);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="w-full dark:bg-[#001B1D] min-h-screen">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <div className="w-screen h-[30vh] lg:h-[40vh] relative">
          <Image
            src={portfolioPic}
            alt="portfolio"
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 text-white p-2">
            <motion.h2
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="py-2"
            >
              Portfolio Website
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              React JS/ Next JS/ Tailwind
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
              Portfolio
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="py-2 text-gray-700 dark:text-[#F2F2F2]"
            >
              Overview
            </motion.h2>
            <motion.p
              className="py-2 dark:text-[#ecebdb]"
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              My very own portfolio website showcasing all my skills and
              projects. I undertook the process of builidng the website in Next
              JS and Tailwind CSS with an aim to learn more about the
              technologies. The portfolio website is fully responsive utilizing
              Tailwind CSS and is hosted on vercel platform.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="py-2 dark:text-[#ecebdb]"
            >
              The idea for my portfolio was to play around with new
              technologies, learn them by implementing them in a personal
              project. I am glad that this project turned out really fun.
            </motion.p>
            <Link href="/">
              <motion.button
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="px-4 py-2 mt-4 mr-8 w-50 relative z-10
                   before:content-[''] before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:z-[-10] before:rounded-lg before:bg-[#a456f0] before:scale-x-0 before:origin-left before:transition-transform before:ease-in-out before:duration-300 
                   hover:before:scale-x-100 hover:text-white 
                   transition-colors duration-300 ease-in-out"
              >
                Demo
              </motion.button>
            </Link>

            <Link href="https://github.com/bbek101-svg/portfolio">
              <motion.button
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="px-4 py-2 mt-4 mr-8 w-50 relative z-10
                   before:content-[''] before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:z-[-10] before:rounded-lg before:bg-[#a456f0] before:scale-x-0 before:origin-left before:transition-transform before:ease-in-out before:duration-300 
                   hover:before:scale-x-100 hover:text-white 
                   transition-colors duration-300 ease-in-out"
              >
                Github
              </motion.button>
            </Link>
          </div>
          <div className="col-span-4 md:col-span-1 p-4 rounded-xl">
            <div className="p-2">
              <p className="pb-2 tracking-wider dark:text-[#ecebdb]">
                Technologies
              </p>
              {projects[1].tags.map((tag, index) => (
                <div key={index} className="grid grid-cols-3 md:grid-cols-1">
                  <motion.p
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    key={index}
                    className="text-gray-600 py-2 flex items-center dark:text-[#ecebdb]"
                  >
                    <RadioButtonCheckedIcon key={index} className="pr-1" />{" "}
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
              <ArrowBackIosIcon fontSize="small" />
              <p>Back</p>
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
