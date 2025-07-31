import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

export const CategorySlider = ({ categories }) => {
  return (
    <>
      {categories && categories.length > 0 && (
        <div className="py-6">
          <div className="flex overflow-auto w-full  md:grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {categories.slice(0, 15).map((category, index) => {
              return (
                <Link
                key={category.id+'-'+index}
                  to={"/category/" + category.slug}
                  className="flex flex-col items-center p-4 "
                  title="Category Name"
                >
                  <div className="w-24 h-24 overflow-hidden rounded-full border-4 border-gray-200 shadow-md">
                    <img
                      src={category.image}
                      alt="Category Name"
                      className="w-full h-full object-cover transform transition hover:scale-105 hover:shadow-lg"
                    />
                  </div>
                  <span className="text-center text-sm font-medium mt-2">
                    {category.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
