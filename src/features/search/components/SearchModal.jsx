import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  search,
  getProducts,
  resetProducts,
  openSearchModal,
} from "../../../redux/Search/searchSlice";
import { useNavigate } from "react-router";

export const SearchModal = () => {
  const dispatch = useDispatch();
  const { products, isSearchLoading,searchKey } = useSelector((state) => state.search);

  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    dispatch(resetProducts()); // clear old products first
    dispatch(search({ searchKey: value }));
    dispatch(getProducts({ page: 1 }));

    
  };

  const navigate = useNavigate()

  const handleProductCLick = (productId)=>{
    dispatch(openSearchModal())
        setInputValue('');

    dispatch(resetProducts()); // clear old products first
    navigate(`product/${productId}`)

  }

  return (
    <div className="p-4">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="border border-gray-200 w-full p-2 rounded-md focus:border-gray-500 focus:outline-none"
        placeholder="Search something..."
      />

      <div className="mt-4">
        {isSearchLoading ? (
          <p className="text-gray-500">Searching...</p>
        ) : products.length === 0 ? (
          <p className="text-gray-500">No results found.</p>
        ) : (
          <ul className="space-y-2">
            {products.map((product) => (
              <li
                key={Math.random(1,9999)}
                onClick={()=>handleProductCLick(product.id)}
                className="flex items-center gap-4 border-b py-2 cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 object-cover rounded"
                />
                <div>
                  <p className="font-semibold">{product.name}</p>
                  <p className="text-sm text-gray-600">{product.price}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
