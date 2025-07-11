import React, { useEffect } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

const MultiStepModal = ({
  isOpen,
  onClose,
  title,
  size,
  children,
  index,
  goBack,
  isLoading,
}) => {
  const handleClickOutside = (event) => {
    if (event.target.closest(".modal-content") === null) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleClickOutside}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25 }}
        className={`bg-white rounded-lg shadow-lg w-11/12 ${
          size === "sm" ? "md:w-3/6" : "md:w-9/12"
        } h-auto max-h-[100vh] modal-content relative`}
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b">
          {index > 0 ? (
            <button
              onClick={goBack}
              className="text-blue-600 hover:text-blue-800"
            >
              <IoIosArrowRoundBack size={24} />
            </button>
          ) : (
            <div />
          )}
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
            ✖
          </button>
        </div>

        {/* Body */}
        <div className="relative p-4 overflow-y-auto max-h-[80vh]">
          {/* Animated loading overlay */}
          <AnimatePresence>
            {isLoading && (
              <motion.div
                className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="loader h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: "linear",
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Content */}
          <div className={`${isLoading ? "opacity-50 pointer-events-none" : ""}`}>
            {children}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MultiStepModal;
