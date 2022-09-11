import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SendIcon from "@mui/icons-material/Send";

function Hero() {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Hello, World!
          </p>
          <h1 className="py-4 text-gray-700">
            I am <span className="text-[#5651e5]">Bibek</span>{" "}
            <span>Regmi</span>{" "}
          </h1>

          <h1 className="py-2 text-gray-700">A fullStack Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Hey, I am a full-stack web developer who enjoys builidng products on
            MERN tech stack. I specialize in React/Next.js, Express.js, Node.js
            and MongoDB along with GraphQL and Apollo.
          </p>
          <div className="flex items-center justify-between max-w-[300px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-100">
              <LinkedInIcon />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-100">
              <GitHubIcon />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-100">
              <SendIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
