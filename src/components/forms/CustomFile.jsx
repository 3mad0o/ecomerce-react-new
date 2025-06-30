import React, { useRef, useState } from "react";
import { FaUpload } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

export const CustomFile = ({ name, placeholder, register, errors, label,setValue }) => {
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null); // 👈 create a ref

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPreview(URL.createObjectURL(file));
  };

  const removePreview =() =>{
    setPreview(null)

    setValue(name, null); // 👈 clear the value from React Hook Form state too


  }
  return (
    <div className="mb-4 flex justify-center flex-col items-end">
      <div className="relative  h-[150px] w-[200px]   p-3">
        {preview && <button 
        onClick={removePreview}
          type="button"
        className="absolute top-[-20px] right-[-20px] z-20 ">
          <TiDelete className="text-5xl text-red-500"/>

          
          </button>}

        {!preview && (
          <div className=" absolute h-full w-full">
            <div className="flex flex-col gap-2 justify-center items-center h-full bg-gray-100 dark:bg-gray-700 cursor-pointer z-0">
              <FaUpload className="text-2xl dark:text-gray-100" />
              <h3>{placeholder}</h3>
              {errors[name] && (
        <p className="mt-1 text-xs text-red-500">{errors[name].message}</p>
      )}
            </div>
          </div>
        )}

        {preview && (
          <div className="absolute h-full w-full flex justify-center">
            <img
              src={preview}
              className="h-full  object-contain"
              alt="Image"
              srcset=""
            />
          </div>
        )}

        {!preview && (
          <input
           ref={fileInputRef}
            className={`
            opacity-0  cursor-pointer
             absolute top-0 left-0 bottom-0 right-0
            z-10
          `}
            type="file"
            id={name}
            accept="images/*"
            placeholder={placeholder}
            {...register(name, {
              onChange: handleFileChange,
            })}
          />
        )}
      </div>

    
    </div>
  );
};
