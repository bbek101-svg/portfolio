import Image from "next/image";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

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
          <div className="md:hidden">
            <MenuIcon fontSize="large" />
          </div>
        </div>
      </div>
      {/* bg-black/70 where 70 isn the opactity value */}
      <div className="fixed left-0 top-0 w-full h-screen bg-black/70">
        {/* our actual Menu */}
        <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-400"></div>
      </div>
    </div>
  );
}

export default Nav;
