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
    <div className="flex items-center justify-center min-h-screen bg-[#0a1a2f] p-4">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl overflow-hidden rounded-2xl flex flex-col sm:flex-row shadow-lg">
        <div className="bg-[#dde1e7] w-full sm:w-2/5 flex flex-col items-center justify-center p-6 md:p-8 lg:p-10 relative">
          <div className="text-[#0a3142] mb-2">
            <FaUser className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32" />
          </div>
        </div>

        <div className="bg-[#1e4976] w-full sm:w-3/5 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-4 md:mb-6 lg:mb-8">
              <label className="block text-white mb-2 md:mb-3 md:text-lg lg:text-xl">
                Usuario
              </label>
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                className="w-full h-10 md:h-12 lg:h-14 px-3 md:px-4 rounded-full bg-[#e0e0e0] text-gray-800 focus:outline-none md:text-lg"
              />
            </div>

            <div className="mb-6 md:mb-8 lg:mb-10">
              <label className="block text-white mb-2 md:mb-3 md:text-lg lg:text-xl">
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full h-10 md:h-12 lg:h-14 px-3 md:px-4 rounded-full bg-[#e0e0e0] text-gray-800 focus:outline-none md:text-lg"
              />
            </div>

            <div className="flex flex-col items-center">
              <button
                type="submit"
                className="bg-[#5ba4c9] hover:bg-[#4a93b8] text-white py-2 px-8 md:py-3 md:px-10 lg:py-4 lg:px-12 rounded-full mb-4 md:mb-6 transition duration-300 md:text-lg lg:text-xl"
              >
                Iniciar Sesión
              </button>

              <p className="text-white text-sm md:text-base lg:text-lg">
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
