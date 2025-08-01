import React from "react";
import apiClient from "../../../lib/axios_client";

export const Remove = ({ cartId,onRemoveCart }) => {

  return (
    <button
      type="button"
      onClick={()=>onRemoveCart(cartId)}
      className="mt-6 font-semibold text-red-500 text-xs flex items-center gap-1 shrink-0"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 fill-current inline"
        viewBox="0 0 24 24"
      >
        <path
          d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
          data-original="#000000"
        ></path>
        <path
          d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
          data-original="#000000"
        ></path>
      </svg>
      REMOVE
    </button>
  );
};
