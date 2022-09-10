import Image from "next/image";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
function Nav() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="fixed w-full h-[80px] shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src="/../public/assets/Bibek.png"
          alt="/"
          width="150"
          height="50"
        />

        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase">Projects</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase">Contact</li>
            </Link>
          </ul>
          <div onClick={handleOpen} className="md:hidden">
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
              <Image
                src="/../public/assets/Bibek.png"
                alt="/"
                width="100"
                height="40"
              />
              <div
                onClick={handleOpen}
                className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer"
              >
                <CloseIcon />
              </div>
            </div>
            <div className="border-b border-black-500 my-5">
              <p className="w-[85%] md:w-[90%] py-4">
                Knock Knock... Let's work together
              </p>
            </div>
          </div>
          {/* menu */}
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm">About</li>
              </Link>

              <Link href="/">
                <li className="py-4 text-sm">Projects</li>
              </Link>

              <Link href="/">
                <li className="py-4 text-sm">Skills</li>
              </Link>

              <Link href="/">
                <li className="py-4 text-sm">Contact</li>
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
