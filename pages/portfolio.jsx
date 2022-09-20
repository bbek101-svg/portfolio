import Image from "next/image";
import Link from "next/link";
import portfolio from "../public/assets/projects/portfolio.png";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { projects } from "../components/projectdata";

function whale() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10" />
        <Image
          src={portfolio}
          alt="portfolio"
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-999 text-[#5858E7] p-2">
          <h2 className="py-2 text-[#5858E7] z-999">Portfolio Website</h2>
          <h3>React JS/ Next JS/ Tailwind</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="uppercase tracking-widest">Portfolio</p>
          <h2 className="py-2">Overview</h2>
          <p>
            My very own portfolio website showcasing all my skills and projects.
            I undertook the process of builidng the website in Next JS and
            Tailwind CSS with an aim to learn more about the technologies. The
            portfolio website is fully responsive utilizing Tailwind CSS and is
            hosted on vercel platform.
          </p>
          <button className="px-6 py-2 mt-4 mr-8">Demo</button>
          <button className="px-6 py-2 mt-4 mr-8">Github</button>
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
        <Link href="/#projects">Back</Link>
      </div>
    </div>
  );
}

export default whale;
