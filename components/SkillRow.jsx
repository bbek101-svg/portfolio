import Image from "next/image";

function SkillRow({ skill }) {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image
            alt={`${skill}`}
            src={`/../public/assets/skills/${skill}.png`}
            width="64px"
            height="64px"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h4 className="uppercase">{skill}</h4>
        </div>
      </div>
    </div>
  );
}

export default SkillRow;
