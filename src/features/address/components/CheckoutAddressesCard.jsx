import React from "react";
import { FaRegEdit } from "react-icons/fa";

export const CheckoutAddressesCard = () => {
  return (
    <div className="border border-gray-200 w-full relative flex flex-col">
      <div className="p-4 space-y-4">
        <div className="flex flex-col">
          <span className="font-medium">John Doe</span>
          <span>123 Main St, Apt 4B</span>
          <span>New York, NY 10001</span>
          <span>(123) 456-7890</span>
        </div>
      </div>

      <button className="absolute top-4  right-4 ">
        <FaRegEdit />
      </button>
    </div>
  );
};
