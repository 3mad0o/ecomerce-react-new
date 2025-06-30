// CustomInput.jsx
import React from "react";
import { useFormContext } from "react-hook-form";

export const CustomInput = ({ name, placeholder, type = "text", label }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="mb-4">
      {label && (
        <label
          className="block text-gray-700 dark:text-gray-100 text-sm mb-1"
          htmlFor={name}
        >
          {label}
        </label>
      )}

      <input
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-100
            leading-tight focus:outline-none dark:bg-gray-700 dark:border-black focus:shadow-outline`}
        type={type}
        id={name}
        placeholder={placeholder}
        {...register(name)}
      />

      {errors?.[name] && (
        <p className="mt-1 text-xs text-red-500">{errors[name].message}</p>
      )}
    </div>
  );
};
