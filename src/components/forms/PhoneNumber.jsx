import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { parsePhoneNumberFromString } from "libphonenumber-js";

export const PhoneNumber = ({ name, placeholder, label, onChangeNumber }) => {
  const {
    control,
    formState: { errors },
    setValue, // useful for setting other fields like countryCode
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

      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value, ref } }) => (
          <PhoneInput
            className="custom-phone-input flex-1"
            value={typeof value === "string" ? value : ""}
            onChange={(phone) => {
              if (typeof phone === "string") {
                const parsed = parsePhoneNumberFromString(phone);
                if (parsed) {
                  const countryCode = "+" + parsed.countryCallingCode;
                  const nationalNumber = parsed.nationalNumber;

                  // ✅ Optional: store them in separate hidden fields or handle in submit
                  onChangeNumber(countryCode, nationalNumber); // store full phone number
                }

              } else {
                onChange(""); // reset
              }
            }}
            defaultCountry="JO"
            placeholder={placeholder || "Enter phone number"}
            international
            defaultValue={value || ""}
          />
        )}
      />

      {errors[name] && (
        <p className="mt-1 text-xs text-red-500">{errors[name].message}</p>
      )}
    </div>
  );
};
