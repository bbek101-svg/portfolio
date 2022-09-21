import Image from "next/image";
import Link from "next/link";
import portfolio from "../public/assets/projects/portfolio.png";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { projects } from "../components/projectdata";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function whale() {
  return (
    <div className="w-full">
      <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <Image
          src={portfolio}
          alt="portfolio"
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 text-white p-2">
          <h2 className="py-2">Portfolio Website</h2>
          <h3>React JS/ Next JS/ Tailwind</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="uppercase tracking-widest text-[#FF6E6C]">Portfolio</p>
          <h2 className="py-2">Overview</h2>
          <p>
            My very own portfolio website showcasing all my skills and projects.
            I undertook the process of builidng the website in Next JS and
            Tailwind CSS with an aim to learn more about the technologies. The
            portfolio website is fully responsive utilizing Tailwind CSS and is
            hosted on vercel platform.
          </p>
          <p className="py-2">
            The idea for my portfolio was to play around with new technologies,
            learn them by implementing them in a personal project. I am glad
            that this project turned out really fun.
          </p>
          <Link href="/">
            <button
              className="px-4 py-2 mt-4 mr-8 w-50 relative z-10
                   before:content-[''] before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:z-[-10] before:rounded-lg before:bg-[#FF6E6C] before:scale-x-0 before:origin-left before:transition-transform before:ease-in-out before:duration-300 
                   hover:before:scale-x-100 hover:text-white 
                   transition-colors duration-300 ease-in-out"
            >
              Demo
            </button>
          </Link>

          <Link href="https://github.com/bbek101-svg/portfolio">
            <button
              className="px-4 py-2 mt-4 mr-8 w-50 relative z-10
                   before:content-[''] before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:z-[-10] before:rounded-lg before:bg-[#FF6E6C] before:scale-x-0 before:origin-left before:transition-transform before:ease-in-out before:duration-300 
                   hover:before:scale-x-100 hover:text-white 
                   transition-colors duration-300 ease-in-out"
            >
              Github
            </button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 p-4 rounded-xl">
          <div className="p-2">
            <p className="text-center pb-2">Technologies</p>
            {projects[1].tags.map((tag, index) => (
              <div key={index} className="grid grid-cols-3 md:grid-cols-1">
                <p key={index} className="text-gray-600 py-2 flex items-center">
                  <RadioButtonCheckedIcon key={index} className="pr-1" /> {tag}
                </p>
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
