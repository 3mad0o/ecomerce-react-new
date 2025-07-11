import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { IoIosClose } from "react-icons/io";
import { useParams, useSearchParams } from "react-router";

export const ProductFilter = ({ show, setShow }) => {
  const [currentQueryParameters, setSearchParams] = useSearchParams();
  const newQueryParameters = new URLSearchParams();
  const [colors, setColors] = React.useState([
    {
      color: "red",
      code: "#FF0000",
    },
    {
      color: "blue",
      code: "#0000FF",
    },
    {
      color: "green",
      code: "#008000",
    },
    {
      color: "black",
      code: "#000000",
    },
    {
      color: "white",
      code: "#FFFFFF",
    },
    { color: "yellow", code: "#FFFF00" },
    {
      color: "purple",
      code: "#800080",
    },
  ]);
  const [sizesm, setSizes] = React.useState([
    {
      size: "S",
      code: "small",
    },
    {
      size: "M",
      code: "medium",
    },
    {
      size: "L",
      code: "large",
    },
    {
      size: "XL",
      code: "extra-large",
    },
    {
      size: "XXL",
      code: "extra-extra-large",
    },
  ]);
  return (
    <AnimatePresence>
      {show && (
        <div
          className="absolute top-0 left-0 bottom-0 right-0 z-50 bg-black bg-opacity-25"
          onClick={() => setShow(false)}
        >
          <motion.div
            key="filter"
            initial={{ x: "-100%", opacity: 0 }} // Slide in from left
            animate={{ x: 0, opacity: 1 }} // Centered
            exit={{ x: "100%", opacity: 0 }} // Slide out to right
            transition={{ duration: 0.1 }}
            className="fixed top-0 left-0 bottom-0 z-50 w-full md:w-1/5"
          >
            <div className="bg-white h-full w-full">
              <div className="flex justify-end">
                <button
                  className="text-2xl text-white p-2"
                  onClick={() => setShow(false)}
                >
                  <IoIosClose className="text-3xl text-black" />
                </button>
              </div>

              {/* color filters */}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-4">Filters</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold mb-2 border-b-[1px] border-gray-400 py-2">
                      Color
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {colors.map((color) => (
                        <button
                          key={color.code}
                          type="button"
                          onClick={() => {
                            newQueryParameters.set("color", color.code);
                          }}
                          className="w-10 h-10 rounded-full border-2 border-gray-300"
                          style={{ backgroundColor: color.code }}
                        ></button>
                      ))}
                    </div>

                    {/* sizes */}
                      <p className="text-sm font-semibold mb-2 border-b-[1px] border-gray-400 py-2">
                        Size
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {sizesm.map((size) => (
                          <button
                            key={size.code}
                            type="button"
                            onClick={() => {
                              newQueryParameters.set("size", size.code);
                            }}
                            className="px-3 py-1 border rounded-md text-sm"
                          >
                            {size.size}
                          </button>
                        ))}
                      </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h3 className="text-lg font-medium mb-2">Price Range</h3>
                    <input type="range" min="0" max="1000" className="w-full" />
                  </div>

                  {/* Other filters can be added here */}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
