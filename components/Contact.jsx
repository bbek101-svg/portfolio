import React from "react";

function Contact() {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
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
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                  />
                </div>
              </div>
              <div className="grid w-full py-2 gap-4">
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Message</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="textarea"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
