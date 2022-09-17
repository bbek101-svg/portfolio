import Image from "next/image";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SendIcon from "@mui/icons-material/Send";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function Nav() {
  const [open, setOpen] = useState(false);
  const [shadowEffect, setShadowEffect] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [navColor, setNavColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === "/whale" || router.asPath === "/portfolio") {
      setNavBg("transparent");
      setNavColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setNavColor("#1f2937");
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
  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadowEffect
          ? "fixed w-full h-[80px] shadow-xl z-[100]"
          : "fixed w-full h-[80px] z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <h2 className="cursor-pointer text-[#5651E5] tracking-wider">
            Bibek
          </h2>
        </Link>

        <div>
          <ul style={{ color: `${navColor}` }} className="hidden md:flex">
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase">01. About</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase">02. Projects</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase">03. Skills</li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase">04. Contact</li>
            </Link>
          </ul>
          <div onClick={handleOpen} className="md:hidden cursor-pointer">
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
                <h2 className="cursor-pointer text-[#5651E5] tracking-wider">
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
                <li className="py-4 text-sm">01. About</li>
              </Link>

              <Link href="/#projects">
                <li className="py-4 text-sm">02. Projects</li>
              </Link>

              <Link href="/#skills">
                <li className="py-4 text-sm">03. Skills</li>
              </Link>

              <Link href="/#contact">
                <li className="py-4 text-sm">04. Contact</li>
              </Link>
            </ul>

            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Lets have a chat
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
                  <LinkedInIcon />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
                  <GitHubIcon />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
                  <SendIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
