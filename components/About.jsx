import Meta from "./Meta";
import Image from "next/image";
import Bibek from "../public/assets/Bibek.png";

function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <Meta title="About" />
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="py-4 tracking-wider">A bit about myself</h2>
          <p className="py-2 text-gray-600">
            Hi! My name is Bibek and I enjoy developing products that provide
            intuitive and better user experience. My interest in web development
            started back when I first customized my own custom profiles in
            Tumblr. Although I have scrapped that account dude to embarrassment
            but making the profile look the way I want it to make me realize I
            enjoy creating websites that look pleasing.
          </p>

          <p className="py-2 text-gray-600">
            Today, I am equipped with an arsenal (Fun fact: my favorite soccer
            team) of technologies that allow me to create modern and clean
            looking websites. My primary focus on any project is user experience
            – making it as easy as possible to the user to achieve their desired
            result with the website.
          </p>
          <p className="py-2 text-gray-600">
            I specialize in full stack development using MERN tech stack along
            with other technologies such as Next.js, GraphQ and Tailwind (Fun
            fact: taught myself all these technologies). So I can work from
            designing stunning UI at the front end using React or Next along
            with Tailwind to designing a database at the backend using MongoDB
            and designing endpoints using REST or creating queries using
            GraphQL.
          </p>
        </div>
        <div className=" w-full h-auto m-auto rounded-xl border flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src={Bibek}
            alt="Bibek"
            width={600}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
