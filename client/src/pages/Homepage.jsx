import React from "react";
import medImg from "../assets/296571-ffffff.svg";
import { CiMedicalCross, CiMedicalClipboard, CiMedicalCase } from "react-icons/ci";

function Homepage() {
  return (
    <>
      <div className="flex relative justify-center items-center bg-fondo bg-no-repeat bg-cover h-screen w-screen">
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
        <article className="flex flex-col justify-center items-center h-full w-2/6 gap-8">
          <div className="flex justify-center items-center bg-cover h-2/8 w-full"><CiMedicalCross className="text-white h-full w-full"/></div>
          <div>
            <h1 className="bg-[var(--color-secondary)] px-7 py-2 rounded-full text-white font-bold uppercase">
              Beneficios
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <p className="text-center text-wrap w-2/3 text-white text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              illo placeat doloremque repellendus atque magnam. Officia quisquam
              commodi temporibus fugiat repudiandae dolorum reiciendis maiores
              molestiae, incidunt culpa asperiores earum praesentium.
            </p>
          </div>
        </article>

        <article className="flex flex-col justify-center items-center h-full w-2/6 gap-8">
          <div className="flex justify-center items-center bg-cover h-2/8 w-full"><CiMedicalClipboard  className="text-white h-full w-full"/></div>
          <div>
            <h1 className="bg-[var(--color-secondary)] px-7 py-2 rounded-full text-white font-bold uppercase">
              Uso
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <p className="text-center text-wrap w-2/3 text-white text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              illo placeat doloremque repellendus atque magnam. Officia quisquam
              commodi temporibus fugiat repudiandae dolorum reiciendis maiores
              molestiae, incidunt culpa asperiores earum praesentium.
            </p>
          </div>
        </article>

        <article className="flex flex-col justify-center items-center h-full w-2/6 gap-8">
          <div className="flex justify-center items-center bg-cover h-2/8 w-full"><CiMedicalCase className="text-white h-full w-full"/></div>
          <div>
            <h1 className="bg-[var(--color-secondary)] px-7 py-2 rounded-full text-white font-bold uppercase">
              Tecnología
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <p className="text-center text-wrap w-2/3 text-white text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              illo placeat doloremque repellendus atque magnam. Officia quisquam
              commodi temporibus fugiat repudiandae dolorum reiciendis maiores
              molestiae, incidunt culpa asperiores earum praesentium.
            </p>
          </div>
        </article>
      </div>
    </>
  );
}

export default Homepage;
