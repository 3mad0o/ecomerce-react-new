import React, { useEffect, useState } from "react";
import { FaCheck, FaCheckCircle, FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import Modal from "../../../components/Modal";
import { EditAddress } from "./EditAddress";
import { useDispatch } from "react-redux";
import { goToModalScreen } from "../../../redux/ModalList/ModalListSlice";

export const ChangeAddressList = ({setAddressStep}) => {

      const [selected, setSelected] = useState(null);

      const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected address:", selected);
  };

  useEffect(() => {
    console.log("ChangeAddressList component mounted");
  }, []);
  return (
    <>

    <button
      type="button" className="mt-2 w-full mb-4 px-4 py-2 bg-black text-white rounded-md hover:bg-blue-700"
      onClick={() => setAddressStep(2)}>Create Address</button>


     

           <form className="w-full" onSubmit={handleSubmit}>
      <div className="flex flex-col justify-end gap-0 p-4 relative border border-gray-200
rounded-md shadow-sm">
        <label className="relative block cursor-pointer">
          {/* 🟢 Radio input with peer */}
          <input
            type="radio"
            name="address"
            value="john_doe_address"
            className="absolute top-0 left-0 bottom-0 right-0 opacity-0 peer z-10"
            checked={selected === "john_doe_address"}
            onChange={(e) => setSelected(e.target.value)}
          />

          {/* 🟢 Check icon as sibling */}
          <div className="absolute top-2 right-2 text-blue-600 hidden peer-checked:block z-20">
            <FaCheck size={20} className="text-blue-600" />
          </div>

          {/* 🟢 Card UI */}
          <div className=" w-full flex flex-col relative ">
            <div className="p-4 space-y-4">
              <div className="flex flex-col">
                <span className="font-medium">John Doe</span>
                <span>123 Main St, Apt 4B</span>
                <span>New York, NY 10001</span>
                <span>(123) 456-7890</span>
              </div>
            </div>
          </div>
        </label>

        <div className="flex flex-row justify-end gap-3">
            <button
              type="button" className="flex flex-row items-center gap-1" 
                onClick={() => setAddressStep(1)}
              >
                <FaRegEdit />
                edit</button>

              <div className="border-l border-gray-300 h-6"></div>

                <button
              type="button"  className="flex flex-row items-center gap-1">
                <MdOutlineDelete />

                delete</button>
            
        </div>
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
