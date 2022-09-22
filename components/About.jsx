import Meta from "./Meta";
import Image from "next/image";
import portrait from "../public/assets/portrait.jpg";
import { motion } from "framer-motion";
function About() {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 px-4 flex items-center py-16"
    >
      <Meta title="Bibek | Full Stack Developer" />
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <motion.div className="col-span-2">
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xl tracking-widest uppercase text-[#FF6E6C]"
          >
            About Me
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="py-4 tracking-wider"
          >
            A bit about myself
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="py-2 text-gray-600"
          >
            Hi! My name is Bibek and I enjoy developing products that provide
            intuitive and better user experience. My interest in web development
            started back when I first customized my own custom profiles in
            Tumblr. Although I have scrapped that account due to embarrassment
            but making the profile look the way I want it to made me realize I
            enjoy creating websites that look pleasing.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="py-2 text-gray-600"
          >
            Today, I am equipped with an arsenal (Fun fact: My favorite soccer
            team) of technologies that allow me to create modern and clean
            looking websites. My primary focus on any project is user experience
            – making it as easy as possible for the user to achieve their
            desired result with the website.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="py-2 text-gray-600"
          >
            I specialize in full stack development using MERN tech stack along
            with other technologies such as Next.js, GraphQL and Tailwind (Fun
            fact: Taught myself all these cool technologies). So, I can work
            from designing stunning UI at the front end using React or Next
            along with Tailwind to designing a database at the backend using
            MongoDB and designing endpoints using REST or creating queries using
            GraphQL.
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.5 }}
          className=" w-full h-auto m-auto rounded-xl border flex items-center justify-center p-2 hover:scale-105 ease-in duration-300"
        >
          <Image
            className="rounded-xl"
            src={portrait}
            alt="Bibek"
            width={600}
            height={400}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default About;
