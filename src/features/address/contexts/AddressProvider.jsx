import React, { createContext, useContext, useState } from "react";

const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [addresses, setAddresses] = useState([]);
  const [cartAddress, setCartAddress] = useState(null);
  const [address, setAddress] = useState(null);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [isAddressModalLoading, setIsAddressModalLoading] = useState(false);
  const [addressStep, setAddressStep] = useState(0);

  return (
    <AddressContext.Provider
      value={{
        addresses,
        setAddresses,
        cartAddress,
        setCartAddress,
        address,
        setAddress,
        isAddressModalOpen,
        setIsAddressModalOpen,
        isAddressModalLoading,
        setIsAddressModalLoading,
        addressStep,
        setAddressStep,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => useContext(AddressContext);
