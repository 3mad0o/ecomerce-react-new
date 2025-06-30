import React, { useState } from "react";
import { ProductList } from "../features/Products/Components/ProductList";
import { CheckoutAddressesCard } from "../features/address/components/CheckoutAddressesCard";
import { ChangeAddressList } from "../features/address/components/ChangeAddressList";
import { EditAddress } from "../features/address/components/EditAddress";
import { CreateAddress } from "../features/address/components/CreateAddress";
import MultiStepModal from "../components/MultiSTepModal";
import { AnimatePresence, motion } from "framer-motion";

const componentMap = {
  ChangeAddressList,
  EditAddress,
  CreateAddress,
};
export const Checkout = () => {
  const [address, setAddress] = useState(null);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [addressStep, setAddressStep] = useState(0);
  const [isAddressModalLoading, setIsAddressModalLoading] = useState(false);



  return (
    <>
      <div className="grid grid-cols-6 gap-5 m-5 ">
        <div className="  p-6  col-span-4 shadow-md rounded-md border border-gray-100 flex flex-col gap-6">
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
            <CheckoutAddressesCard />
          </div>

          <div>
            <div className="flex items-center gap-4 text-gray-800">
              <h3 className="text-2xl font-bold flex-1">Shopping cart</h3>
            </div>

            <div className="space-y-4 mt-12">
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
                <div key={item.id}>
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

                        <button
                          type="button"
                          className="mt-6 font-semibold text-red-500 text-xs flex items-center gap-1"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" />
                            <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" />
                          </svg>
                          REMOVE
                        </button>
                      </div>
                    </div>

                    <div className="ml-auto">
                      <h4 className="text-lg max-sm:text-base font-bold text-gray-800">
                        {item.price}
                      </h4>

                      <div className="mt-6 flex items-center px-3 py-1.5 border border-gray-300 text-gray-800 text-xs bg-transparent rounded-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-2.5 fill-current"
                          viewBox="0 0 124 124"
                        >
                          <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" />
                        </svg>

                        <span className="mx-3 font-bold">{item.quantity}</span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-2.5 fill-current"
                          viewBox="0 0 42 42"
                        >
                          <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {index < 2 && <hr className="border-gray-300 my-4" />}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-2 ">
          <div class="space-y-6 h-fit p-6 shadow-md rounded-md border border-gray-100 sticky top-[75px]">
            <h2 class="text-xl text-slate-900 font-semibold mb-6">
              Order Summary
            </h2>
            <ul class="text-slate-500 font-medium space-y-4">
              <li class="flex flex-wrap gap-4 text-sm">
                Subtotal{" "}
                <span class="ml-auto font-semibold text-slate-900">$72.00</span>
              </li>
              <li class="flex flex-wrap gap-4 text-sm">
                Discount{" "}
                <span class="ml-auto font-semibold text-slate-900">$0.00</span>
              </li>
              <li class="flex flex-wrap gap-4 text-sm">
                Shipping{" "}
                <span class="ml-auto font-semibold text-slate-900">$6.00</span>
              </li>
              <li class="flex flex-wrap gap-4 text-sm">
                Tax{" "}
                <span class="ml-auto font-semibold text-slate-900">$5.00</span>
              </li>
              <hr class="border-slate-300" />
              <li class="flex flex-wrap gap-4 text-[15px] font-semibold text-slate-900">
                Total <span class="ml-auto">$83.00</span>
              </li>
            </ul>
            <div class="space-y-4 mt-8">
              <button
                type="button"
                class="rounded-md px-4 py-2.5 w-full text-sm font-medium tracking-wide bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
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
            {addressStep === 0 && <ChangeAddressList setAddressStep={setAddressStep}/>}

            {addressStep === 1 && <EditAddress />}
            {addressStep === 2 && <CreateAddress />}
          </motion.div>
        </AnimatePresence>
      </MultiStepModal>
    </>
  );
};
