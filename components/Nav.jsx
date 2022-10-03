import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SendIcon from "@mui/icons-material/Send";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "./feaures/theme/themeToggleSlice";

function Nav() {
  const [open, setOpen] = useState(false);
  const [shadowEffect, setShadowEffect] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [navColor, setNavColor] = useState("#1f2937");
  const [menuColor, setMenuColor] = useState("#374151");
  const router = useRouter();
  const darkMode = useSelector((state) => state.themeToggle.value);
  const toggleDarkMode = useDispatch();
  useEffect(() => {
    if (
      router.asPath === "/whale" ||
      router.asPath === "/portfolio" ||
      router.asPath === "/boostyyc"
    ) {
      setNavBg("transparent");
      setNavColor("#fdfdfd");
      setMenuColor("#ecf0f3");
    } else {
      setMenuColor("#374151");
    }
  }, [router]);

  const handleOpen = () => {
    setOpen(!open);
  };
  //   its gonna run one time
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadowEffect(true);
      } else {
        setShadowEffect(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  useEffect(() => {
    if (darkMode) {
      setNavBg("#001B1D");
      setNavColor("#fdfdfd");
    } else {
      setNavBg("#fdfdfd");
      setNavColor("#333333");
    }
    if (
      router.asPath === "/Whale" ||
      router.asPath === "/Portfolio" ||
      router.asPath === "/Boostyyc"
    ) {
      setNavBg("transparent");
      setNavColor("#fdfdfd");
      setMenuColor("#ecf0f3");
    }
  }, [darkMode]);
  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadowEffect
          ? "fixed w-full h-[80px] shadow-xl z-[100] px-2"
          : "fixed w-full h-[80px] z-[100] px-2"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <motion.h2
            initial={{
              opacity: 0,
              y: -100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            className={
              open
                ? "hidden"
                : "cursor-pointer text-[#a456f0] tracking-wider relative z-10 before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-2 before:right-0 before:z-[-10] before:bg-[#ffcc00] before:scale-x-0 before:origin-left before:transition-transform before:ease-in-out before:duration-300 hover:before:scale-x-100 transition-colors duration-300 ease-in-out"
            }
          >
            Bibek
          </motion.h2>
        </Link>

        <div>
          <ul style={{ color: `${navColor}` }} className="hidden md:flex">
            <Link href="/#about">
              <motion.li
                initial={{
                  opacity: 0,
                  y: -100,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                }}
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                className="ml-10 text-md uppercase relative z-10
                   before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-2 before:right-0 before:z-[-10] before:bg-[#ffcc00] before:scale-x-0 before:origin-left before:transition-transform before:ease-in-out before:duration-300 
                   hover:before:scale-x-100 
                   transition-colors duration-300 ease-in-out "
              >
                01. About
              </motion.li>
            </Link>
            <Link href="/#projects">
              <motion.li
                initial={{
                  opacity: 0,
                  y: -100,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.3,
                }}
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                className="ml-10 text-md uppercase relative z-10
                   before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-2 before:right-0 before:z-[-10] before:bg-[#ffcc00] before:scale-x-0 before:origin-left before:transition-transform before:ease-in-out before:duration-300 
                   hover:before:scale-x-100 
                   transition-colors duration-300 ease-in-out"
              >
                02. Projects
              </motion.li>
            </Link>
            <Link href="/#skills">
              <motion.li
                initial={{
                  opacity: 0,
                  y: -100,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.4,
                }}
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                className="ml-10 text-md uppercase relative z-10
                   before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-2 before:right-0 before:z-[-10] before:bg-[#ffcc00] before:scale-x-0 before:origin-left before:transition-transform before:ease-in-out before:duration-300 
                   hover:before:scale-x-100 
                   transition-colors duration-300 ease-in-out"
              >
                03. Skills
              </motion.li>
            </Link>
            <Link href="/#contact">
              <motion.li
                initial={{
                  opacity: 0,
                  y: -100,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.5,
                }}
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                className="ml-10 text-md uppercase relative z-10
                   before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-2 before:right-0 before:z-[-10] before:bg-[#ffcc00] before:scale-x-0 before:origin-left before:transition-transform before:ease-in-out before:duration-300 
                   hover:before:scale-x-100 
                   transition-colors duration-300 ease-in-out"
              >
                04. Contact
              </motion.li>
            </Link>
            <div
              className="flex items-center justify-center ml-4"
              onClick={() => toggleDarkMode(toggle())}
            >
              <li>
                <ToggleOffIcon />
              </li>
            </div>
          </ul>
          <div
            onClick={handleOpen}
            className="md:hidden cursor-pointer"
            style={{ color: `${menuColor}` }}
          >
            <MenuIcon fontSize="large" />
          </div>
        </div>
      </div>
      {/* bg-black/70 where 70 isn the opactity value */}
      <div
        onClick={handleOpen}
        className={
          open
            ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
            : ""
        }
      >
        {/* our actual Menu */}
        <div
          className={
            open
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in-out duration-300"
              : "fixed left-[-100%] top-0 p-10 ease-in-out duration-300"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <h2 className="cursor-pointer text-[#a456f0] tracking-wider">
                  Bibek
                </h2>
              </Link>

              <div
                onClick={handleOpen}
                className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer"
              >
                <CloseIcon />
              </div>
            </div>
            <div className="border-b border-black-500 my-5">
              <p className="w-[85%] md:w-[90%] py-4">
                Knock Knock Let us work together
              </p>
            </div>
          </div>
          {/* menu */}
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/#about">
                <li className="py-4 text-md">01. About</li>
              </Link>

              <Link href="/#projects">
                <li className="py-4 text-md">02. Projects</li>
              </Link>

              <Link href="/#skills">
                <li className="py-4 text-md">03. Skills</li>
              </Link>

              <Link href="/#contact">
                <li className="py-4 text-md">04. Contact</li>
              </Link>
            </ul>

            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#a456f0]">
                Lets have a chat
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <Link href="https://www.linkedin.com/in/bibek-regmi-7a3855154/">
                  <div className="flex items-center justify-center rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:text-[#0C63BC] ease-in duration-100">
                    <LinkedInIcon />
                  </div>
                </Link>
                <Link href="https://github.com/bbek101-svg">
                  <div className="flex items-center justify-center rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:text-cyan-500 ease-in duration-100">
                    <GitHubIcon />
                  </div>
                </Link>
                <Link href="mailto:bibek.regmi110@gmail.com">
                  <div className="flex items-center justify-center rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:text-pink-500 ease-in duration-100">
                    <SendIcon />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
