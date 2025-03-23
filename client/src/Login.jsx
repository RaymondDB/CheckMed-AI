import React from "react";
import { Link } from "react-router";
import { FaUser } from "react-icons/fa";
import  ModalExample  from "./components/modal.jsx";

function Login() {
  return (
    <div className="box-border flex items-center justify-center bg-[var(--color-primary)] w-screen h-screen">
      <div className="bg-[var(--color-secondary)] w-1/2 h-2/3 rounded-3xl flex justify-center items-center ">
        <div className="flex items-center justify-center bg-white w-1/3 h-full rounded-l-3xl">
          <FaUser className="text-[var(--color-primary)] text-400 text-(length:--icon-size)" />
        </div>
        <div className="flex justify-center items-center flex-col w-2/3 h-full rounded-r-3xl">
          <div className="flex justify-center items-center gap-5 flex-col w-full h-2/3">
            <div className="flex justify-center flex-col w-2/3 h-1/4 ">
              <h1 className="text-lg">Usuario</h1>
              <input
                type="text"
                className="bg-white rounded-full h-7 text-black pl-3 outline-none"
              />
            </div>
            <div className="flex justify-center flex-col w-2/3 h-1/4">
              <h1 className="text-lg">Contraseña</h1>
              <input
                type="password"
                className="bg-white rounded-full h-7 text-black pl-3 outline-none"
              />
            </div>
          </div>

          <div className="flex items-center flex-col justify-center gap-10 w-full h-1/3">
            <Link
              to="/"
              className="flex justify-center items-center bg-[var(--color-button)] rounded-full text-s w-30 h-9 hover:bg-[var(--color-primary)] active:scale-110 duration-300 ease-out"
            >
              Iniciar Sesión
            </Link>
            <h2>
              No tienes cuenta? <ModalExample />
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
