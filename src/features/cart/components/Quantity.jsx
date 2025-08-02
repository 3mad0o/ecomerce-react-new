import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export const Quantity = ({
  cartId,
  quantity,
  changeQuantity,
  maxQuantity = null,
}) => {
  const addQuantity = () => {
    if (maxQuantity && quantity + 1 >= maxQuantity) {
      return false;
    }

    changeQuantity(cartId, quantity + 1);
  };
  const subQuantity = () => {
    if (quantity - 1 <= 0) {
      return false;
    }
    changeQuantity(cartId, quantity - 1);
  };
  return (
    <div className="w-fit">
      <div class="flex items-center rounded-sm border border-gray-200 justify-between">
        <button
          type="button"
          onClick={() => subQuantity()}
          class="size-10 leading-10 text-gray-600 transition hover:opacity-75 flex justify-center items-center"
        >
          <FaMinus />
        </button>

        <input
          type="number"
          id="Quantity"
          value={quantity}
          class="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
        />

        <button
          type="button"
          onClick={() => addQuantity((old) => old - 1)}
          class="size-10 leading-10 text-gray-600 transition hover:opacity-75 flex justify-center items-center"
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};
