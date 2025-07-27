import React, { useEffect, useState } from "react";
import { FaCheck, FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useAddress } from "../hooks/useAddress";
import { set } from "zod/v4-mini";

export const ChangeAddressList = ({ setAddressStep,setAddress }) => {
  const [selected, setSelected] = useState(null);
  const { addresses } = useAddress();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selected) {
      console.log("Selected address:", selected);
      // You can dispatch it to Redux or move to next step with selected address
      // dispatch(setSelectedAddress(selected))
    } else {
      console.log("No address selected");
    }
  };

  useEffect(() => {
    console.log("ChangeAddressList component mounted");
  }, []);

  return (
    <>
      <button
        type="button"
        className="mt-2 w-full mb-4 px-4 py-2 bg-black text-white rounded-md hover:bg-blue-700"
        onClick={() => setAddressStep(2)}
      >
        Create Address
      </button>

      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col justify-end gap-4 p-4 relative border border-gray-200 rounded-md shadow-sm">
          {addresses && addresses.length > 0 ? (
            addresses.map((address, index) => (
              <div key={address.id || index} className="mb-4">
                <label className="relative block cursor-pointer">
                  {/* Radio input */}
                  <input
                    type="radio"
                    name="address"
                    className="absolute top-0 left-0 bottom-0 right-0 opacity-0 peer z-10"
                    checked={selected?.id === address.id}
                    onChange={() => setSelected(address.id)}
                  />

                  {/* Check icon */}
                  <div className="absolute top-2 right-2 text-blue-600 hidden peer-checked:block z-20">
                    <FaCheck size={20} className="text-blue-600" />
                  </div>

                  {/* Card UI */}
                  <div className="w-full flex flex-col relative bg-white p-4 rounded-md shadow-sm peer-checked:ring-2 peer-checked:ring-blue-500">
                    <div className="flex flex-col space-y-1">
                      <span className="font-medium">
                        {address.first_name} {address.last_name}
                      </span>
                      <span>{address.street || "No Street"}</span>
                      <span>
                        {address.city || "No City"},{" "}
                        {address.postal_code || ""}
                      </span>
                      <span>
                        {address.country_code + " " + address.mobile ||
                          "No Phone"}
                      </span>
                    </div>
                  </div>
                </label>

                {/* Edit / Delete buttons */}
                <div className="flex flex-row justify-end gap-3 mt-2">
                  <button
                    type="button"
                    className="flex flex-row items-center gap-1 text-blue-600 hover:underline"
                    onClick={() => {
                      setAddressStep(1)
                      setAddress(address);
                    }}
                  >
                    <FaRegEdit />
                    Edit
                  </button>

                  <div className="border-l border-gray-300 h-6"></div>

                  <button
                    type="button"
                    className="flex flex-row items-center gap-1 text-red-600 hover:underline"
                    onClick={() => {
                      // Add delete logic here
                      console.log("Delete address id:", address.id);
                    }}
                  >
                    <MdOutlineDelete />
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No addresses found.</p>
          )}
        </div>

        <button
          type="submit"
          className="ml-4 mt-2 px-4 py-2 bg-black text-white rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </>
  );
};
