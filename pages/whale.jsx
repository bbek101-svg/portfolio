import Image from "next/image";
import Link from "next/link";
import homepage from "../public/assets/projects/homepage.png";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { projects } from "../components/projectdata";

function whale() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10" />
        <Image
          src={homepage}
          alt="whale"
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white p-2">
          <h2 className="py-2 text-white">
            Whale Succulent E-commerce Website
          </h2>
          <h3>React JS/ Express JS/ Node JS/ MongoDB</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="uppercase tracking-widest">
            Whale Succulent E-commerce Website
          </p>
          <h2 className="py-2">Overview</h2>
          <p>
            An e-commerce platform for byuing and selling Succulent plants. The
            platform was built using MERN (MongoDB, Express.js, React.js and
            Node) with an addition of GraphQL for querying purposes. React along
            with Material UI and Framer motion was used for creating a seemless
            and intuitive User Interface where as the backend was build using
            Node, express and GraphQL. GraphQL was used for making queries to
            the MongoDB database. All the technologies were self taught which
            provided a great learning experience of the MERN stack.
          </p>
          <button className="px-6 py-2 mt-4 mr-8">Demo</button>
          <button className="px-6 py-2 mt-4 mr-8">Github</button>
        </div>
        <div className="col-span-4 md:col-span-1 p-4 rounded-xl">
          <div className="p-2">
            <p className="text-center pb-2">Technologies</p>
            {projects[0].tags.map((tag, index) => (
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
