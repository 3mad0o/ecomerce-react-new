import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import apiClient from "../lib/axios_client";
import { useLoading } from "../contexts/LoadingProvider";

export const SuccessPayment = () => {
    const [transactionDetails, setTransactionDetails] = useState(null);
    const {track_id} = useParams();
    const { setLoading } = useLoading();

    useEffect(() => {
        setLoading(true);
        apiClient.get('transaction/' + track_id, {

        })
        .then((res) => {
            let transaction = res.data.data;
            setTransactionDetails(transaction);
            // Handle the transaction details as needed
        })
        .catch((err) => {
            console.error("Error fetching transaction details:", err);
            // Handle error, e.g., show an error message
        })
        .finally(() => {
            setLoading(false);

        })
        ;


    },[track_id]);


  return (
    <>
        {transactionDetails && 
            <div className="min-h-screen flex items-center justify-center  p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
        <div className="flex flex-col items-center gap-2 mb-6">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-green-700">Payment Successful!</h2>
          <p className="text-gray-500 text-sm">
            Thank you for your purchase.
          </p>
        </div>

        <div className="text-left space-y-2 text-sm text-gray-700">
          <div className="flex justify-between">
            <span className="font-medium">Order Number:</span>
            <span>{transactionDetails.track_id}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Transaction No:</span>
            <span>{transactionDetails.track_id}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Amount Paid:</span>
            <span>{transactionDetails.grand_total}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Date:</span>
            <span>{transactionDetails.created_at}</span>
          </div>
        </div>

        <div className="mt-6">
          <Link
            to={'/'}
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
        
        }
    </>

  );
};
