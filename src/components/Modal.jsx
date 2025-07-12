import React, { useEffect, useState } from "react";

const Modal = ({ isOpen, onClose, title, size, children }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      setShow(false);
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleClickOutside = (event) => {
    if (event.target.closest(".modal-content") === null) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-white rounded-lg shadow-lg transform transition-all duration-300 ${
          show ? "opacity-100 scale-100" : "opacity-0 scale-95"
        } ${size === "sm" ? "md:w-3/6" : "md:w-9/12"} w-11/12 h-auto max-h-[100vh] modal-content`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between p-5">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            ✖
          </button>
        </div>
        <div className="p-4 overflow-y-auto max-h-[80vh]">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
