import React from "react";
import medImg from "../assets/296571-ffffff.svg";

function Homepage() {
  return (
    <div className="bg-[var(--color-primary)] h-screen w-screen">
      <header className="flex bg-[var(--color-secondary)] w-full h-1/8 justify-center items-center text-white">
        <h1 className="text-2xl font-bold">Check-Med</h1>
      </header>
      <section className="flex justify-center items-center w-full h-7/8 ">
        <div className="flex justify-center items-center h-full w-1/2">
          <img src={medImg} alt="hola" className="w-2/3 h-2/3" />
        </div>
        <section className="flex justify-center items-center flex-col h-full w-1/2 gap-6">
          <h1 className="text-white font-bold text-4xl">Medical System</h1>
          <article className="text-white text-center text-xl  w-2/3 pb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cumque
            voluptate ab accusamus veniam quaerat tenetur eveniet, molestiae
            mollitia! Similique expedita voluptates sapiente, necessitatibus
            tenetur est labore. Repellendus, exercitationem quaerat.
          </article>
          <div className="w-2/3 flex justify-center">
            <input
              type="submit"
              value="Hacer consulta"
              className=" bg-[var(--color-button)] px-4
          py-3 text-white font-bold rounded-full text-lg outline-none hover:bg-[var(--color-logo)] duration-300 ease-out active:scale-110 cursor-pointer"
            />
          </div>
        </section>
      </section>
    </div>
  );
}

export default Homepage;
