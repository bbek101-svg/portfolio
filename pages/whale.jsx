import Image from "next/image";
import Link from "next/link";
import homepage from "../public/assets/projects/homepage.png";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { projects } from "../components/projectdata";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { motion } from "framer-motion";

function whale() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          src={homepage}
          alt="whale"
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
        />

        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white p-2 z-10">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="py-2 text-white z-11"
          >
            Whale Succulent E-commerce Website
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            React JS/ Express JS/ Node JS/ MongoDB
          </motion.h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="uppercase tracking-widest text-[#FF6E6C]"
          >
            Whale Succulent E-commerce Website
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="py-2 text-gray-700"
          >
            Overview
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="py-2"
          >
            An e-commerce platform for byuing and selling Succulent plants. The
            platform was built using MERN (MongoDB, Express.js, React.js and
            Node) with an addition of GraphQL for querying purposes. React along
            with Material UI and Framer motion was used for creating a seemless
            and intuitive User Interface where as the backend was build using
            Node, express and GraphQL. GraphQL was used for making queries to
            the MongoDB database. All the technologies were self taught which
            provided a great learning experience of the MERN stack.
          </motion.p>
          <Link href="https://succulent-frontend.vercel.app/">
            <motion.button
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="px-4 py-2 mt-4 mr-8 w-50 relative z-10
                   before:content-[''] before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:z-[-10] before:rounded-lg before:bg-[#FF6E6C] before:scale-x-0 before:origin-left before:transition-transform before:ease-in-out before:duration-300 
                   hover:before:scale-x-100 hover:text-white 
                   transition-colors duration-300 ease-in-out"
            >
              Demo
            </motion.button>
          </Link>

          <Link href="https://github.com/WhaleSucculent/succulent_frontend">
            <motion.button
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="px-4 py-2 mt-4 w-50 relative z-10
                   before:content-[''] before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:z-[-10] before:rounded-lg before:bg-[#FF6E6C] before:scale-x-0 before:origin-left before:transition-transform before:ease-in-out before:duration-300 
                   hover:before:scale-x-100 hover:text-white 
                   transition-colors duration-300 ease-in-out"
            >
              Github
            </motion.button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 p-4 rounded-xl">
          <div className="p-2">
            <p className="tracking-wider pb-2">Technologies</p>
            {projects[0].tags.map((tag, index) => (
              <div key={index} className="grid grid-cols-3 md:grid-cols-1">
                <motion.p
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  key={index}
                  className="text-gray-600 py-2 flex items-center"
                >
                  <RadioButtonCheckedIcon key={index} className="pr-1 " /> {tag}
                </motion.p>
              </div>
            ))}
          </div>
        </div>
        <Link href="/#projects">
          <div className=" w-full flex items-center justify-center cursor-pointer hover:text-[#FF6E6C]">
            <ArrowBackIosIcon fontSize="small" />
            <p>Back</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default whale;
