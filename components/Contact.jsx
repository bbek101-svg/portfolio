import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import Link from "next/link";
import Meta from "./Meta";
function Contact() {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <Meta title="Bibek | Full Stack Developer" />
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#FF6E6C]">
          I reply fast!
        </p>
        <h2 className="py-4">Shoot Me a Message</h2>
        <div className="grid w-full h-auto p-4">
          <div className="p-4">
            <form>
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Name</label>
                  <input
                    className="rounded-lg p-3 flex border-gray-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className=" rounded-lg p-3 flex border-gray-300"
                    type="email"
                  />
                </div>
              </div>
              <div className="grid w-full py-2 gap-4">
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="rounded-lg p-3"
                    cols={10}
                    rows={10}
                  ></textarea>
                </div>
              </div>
              <button className="w-full p-3 mt-4">Send Message</button>
            </form>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full p-4 shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300">
              <ArrowCircleUpIcon fontSize="large" className="text-[#5651e5]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
