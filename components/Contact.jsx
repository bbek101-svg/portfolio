import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import Link from "next/link";
import Meta from "./Meta";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function Contact() {
  const darkMode = useSelector((state) => state.themeToggle.value);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bxbo6de",
        "template_5msl9oq",
        form.current,
        "z9iql4d6-_N_YI-6I"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div
        id="contact"
        className="dark:bg-[#001B1D]  w-full lg:min-h-screen px-4"
      >
        <Meta title="Bibek | Full Stack Developer" />
        <div className="max-w-[1240px] m-auto px-2 py-16 dark:bg-[#001B1D]">
          <Link href="/#contact">
            <motion.p
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              className="text-xl tracking-widest uppercase text-[#a456f0] inline cursor-pointer
          
          relative z-10
                   before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-2 before:right-0 before:z-[-10] before:bg-[#ffcc00] before:scale-x-0 before:origin-left before:transition-transform before:ease-in-out before:duration-300 
                   hover:before:scale-x-100 
                   transition-colors duration-300 ease-in-out"
            >
              I reply fast!
            </motion.p>
          </Link>

          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="py-4 text-gray-700 dark:text-[#F2F2F2]"
          >
            Say Hello
          </motion.h2>
          <div className="grid w-full h-auto py-4">
            <div className="py-4">
              <motion.form
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 1 }}
                transition={{ duration: 0.5, staggerChildren: 0.5 }}
                ref={form}
                onSubmit={sendEmail}
              >
                <motion.div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 dark:text-[#F2F2F2]">
                      Name
                    </label>
                    <input
                      className="dark:bg-[#06292c] rounded-lg p-3 flex border-2 border-[#E9B3DA] focus:outline-none focus:border-2 focus:border-[#DE31A5]"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 dark:text-[#F2F2F2]">
                      Email
                    </label>
                    <input
                      className="dark:bg-[#06292c] rounded-lg p-3 flex border-2 border-[#E9B3DA] focus:outline-none focus:border-2 focus:border-[#DE31A5]"
                      type="email"
                      name="email"
                    />
                  </div>
                </motion.div>
                <motion.div className="grid w-full py-2 gap-4">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 dark:text-[#F2F2F2]">
                      Message
                    </label>
                    <textarea
                      className="dark:bg-[#06292c] rounded-lg p-3 border-2 border-[#E9B3DA] focus:outline-none focus:border-2 focus:border-[#DE31A5]"
                      cols={10}
                      rows={10}
                      name="message"
                    ></textarea>
                  </div>
                </motion.div>
                <motion.div className="w-full flex items-center justify-center">
                  <button
                    type="submit"
                    className="p-3 mt-4 w-50 relative z-10
                   before:content-[''] before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:z-[-10] before:rounded-lg before:bg-[#a456f0] before:scale-x-0 before:origin-left before:transition-transform before:ease-in-out before:duration-300 
                   hover:before:scale-x-100 hover:text-white 
                   transition-colors duration-300 ease-in-out"
                  >
                    Send The Pigeon
                  </button>
                </motion.div>
              </motion.form>
            </div>
          </div>
          <div className="flex justify-center py-12  ]">
            <Link href="/">
              <motion.div className="rounded-full p-4 shadow-lg dark:shadow-[#002A2e] shadow-gray-400 cursor-pointer">
                <motion.div
                  whileHover={{
                    rotate: 360,
                    scale: 1.1,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  }}
                >
                  <ArrowCircleUpIcon
                    fontSize="large"
                    className="text-[#a456f0]"
                  />
                </motion.div>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
