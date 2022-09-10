import Image from "next/image";
import Link from "next/link";

function Nav() {
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
        </div>
      </div>
    </div>
  );
}

export default Nav;
