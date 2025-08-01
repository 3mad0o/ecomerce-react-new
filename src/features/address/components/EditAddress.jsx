import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { xid } from "zod/v4-mini";
import { CustomInput } from "../../../components/forms/CustomInput";
import { CustomSelect } from "../../../components/forms/CustomSelect";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PhoneNumber } from "../../../components/forms/PhoneNumber";
import Modal from "../../../components/Modal";
import { useLoading } from "../../../contexts/LoadingProvider";
import apiClient from "../../../lib/axios_client";
import { useCities } from "../../../hooks/useCities";

const options = [
  { value: "1", label: "Apple" },
  { value: "2", label: "Banana" },
  { value: "3", label: "Orange" },
];
export const EditAddress = ({ address, setAddressStep }) => {
    const {cities} =useCities()
  
  const getFullPhone = (countryCode, mobile) => {
    if (countryCode && mobile) {
      return `${countryCode}${mobile}`;
    }
    return "";
  };
  const schema = z.object({
    first_name: z.string().nonempty("First Name is required"),
    last_name: z.string().nonempty("Last Name is required"),
    mobile: z.string().nonempty("Phone is required"),
    country_code: z.string().nonempty("Country code is required"),
    city_id: z.string().nonempty("City is required"),
    postal_code: z.string().optional(),
    street: z.string().nonempty("Address is required"),
    apartment: z.string().optional(),
  });
  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      first_name: address.first_name || "",
      last_name: address.last_name || "",
      phone: getFullPhone(address.country_code, address.mobile), // ✅
      mobile: address.mobile || "",
      country_code: address.country_code || "",
      city_id: address.city_id?.toString() || "",
      postal_code: address.postal_code || "",
      street: address.street || "",
      apartment: address.apartment || "",
    },
  });
  const { handleSubmit, setValue } = methods;
  const { setLoading } = useLoading();
  const onSubmit = (data) => {
    setLoading(true);

    apiClient
      .put(`/address/${address.id}`, {
        ...data,
      })
      .then((res) => {
        
        setAddressStep(0); // Go back to the address list
      })
      .catch((err) => {
        console.error("Error creating address:", err);
        // Handle error, e.g., show an error message
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    console.log("CheckoutInfo component mounted");
  }, []);

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
              name="phone" // ✅ must match the field in defaultValues
              label="Phone"
              placeholder="e.g. 0791234567"
              type="tel"
              countryCodeName="country_code"
              mobileName="mobile"
            />

            <CustomSelect
              name="city_id"
              label="City"
              placeholder="e.g. Amman"
              options={cities}
              type="text"
            />

            <CustomInput
              name="postal_code"
              label="Postal Code"
              placeholder="e.g. 11185"
              type="text"
            />

            <CustomInput
              name="street"
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
              className="bg-black text-white px-4 py-2 rounded"
            >
              Continue to Payment
            </button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};
