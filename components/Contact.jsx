import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import Link from "next/link";
import Meta from "./Meta";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bxbo6de",
        "template_5msl9oq",
        form.current,
        "z9iql4d6-_N_YI-6I"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="contact" className="w-full lg:h-screen px-4">
      <Meta title="Bibek | Full Stack Developer" />
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#FF6E6C]">
          I reply fast!
        </p>
        <h2 className="py-4">Shoot Me a Message</h2>
        <div className="grid w-full h-auto py-4">
          <div className="py-4">
            <form ref={form} onSubmit={sendEmail}>
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Name</label>
                  <input
                    className="rounded-lg p-3 flex border-2 border-[#E9B3DA] focus:outline-none focus:border-2 focus:border-[#DE31A5]"
                    type="text"
                    name="name"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className=" rounded-lg p-3 flex border-2 border-[#E9B3DA] focus:outline-none focus:border-2 focus:border-[#DE31A5]"
                    type="email"
                    name="email"
                  />
                </div>
              </div>
              <div className="grid w-full py-2 gap-4">
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="rounded-lg p-3 border-2 border-[#E9B3DA] focus:outline-none focus:border-2 focus:border-[#DE31A5]"
                    cols={10}
                    rows={10}
                    name="message"
                  ></textarea>
                </div>
              </div>
              <div className="w-full flex items-center justify-center">
                <button
                  type="submit"
                  className="p-3 mt-4 w-50 relative z-10
                   before:content-[''] before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:z-[-10] before:rounded-lg before:bg-[#FF6E6C] before:scale-x-0 before:origin-left before:transition-transform before:ease-in-out before:duration-300 
                   hover:before:scale-x-100 hover:text-white 
                   transition-colors duration-300 ease-in-out"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full p-4 shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300">
              <ArrowCircleUpIcon fontSize="large" className="text-[#FF6E6C]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
