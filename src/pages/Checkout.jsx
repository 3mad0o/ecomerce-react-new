import React, { useEffect, useState } from "react";
import { ProductList } from "../features/Products/Components/ProductList";
import { CheckoutAddressesCard } from "../features/address/components/CheckoutAddressesCard";
import { ChangeAddressList } from "../features/address/components/ChangeAddressList";
import { EditAddress } from "../features/address/components/EditAddress";
import { CreateAddress } from "../features/address/components/CreateAddress";
import MultiStepModal from "../components/MultiSTepModal";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "../features/cart/hooks/useCart";
import { formatCurrency } from "../utils/formatCurrency";
import apiClient from "../lib/axios_client";
import { useLoading } from "../contexts/LoadingProvider";
import { set } from "zod/v4-mini";
import { getOrCreateGuestId } from "../utils/guestCartService";
import { Remove } from "../features/cart/components/Remove";
import { Quantity } from "../features/cart/components/Quantity";
import { AddressProvider, useAddress } from "../features/address/contexts/AddressProvider";


export const Checkout = () => {
  return (
    <AddressProvider>
      <CheckoutPageContent />
    </AddressProvider>
  );
};

export const CheckoutPageContent = () => {
  const { setLoading } = useLoading();

  const {
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
  }=useAddress();

  const {
    carts,
    setCarts,
    subtotal,
    grandTotal,
    tax,
    address: addressApi,
    changeQuantity,
    removeCart
  } = useCart();

  const Checkout = () => {
    setLoading(true);
    apiClient
      .post("/checkout", {
        guest_id: getOrCreateGuestId(),
      })
      .then((res) => {
        console.log("Checkout successful:", res.data);
        location.href = res.data.data.url;
      })
      .catch((err) => {
        console.error("Error during checkout:", err);
        // Handle error, e.g., show an error message
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    setIsAddressModalOpen(false);
    if (!cartAddress) return;
    setLoading(false);

    apiClient
      .post("carts/change-address", {
        address_id: cartAddress?.id,
      })
      .then((res) => {

        setAddress(cartAddress)
      })
      .catch((err) => {})
      .finally(() => {
        setLoading(false);

      });
  }, [cartAddress]);

  useEffect(() => {
    setAddress(addressApi);
  }, [addressApi]);

  return (
    <>
      <div className="grid grid-cols-6 gap-5 m-5 ">
        <div className="  p-6  md:col-span-4 col-span-6 shadow-md rounded-md border border-gray-100 flex flex-col gap-6">
          <div>
            <div className="flex items-center gap-4 text-gray-800">
              <h3 className="text-2xl font-bold flex-1">Shipping Info</h3>
              <button
                type="button"
                className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                onClick={() => setIsAddressModalOpen(true)}
              >
                Change Address
              </button>
            </div>
            {address && <CheckoutAddressesCard address={address} />}
          </div>

          <div>
            <div className="flex items-center gap-4 text-gray-800">
              <h3 className="text-2xl font-bold flex-1">Shopping cart</h3>
            </div>

            <div className="space-y-4 mt-12">
              {carts.map((item, index) => (
                <div key={item.id}>
                  <div className="grid grid-cols-3 items-start gap-4">
                    <div className="col-span-2 flex items-start gap-4">
                      <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
                        <img
                          src={item.product.main_image}
                          alt={item.product.name}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div className="flex flex-col">
                        <h3 className="text-base max-sm:text-sm font-bold text-gray-800">
                          {item.product.name}
                        </h3>
                        <p className="text-xs font-semibold text-gray-500 mt-0.5">
                          {item.variants_string}
                        </p>

                     <Remove  onRemoveCart={removeCart} cartId={item.id}/>
                      </div>
                    </div>

                    <div className="ml-auto">
                      <h4 className="text-lg max-sm:text-base font-bold text-gray-800">
                        {formatCurrency(item.subtotal, "USD", "en-US")}
                      </h4>

                      <div className="mt-6 ">
                        
                            <Quantity changeQuantity={changeQuantity} quantity={item.quantity} cartId={item.id}/>
                        
                        </div>
                    </div>
                  </div>

                  {index < 2 && <hr className="border-gray-300 my-4" />}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 md:cols-apn-4 col-span-6">
          <div class="space-y-6 h-fit p-6 shadow-md rounded-md border border-gray-100 sticky top-[75px]">
            <h2 class="text-xl text-slate-900 font-semibold mb-6">
              Order Summary
            </h2>
            <ul class="text-slate-500 font-medium space-y-4">
              <li class="flex flex-wrap gap-4 text-sm">
                Subtotal{" "}
                <span class="ml-auto font-semibold text-slate-900">
                  {formatCurrency(subtotal)}
                </span>
              </li>
              <li class="flex flex-wrap gap-4 text-sm">
                Discount{" "}
                <span class="ml-auto font-semibold text-slate-900">$0.00</span>
              </li>
              <li class="flex flex-wrap gap-4 text-sm">
                Shipping{" "}
                <span class="ml-auto font-semibold text-slate-900">$0.00</span>
              </li>
              <li class="flex flex-wrap gap-4 text-sm">
                Tax{" "}
                <span class="ml-auto font-semibold text-slate-900">
                  {formatCurrency(tax)}
                </span>
              </li>
              <hr class="border-slate-300" />
              <li class="flex flex-wrap gap-4 text-[15px] font-semibold text-slate-900">
                Total <span class="ml-auto">{formatCurrency(grandTotal)}</span>
              </li>
            </ul>
            <div class="space-y-4 mt-8">
              <button
                type="button"
                onClick={() => Checkout()}
                class="rounded-md px-4 py-2.5 w-full text-sm font-medium tracking-wide bg-black hover:bg-blue-700 text-white cursor-pointer"
              >
                Complete Purchase
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-10">
        <ProductList title={"You May Need"} isLargeGrid={false} />
      </div>

      <MultiStepModal
        size="sm"
        index={addressStep}
        goBack={() => setAddressStep(0)}
        isOpen={isAddressModalOpen}
        onClose={() => {
          setIsAddressModalOpen(false);
          setAddressStep(0);
        }}
        title={
          addressStep === 0
            ? "Change Address"
            : addressStep === 1
            ? "Edit Address"
            : "Create Address"
        }
        isLoading={isAddressModalLoading}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={addressStep} // Ensures animation on index change
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            {addressStep === 0 && (
              <ChangeAddressList
                setAddressStep={setAddressStep}
                setAddress={setAddress}
              />
            )}

            {addressStep === 1 && (
              <EditAddress address={address} setAddressStep={setAddressStep} />
            )}
            {addressStep === 2 && (
              <CreateAddress setAddressStep={setAddressStep} />
            )}
          </motion.div>
        </AnimatePresence>
      </MultiStepModal>
    </>
  );
};
