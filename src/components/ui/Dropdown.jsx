import React, { useState } from "react";

export const Dropdown = ({ items ,title}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="relative inline-block text-left">
        <div>
          <button
            onClick={toggleDropdown}
            className=""
          >
          {title ? 
            title: <span className="text-lg font-semibold">Menu</span>}
          </button>
        </div>

        {isOpen && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-56 
                    rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-40
                    focus:outline-none"
            role="menu"
          >
            <div className="py-1" role="none">
              {items.map((item, index) =>
                item.link ? (
                  <a
                    key={index}
                    href={item.link}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    key={index}
                    onClick={item.event}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    {item.label}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
