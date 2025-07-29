import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { parsePhoneNumberFromString } from "libphonenumber-js";

export const PhoneNumber = ({
  name = "phone",
  placeholder,
  label,
  onChangeNumber, // optional callback for parent
  countryCodeName = "country_code",
  mobileName = "mobile",
}) => {
  const {
    control,
    setValue,
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

      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <PhoneInput
            className="custom-phone-input flex-1"
            value={
              typeof value === "string" && value.startsWith("+") ? value : ""
            }
            onChange={(phone) => {
              onChange(phone);

              const parsed = parsePhoneNumberFromString(phone || "");

              if (parsed) {
                const countryCode = "+" + parsed.countryCallingCode;
                const nationalNumber = parsed.nationalNumber;

                setValue(countryCodeName, countryCode);
                setValue(mobileName, nationalNumber);

                if (onChangeNumber) {
                  onChangeNumber(countryCode, nationalNumber);
                }
              } else {
                setValue(countryCodeName, "");
                setValue(mobileName, "");
                if (onChangeNumber) onChangeNumber("", "");
              }
            }}
            defaultCountry="JO"
            placeholder={placeholder || "Enter phone number"}
            international
          />
        )}
      />

      {errors[name] && (
        <p className="mt-1 text-xs text-red-500">{errors[name].message}</p>
      )}
    </div>
  );
};
