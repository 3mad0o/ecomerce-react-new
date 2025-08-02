import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { toggleCartSide } from "../../../redux/Cart/CartSlice";
import { Link, useNavigate } from "react-router";
import { useCart } from "../hooks/useCart";
import { formatCurrency } from "../../../utils/formatCurrency";
import { Remove } from "./Remove";
import { Toaster } from "react-hot-toast";
import { Quantity } from "./Quantity";

export const CartSlide = () => {
  const { carts, setCarts, subtotal, grandTotal, removeCart, changeQuantity } =
    useCart();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    dispatch(toggleCartSide());
    window.scrollTo({ top: 0, behavior: "smooth" });

    navigate("/checkout");
  };
  return (
    <>
      <div className="fixed inset-0 w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] font-sans">
        <div className="w-full max-w-xl bg-white shadow-lg relative ml-auto h-screen">
          <div className="overflow-auto p-6 h-[calc(100vh-135px)]">
            <div className="flex items-center gap-4 text-gray-800">
              <h3 className="text-2xl font-bold flex-1">Shopping cart</h3>
              <button type="button" onClick={() => dispatch(toggleCartSide())}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 ml-2 cursor-pointer shrink-0 fill-black hover:fill-red-500"
                  viewBox="0 0 320.591 320.591"
                >
                  <path
                    d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                    data-original="#000000"
                  ></path>
                  <path
                    d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="space-y-4 mt-12">
              {carts.map((cart, index) => {
                return (
                  <>
                    <div className="grid grid-cols-3 items-start gap-4">
                      <div className="col-span-2 flex items-start gap-4">
                        <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
                          <img
                            src={cart.product.main_image}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        <div className="flex flex-col">
                          <h3 className="text-base max-sm:text-sm font-bold text-gray-800">
                            {cart.product.name}
                          </h3>
                          <p className="text-xs font-semibold text-gray-500 mt-0.5">
                            {cart.variants_string}
                          </p>

                          <Remove onRemoveCart={removeCart} cartId={cart.id} />
                        </div>
                      </div>

                      <div className="ml-auto">
                        <h4 className="text-lg max-sm:text-base font-bold text-gray-800">
                          {formatCurrency(cart.subtotal, "USD", "en-US")}
                        </h4>
                        <div className="mt-6 ">
                          <Quantity
                            changeQuantity={changeQuantity}
                            quantity={cart.quantity}
                            cartId={cart.id}
                          />
                        </div>{" "}
                      </div>
                    </div>

                    <hr className="border-gray-300" />
                  </>
                );
              })}
            </div>
          </div>

          <div className="p-6 absolute bottom-0 w-full border-t bg-white">
            <div className="flex flex-col space-y-4">
              <ul className="text-gray-800 divide-y">
                <li className="flex justify-between text-lg font-bold">
                  <span>Subtotal</span>
                  <span>{formatCurrency(subtotal)}</span>
                </li>
              </ul>
              <button
                type="button"
                onClick={handleCheckoutClick}
                to="/checkout"
                className="text-sm font-semibold px-6 py-3 w-full bg-black hover:bg-blue-700 text-white rounded-md tracking-wide text-center"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      <Toaster />
    </>
  );
};
