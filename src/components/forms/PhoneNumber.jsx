import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

export const PhoneNumber = ({ name, placeholder, label }) => {

    const {
      control,
      formState: { errors },
    } = useFormContext();
  
  return (
    <div className="mb-4">
      {label && (
        <label
          className="block  text-gray-700 dark:text-gray-100 text-sm w-[40px]"
          htmlFor={name}
        >
          {label}
        </label>
      )}

      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <PhoneInput
            className="custom-phone-input flex-1"
            value={value}
            onChange={onChange}
            defaultCountry="JO"
            placeholder={placeholder || "Enter phone number"}
          />
        )}
      />

      {errors[name] && (
        <p className="mt-1 text-xs text-red-500">{errors[name].message}</p>
      )}
    </div>
  );
};
