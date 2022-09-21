import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import Meta from "./Meta";
import Link from "next/link";
import Typewriter from "typewriter-effect";

function Hero() {
  const [linkedinHover, setLinkedinHover] = useState(false);
  const [githubHover, setGithubHover] = useState(false);
  const [emailHover, SetEmailHover] = useState(false);

  return (
    <div id="home" className="w-full h-screen transition-height text-center">
      <Meta title="Bibek | Full Stack Developer" />
      <div className="max-w-[1240px] w-full h-full transition-height ease-in-out duration-100 mx-auto p-2 flex justify-center items-center">
        <div>
          <div className=" flex justify-center items-center uppercase text-sm tracking-widest text-gray-600">
            <p>Hello, </p>
            <Typewriter
              options={{
                strings: ["World!", "Aliens!", "Androids!"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <h1 className="py-4 text-gray-700">
            I am <span className="text-[#FF6E6C]">Bibek</span>{" "}
            <span>Regmi</span>{" "}
          </h1>

          <h1 className="py-2 text-gray-700">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("A fullStack Web Developer").start();
              }}
            />
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Hello, I am a full-stack web developer who enjoys builidng products
            on MERN tech stack. I specialize in React/Next.js, Express.js,
            Node.js and MongoDB along with GraphQL and Apollo.
          </p>
          <div className="flex items-center justify-between max-w-[300px] m-auto py-6">
            <Link href="https://www.linkedin.com/in/bibek-regmi-7a3855154/">
              <div className="flex flex-col  min-h-[114.8px] items-center hover:text-[#0C63BC] ease-in-out duration-100">
                <div
                  className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-100"
                  onMouseEnter={() => setLinkedinHover(true)}
                  onMouseLeave={() => setLinkedinHover(false)}
                >
                  <LinkedInIcon />
                </div>
                <p
                  className={
                    linkedinHover
                      ? "inline py-2 ease-in-out duration-100"
                      : "hidden"
                  }
                >
                  LinkedIn
                </p>
              </div>
            </Link>
            <Link href="https://github.com/bbek101-svg">
              <div className="flex flex-col  min-h-[114.8px] items-center hover:text-cyan-500 ease-in-out duration-100">
                <div
                  className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-100"
                  onMouseEnter={() => setGithubHover(true)}
                  onMouseLeave={() => setGithubHover(false)}
                >
                  <GitHubIcon />
                </div>
                <p
                  className={
                    githubHover
                      ? "inline py-2 ease-in-out duration-100"
                      : "hidden"
                  }
                >
                  Github
                </p>
              </div>
            </Link>
            <Link href="mailto:bibek.regmi110@gmail.com">
              <div className="flex flex-col  min-h-[114.8px] items-center hover:text-pink-500 ease-in-out duration-100">
                <div
                  className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-100"
                  onMouseEnter={() => SetEmailHover(true)}
                  onMouseLeave={() => SetEmailHover(false)}
                >
                  <SendIcon />
                </div>
                <p
                  className={
                    emailHover
                      ? "inline py-2 ease-in-out duration-100"
                      : "hidden"
                  }
                >
                  E-mail
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
