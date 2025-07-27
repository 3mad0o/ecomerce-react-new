// CustomSelect.jsx
import React from "react";
import Select from "react-select";
import { useFormContext, Controller } from "react-hook-form";

export const CustomSelect = ({
  name,
  label,
  options,
  placeholder,
  isMulti = false,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={name}
          className="block text-gray-700 dark:text-gray-100 text-sm mb-1"
        >
          {label}
        </label>
      )}

      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          
          // react-select expects the entire option object as value, so find it from options
          const selectedOption = options.find((opt) =>
           {

             return isMulti
              ? field.value?.includes(opt.value)
              : opt.value == field.value
           }
          );

          return (
            <Select
              {...field}
              options={options}
              isMulti={isMulti}
              placeholder={placeholder}
              value={selectedOption || (isMulti ? [] : null)}
              onChange={(val) => {
                if (isMulti) {
                  field.onChange(val ? val.map((v) => v.value) : []);
                } else {
                  field.onChange(val ? val.value.toString() : null);
                }
              }}
              className="react-select-container"
              classNamePrefix="react-select"
            />
          );
        }}
      />

      {errors?.[name] && (
        <p className="mt-1 text-xs text-red-500">{errors[name]?.message}</p>
      )}
    </div>
  );
};
