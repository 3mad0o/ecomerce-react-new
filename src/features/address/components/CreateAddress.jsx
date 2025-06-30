import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { xid } from "zod/v4-mini";
import { CustomInput } from "../../../components/forms/CustomInput";
import { CustomSelect } from "../../../components/forms/CustomSelect";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PhoneNumber } from "../../../components/forms/PhoneNumber";

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "orange", label: "Orange" },
];
export const CreateAddress = ({index,setIndex}) => {
    
  const schema = z.object({
    first_name: z.string().nonempty("First Name is required"),
    last_name: z.string().nonempty("Last Name is required"),
    phone: z.string().nonempty("Phone is required"),
    city: z.string().nonempty("City is required"),
    postal_code: z.string().optional(),
    address: z.string().nonempty("Address is required"),
    apartment: z.string().optional(),
  });
  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      first_name: "",
      last_name: "",

      phone: "",
      city: "",
      postal_code: "",
      address: "",
      apartment: "",
    },
  });
  const { handleSubmit } = methods;
  const onSubmit = (data) => {
    console.log(data);
  };


  useEffect(() => {

    console.log("CheckoutInfo component mounted");

  },[]);

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-5 m-5">
            <CustomInput
              name="first_name"
              label="First Name"
              placeholder="Enter your first name"
              type="text"
            />

            <CustomInput
              name="last_name"
              label="Last Name"
              placeholder="Enter your last name"
              type="text"
            />
            <PhoneNumber
              name="phone"
              label="Phone"
              placeholder="e.g. 0791234567"
              type="tel"
            />

            <CustomSelect
              name="city"
              label="City"
              placeholder="e.g. Amman"
              options={options}
              type="text"
            />

            <CustomInput
              name="postal_code"
              label="Postal Code"
              placeholder="e.g. 11185"
              type="text"
            />

            <CustomInput
              name="address"
              label="Street Address"
              placeholder="e.g. 5th Circle, King Abdullah St."
              type="text"
            />

            <CustomInput
              name="apartment"
              label="Apt / Unit"
              placeholder="e.g. Apartment #12"
              type="text"
            />
          </div>

          <div className="m-5">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Continue to Payment
            </button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};
