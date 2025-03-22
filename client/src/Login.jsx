import React from "react";
import { Link } from "react-router";

function Login() {
  return (
    <div className="box-border flex items-center justify-center bg-[var(--color-primary)] w-screen h-screen">
      <div className="bg-[var(--color-secondary)] w-1/2 h-2/3 rounded-3xl flex justify-center items-center ">
        <div className="bg-white w-1/3 h-full rounded-l-3xl"></div>
        <div className="flex justify-center items-center flex-col w-2/3 h-full rounded-r-3xl">
          <div className="flex justify-center items-center gap-5 flex-col w-full h-2/3">
            <div className="flex justify-center flex-col w-2/3 h-1/4">
              <h1 className="text-lg">Usuario</h1>
              <input
                type="text"
                className="bg-white rounded-full h-7 text-black pl-3"
              />
            </div>
            <div className="flex justify-center flex-col w-2/3 h-1/4">
              <h1 className="text-lg">Contraseña</h1>
              <input
                type="password"
                className="bg-white rounded-full h-7 text-black pl-3"
              />
            </div>
          </div>

          <div className="flex items-center flex-col justify-center gap-5 w-full h-1/3">
            <Link
              to="/"
              className="flex justify-center items-center bg-[var(--color-button)] rounded-full text-white w-30 h-8"
            >
              Iniciar Sesión
            </Link>
            <h3>
              No tienes cuenta?{" "}
              <Link to="/" className="text-[var(--color-button)]">
                Crear una
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
