function Hero() {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Hello, World!
          </p>
          <h1>
            I am <span className="text-[#5651e5]">Bibek</span>{" "}
            <span>Regmi</span>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
