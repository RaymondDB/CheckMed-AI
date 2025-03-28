import React from "react";
import medImg from "../assets/296571-ffffff.svg";

function Homepage() {
  return (
    <>
      <div className="flex relative justify-center items-center bg-fondo bg-no-repeat bg-cover h-screen w-screen">
        {/*<header className="flex bg-[var(--color-secondary)] w-full h-1/8 justify-center items-center text-white">
        <h1 className="text-2xl font-bold">Check-Med</h1>
      </header>*/}
        <section className="flex justify-center items-center w-full h-7/8 pt-10">
          <div className="flex justify-center items-center h-full w-1/2">
            <img src={medImg} alt="hola" className="w-2/3 h-2/3" />
          </div>
          <section className="flex justify-center items-center flex-col h-full w-1/2 gap-6">
            <h1 className="text-white font-bold text-4xl cursor-default">
              Medical System
            </h1>
            <article className="text-white text-center text-xl  w-2/3 pb-4 cursor-default">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              cumque voluptate ab accusamus veniam quaerat tenetur eveniet,
              molestiae mollitia! Similique expedita voluptates sapiente,
              necessitatibus tenetur est labore. Repellendus, exercitationem
              quaerat.
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

      <div className="flex relative bg-[var(--color-primary)] h-screen w-screen">
        <article className="flex flex-col justify-center items-center bg-red-500 h-full w-2/6 gap-5">
          <div className="bg-cover h-2/6"></div>
          <div>
            <h1 className="bg-[var(--color-secondary)] px-7 py-2 rounded-full text-white font-bold uppercase">
              Beneficios
            </h1>
          </div>
          <div>
            <p className="text-center text-wrap w-2/3 text-white text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              illo placeat doloremque repellendus atque magnam. Officia quisquam
              commodi temporibus fugiat repudiandae dolorum reiciendis maiores
              molestiae, incidunt culpa asperiores earum praesentium.
            </p>
          </div>
        </article>

        <article className="flex flex-col items-center bg-blue-500 h-full w-2/6">
          <h1>Uso</h1>
        </article>
        <article className="flex flex-col items-center bg-green-500 h-full w-2/6">
          <h1>Tecnologia</h1>
        </article>
      </div>
    </>
  );
}

export default Homepage;
