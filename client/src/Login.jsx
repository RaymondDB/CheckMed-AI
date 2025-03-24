import { useState } from "react";
import { FaUser } from "react-icons/fa";
import Modal from "./components/modal";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); // si quieren puede usar un custom hook tambien que seria bacano

  const handleUsernameChange = ({ target }) => {
    setUsername(target.value);
    console.log("Username:", target.value);
  };

  const handlePasswordChange = ({ target }) => {
    setPassword(target.value);
    console.log("Password:", target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos que llegaron:", { username, password });
    // Aqui se manejara la logicas para poder llevar esos datos al a DB o donde quieran ponerlo
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[var(--color-primary)] p-5">
      <div className="w-full max-w-md md:max-w-xl lg:max-w-xl xl:max-w-2xl overflow-hidden rounded-2xl flex flex-col md:flex-row shadow-xl">
        <div className="bg-white w-full md:w-2/5 flex items-center justify-center p-6 md:p-8 lg:p-10 relative">
          <div className="text-[var(--color-logo)]">
            <FaUser className="w-25 h-25 md:w-35 md:h-35 lg:w-32 lg:h-32" />
          </div>
        </div>

        <div className="bg-[var(--color-secondary)] w-full sm:w-3/5 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="w-full h-full">
           <div className="flex flex-col gap-6 jutify-center">
            <div>
              <label className="block text-white text-lg pb-1 pl-1 md:pl-2 md:pb-1 md:text-xl lg:text-xl">
                Usuario
              </label>
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                className="w-full h-9 md:h-10 lg:h-14 px-3 md:px-4 rounded-full bg-white outline-none md:text-lg shadow-2xl"
              />
            </div>

            <div className="pb-6 md:pb-7">
              <label className="block text-white text-lg pb-1 pl-1 md:pl-2 md:pb-1 md:text-xl lg:text-xl">
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full h-9 px-3 md:h-10 lg:h-14 md:px-4 rounded-full bg-white outline-none md:text-lg shadow-2xl"
              />
            </div>
            </div>

            <div className="flex flex-col items-center gap-7">
              <button
                type="submit"
                className="bg-[var(--color-button)] hover:bg-[var(--color-logo)] font-semibold text-white py-2 px-5 md:py-1 md:px-4 lg:py-4 lg:px-12 rounded-full outline-none duration-300 ease-out active:scale-110 md:text-lg lg:text-xl"
              >
                Iniciar sesión
              </button>

              <p className="text-white text-md md:text-md lg:text-lg">
                ¿No tienes cuenta? <Modal />
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
