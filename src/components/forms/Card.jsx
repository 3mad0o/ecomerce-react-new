import React from "react";

export const Card = ({children,classes,header}) => {
  return (
    <div
      className={`bg-white dark:bg-black dark:text-white  rounded-md  shadow ${classes}`}
    >
      {header && (
        <div className="p-4  mb-3 border-b border-gray-100">{header}</div>
      )}
      <div className="p-4 px-10">{children}</div>
    </div>
  );
};
