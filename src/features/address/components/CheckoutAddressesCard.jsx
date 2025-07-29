import React from "react";
import { FaRegEdit } from "react-icons/fa";

export const CheckoutAddressesCard = ({ address }) => {
  return (
    <div className="border border-gray-200 w-full relative flex flex-col">
      <div className="p-4 space-y-4">
        <div className="flex flex-col">
          <span className="font-medium">
            {address.first_name} {address.last_name}
          </span>
          <span>{address.street || "No Street"}</span>
          <span>
            {" "}
            {address.city || "No City"}, {address.postal_code || ""}
          </span>
          <span>
            {" "}
            {address.country_code + " " + address.mobile || "No Phone"}
          </span>
        </div>
      </div>

      <button className="absolute top-4  right-4 ">
        <FaRegEdit />
      </button>
    </div>
  );
};
