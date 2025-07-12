import React from "react";
import { CiCircleRemove } from "react-icons/ci";
import { MdOutlineStarRate } from "react-icons/md";
import { Link } from "react-router";

export const WishList = () => {
  return (
    <div className="p-2 mt-4">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="space-y-3   border border-gray-200 rounded-md p-6 shadow-md">

          {[
            {
              id: 1,
              name: "Velvet Sneaker",
              size: "MD",
              price: "$20.00",
              quantity: 2,
              image: "https://readymadeui.com/images/product14.webp",
            },
            {
              id: 2,
              name: "Smart Watch Timex",
              size: "SM",
              price: "$60.00",
              quantity: 1,
              image: "https://readymadeui.com/images/watch5.webp",
            },
            {
              id: 3,
              name: "French Connection",
              size: "LG",
              price: "$40.00",
              quantity: 1,
              image: "https://readymadeui.com/images/watch4.webp",
            },
          ].map((item, index) => (
            <Link key={item.id} to={"/product/1"}>
              <div className="grid grid-cols-3 items-start gap-4">
                <div className="col-span-2 flex items-start gap-4">
                  <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-base max-sm:text-sm font-bold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-xs font-semibold text-gray-500 mt-0.5">
                      Size: {item.size}
                    </p>
                  </div>
                </div>

                <div className="ml-auto">
                  <h4 className="text-lg max-sm:text-base font-bold text-gray-800">
                    {item.price}
                  </h4>

                  <button
                  type="button"
                  className="mt-6 flex items-center px-3 py-1.5 border  gap-2 bg-red-500 text-xs text-white rounded-md">
                    remove <CiCircleRemove />

                  </button>
                </div>
              </div>

              {index < 2 && <hr className="border-gray-300 my-4" />}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
