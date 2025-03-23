import { useState } from "react";
import { Dialog } from "@headlessui/react";

function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="text-[var(--color-button)] hover:text-[var(--color-primary)] duration-300 ease-out outline-none"
        onClick={() => setIsOpen(true)}
      >
        Crear una
      </button>

      {/* Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 flex items-center justify-center bg-black opacity-75">
        <Dialog.Panel className="flex justify-center flex-col bg-white rounded-xl shadow-xl w-1/2 h-1/2 transform duration-300 scale-95">
          <Dialog.Title className="text-lg text-black font-bold">Registrarse</Dialog.Title>
          <Dialog.Description className="text-black mt-2">
            Este es un modal de ejemplo usando Tailwind y Headless UI.
          </Dialog.Description>

          {/* Botón para cerrar */}
          <button
            className="mt-4 px-4 py-2 w-1/6 bg-[var(--color-primary)] text-white rounded-full hover:bg-[var(--color-secondary)] duration-300 ease-out"
            onClick={() => setIsOpen(false)}
          >
            Cerrar
          </button>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}

export default ModalExample

