import React, { useState } from "react";
import ModalList from "../../../components/ModalList";
import { useDispatch, useSelector } from "react-redux";
import { changeAddressModalIndex, closeAddressModal } from "../../../redux/Address/AddressModalSlice";
import { ChangeAddressList } from "./ChangeAddressList";
import { EditAddress } from "./EditAddress";
import { CreateAddress } from "./CreateAddress";

const componentMap = [
  ChangeAddressList,
  EditAddress,
  CreateAddress,
];
export const AddressModal = ({  size }) => {
const dispatch = useDispatch();
  const index = useSelector((state) => state.address.index);
  const components = useSelector((state) => state.address.addressModalLists);
    const isAddressModalOpen = useSelector((state) => state.address.isAddressModalOpen);


 
  const Component = componentMap[index];
  
  

  return (
    <ModalList
      isOpen={isAddressModalOpen}
      onClose={() => dispatch(closeAddressModal())}
        size={size}
    >
          {index > 0 && (
          <button
            onClick={() => dispatch(changeAddressModalIndex(index - 1))}
            className="text-sm text-blue-500"
          >
            ← Back
          </button>
        )}
                <Component />

        </ModalList>
  );
};
