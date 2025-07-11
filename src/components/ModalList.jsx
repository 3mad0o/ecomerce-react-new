import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowRoundBack } from "react-icons/io";
import { closeModal, prevModalScreen } from "../redux/ModalList/ModalListSlice";
import { AnimatePresence, motion } from "framer-motion";

const ModalList = ({ componentMap, size = "md" }) => {
  const dispatch = useDispatch();
  const { isOpen, title, stack, currentIndex, props } = useSelector(
    (state) => state.modalList
  );

  const onClose = () => dispatch(closeModal());

  // Close modal when clicking outside the modal content
  const handleClickOutside = (event) => {
    if (event.target.closest(".modal-content") === null) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  if (!isOpen || stack.length === 0) return null;

  const CurrentComponent = componentMap[stack[currentIndex].component];
  console.log("Current Component:", CurrentComponent);
  console.log("Current Stack:", stack);
  console.log("Current Index:", currentIndex);
  console.log("Component Map:", componentMap);

  const currentTitle = stack[currentIndex].title || title;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleClickOutside}
    >
      <div
        className={`bg-white rounded-lg shadow-lgz ${
          size === "sm" ? "w-3/6" : "w-9/12"
        } max-h-[100vh] modal-content`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-5 border-b">
          {currentIndex > 0 ? (
            <button
              onClick={() => dispatch(prevModalScreen())}
              className="text-blue-600 hover:text-blue-800"
            >
              <IoIosArrowRoundBack size={24} />
            </button>
          ) : (
            <h2 className="text-lg font-semibold text-gray-800">
              {currentTitle}
            </h2>
          )}

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-xl"
          >
            ✖
          </button>
        </div>

        <div className="p-4 overflow-y-auto max-h-[80vh]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex} // Ensures animation on index change
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.1 }}
              
            >
              {CurrentComponent ? <CurrentComponent {...props} /> : null}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ModalList;
