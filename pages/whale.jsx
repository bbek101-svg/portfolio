import Image from "next/image";
import homepage from "../public/assets/projects/homepage.png";

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
    </div>
  );
}

export default whale;
