import React from "react";
import { Link, useParams } from "react-router";
import { formatCurrency } from "../utils/formatCurrency";
import { MdOutlineStarRate } from "react-icons/md";

export const OrderDetails = () => {
  const { id } = useParams();

  const printInvoice =()=>{
    console.log('test');
    
        location.href ='https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf'


  }

  return (
    <div className="p-2 mt-4">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex flex-col gap-6">
        <div className="flex justify-end">
            <button type="button" 
            onClick={()=>printInvoice()}
            className="text-white bg-black p-3 rounded-md w-full md:w-fit hover:bg-gray-700 transition duration-200">Print Invoice</button>

        </div>

          <div className="space-y-3   border border-gray-200 rounded-md p-6 shadow-md ">
            <h2 className="text-xl font-semibold text-gray-800">
              Track Order #{id}
            </h2>
            <div className="w-full flex-col justify-center items-center">
              <ol className="flex md:flex-row flex-col md:items-start items-center justify-between w-full md:gap-1 gap-4">
                <li className="group flex relative justify-start after:content-[''] lg:after:w-11 md:after:w-5 after:w-5 after:h-0.5 md:after:border after:border-dashed md:after:bg-gray-500 after:inline-block after:absolute md:after:top-7 after:top-3 xl:after:left-44 lg:after:left-40 md:after:left-36">
                  <div className="w-full mr-1 block z-10 flex flex-col items-center justify-start gap-1">
                    <div className="justify-center items-center gap-1.5 inline-flex">
                      <h5 className="text-center text-gray-900 text-lg font-medium leading-normal">
                        Oder Placed
                      </h5>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M9.10815 11.2157C9.10815 11.2157 9.11044 11.2147 9.11433 11.2141C9.10997 11.2157 9.10815 11.2157 9.10815 11.2157Z"
                          fill="#047857"
                        />
                        <path
                          d="M9.13686 11.2157C9.13686 11.2157 9.13456 11.2147 9.13068 11.2141C9.13331 11.2151 9.136 11.2157 9.136 11.2157L9.13686 11.2157Z"
                          fill="#047857"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1.83337 9.99992C1.83337 5.48959 5.48972 1.83325 10 1.83325C14.5104 1.83325 18.1667 5.48959 18.1667 9.99992C18.1667 14.5102 14.5104 18.1666 10 18.1666C5.48972 18.1666 1.83337 14.5102 1.83337 9.99992ZM14.3635 7.92721C14.6239 7.66687 14.6239 7.24476 14.3635 6.98441C14.1032 6.72406 13.6811 6.72406 13.4207 6.98441L9.82961 10.5755C9.53851 10.8666 9.3666 11.0365 9.22848 11.1419C9.17307 11.1842 9.13961 11.2029 9.1225 11.2107C9.1054 11.2029 9.07194 11.1842 9.01653 11.1419C8.87841 11.0365 8.7065 10.8666 8.4154 10.5755L7.13815 9.29825C6.8778 9.03791 6.45569 9.03791 6.19534 9.29825C5.93499 9.55861 5.93499 9.98071 6.19534 10.2411L7.50018 11.5459C7.75408 11.7999 7.98968 12.0355 8.20775 12.2019C8.44909 12.3861 8.74554 12.5469 9.1225 12.5469C9.49946 12.5469 9.79592 12.3861 10.0373 12.2019C10.2553 12.0355 10.4909 11.7999 10.7448 11.5459L14.3635 7.92721Z"
                          fill="#047857"
                        />
                      </svg>
                    </div>
                    <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">
                      20 May, 2024
                    </h6>
                  </div>
                </li>
                <li className="group flex relative justify-start after:content-[''] lg:after:w-11 md:after:w-5 after:w-5 after:h-0.5 md:after:border after:border-dashed md:after:bg-gray-500 after:inline-block after:absolute md:after:top-7 after:top-3 xl:after:left-44 lg:after:left-40 md:after:left-32">
                  <div className="w-full mr-1 block z-10 flex flex-col items-center justify-start gap-1">
                    <div className="justify-center items-center gap-1.5 inline-flex">
                      <h5 className="text-center text-gray-900 text-lg font-medium leading-normal">
                        Picked
                      </h5>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M9.10815 11.2157C9.10815 11.2157 9.11044 11.2147 9.11433 11.2141C9.10997 11.2157 9.10815 11.2157 9.10815 11.2157Z"
                          fill="#047857"
                        />
                        <path
                          d="M9.13686 11.2157C9.13686 11.2157 9.13456 11.2147 9.13068 11.2141C9.13331 11.2151 9.136 11.2157 9.136 11.2157L9.13686 11.2157Z"
                          fill="#047857"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1.83337 9.99992C1.83337 5.48959 5.48972 1.83325 10 1.83325C14.5104 1.83325 18.1667 5.48959 18.1667 9.99992C18.1667 14.5102 14.5104 18.1666 10 18.1666C5.48972 18.1666 1.83337 14.5102 1.83337 9.99992ZM14.3635 7.92721C14.6239 7.66687 14.6239 7.24476 14.3635 6.98441C14.1032 6.72406 13.6811 6.72406 13.4207 6.98441L9.82961 10.5755C9.53851 10.8666 9.3666 11.0365 9.22848 11.1419C9.17307 11.1842 9.13961 11.2029 9.1225 11.2107C9.1054 11.2029 9.07194 11.1842 9.01653 11.1419C8.87841 11.0365 8.7065 10.8666 8.4154 10.5755L7.13815 9.29825C6.8778 9.03791 6.45569 9.03791 6.19534 9.29825C5.93499 9.55861 5.93499 9.98071 6.19534 10.2411L7.50018 11.5459C7.75408 11.7999 7.98968 12.0355 8.20775 12.2019C8.44909 12.3861 8.74554 12.5469 9.1225 12.5469C9.49946 12.5469 9.79592 12.3861 10.0373 12.2019C10.2553 12.0355 10.4909 11.7999 10.7448 11.5459L14.3635 7.92721Z"
                          fill="#047857"
                        />
                      </svg>
                    </div>
                    <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">
                      22 May, 2024
                    </h6>
                  </div>
                </li>
                <li className="group flex relative justify-start after:content-[''] lg:after:w-11 md:after:w-5 after:w-5 after:h-0.5 md:after:border after:border-dashed md:after:bg-gray-500 after:inline-block after:absolute md:after:top-7 after:top-3 xl:after:left-44 lg:after:left-40 md:after:left-32">
                  <div className="w-full mr-1 block z-10 flex flex-col items-center justify-start gap-1">
                    <div className="justify-center items-center gap-1.5 inline-flex">
                      <h5 className="text-center text-gray-900 text-lg font-medium leading-normal">
                        Packed
                      </h5>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M9.10815 11.2157C9.10815 11.2157 9.11044 11.2147 9.11433 11.2141C9.10997 11.2157 9.10815 11.2157 9.10815 11.2157Z"
                          fill="#047857"
                        />
                        <path
                          d="M9.13686 11.2157C9.13686 11.2157 9.13456 11.2147 9.13068 11.2141C9.13331 11.2151 9.136 11.2157 9.136 11.2157L9.13686 11.2157Z"
                          fill="#047857"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1.83337 9.99992C1.83337 5.48959 5.48972 1.83325 10 1.83325C14.5104 1.83325 18.1667 5.48959 18.1667 9.99992C18.1667 14.5102 14.5104 18.1666 10 18.1666C5.48972 18.1666 1.83337 14.5102 1.83337 9.99992ZM14.3635 7.92721C14.6239 7.66687 14.6239 7.24476 14.3635 6.98441C14.1032 6.72406 13.6811 6.72406 13.4207 6.98441L9.82961 10.5755C9.53851 10.8666 9.3666 11.0365 9.22848 11.1419C9.17307 11.1842 9.13961 11.2029 9.1225 11.2107C9.1054 11.2029 9.07194 11.1842 9.01653 11.1419C8.87841 11.0365 8.7065 10.8666 8.4154 10.5755L7.13815 9.29825C6.8778 9.03791 6.45569 9.03791 6.19534 9.29825C5.93499 9.55861 5.93499 9.98071 6.19534 10.2411L7.50018 11.5459C7.75408 11.7999 7.98968 12.0355 8.20775 12.2019C8.44909 12.3861 8.74554 12.5469 9.1225 12.5469C9.49946 12.5469 9.79592 12.3861 10.0373 12.2019C10.2553 12.0355 10.4909 11.7999 10.7448 11.5459L14.3635 7.92721Z"
                          fill="#047857"
                        />
                      </svg>
                    </div>
                    <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">
                      23 May, 2024
                    </h6>
                  </div>
                </li>
                <li className="group flex relative justify-start after:content-[''] lg:after:w-11 md:after:w-5 after:w-5 after:h-0.5 md:after:border after:border-dashed md:after:bg-gray-500 after:inline-block after:absolute md:after:top-7 after:top-3 xl:after:left-44 lg:after:left-40 md:after:left-[155px]">
                  <div className="w-full mr-1 block z-10 flex flex-col items-center justify-start gap-1">
                    <div className="justify-center items-center gap-1.5 inline-flex">
                      <h5 className="text-center text-gray-900 text-lg font-medium leading-normal whitespace-nowrap">
                        Oder Shipped
                      </h5>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M9.10815 11.2157C9.10815 11.2157 9.11044 11.2147 9.11433 11.2141C9.10997 11.2157 9.10815 11.2157 9.10815 11.2157Z"
                          fill="#047857"
                        />
                        <path
                          d="M9.13686 11.2157C9.13686 11.2157 9.13456 11.2147 9.13068 11.2141C9.13331 11.2151 9.136 11.2157 9.136 11.2157L9.13686 11.2157Z"
                          fill="#047857"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1.83337 9.99992C1.83337 5.48959 5.48972 1.83325 10 1.83325C14.5104 1.83325 18.1667 5.48959 18.1667 9.99992C18.1667 14.5102 14.5104 18.1666 10 18.1666C5.48972 18.1666 1.83337 14.5102 1.83337 9.99992ZM14.3635 7.92721C14.6239 7.66687 14.6239 7.24476 14.3635 6.98441C14.1032 6.72406 13.6811 6.72406 13.4207 6.98441L9.82961 10.5755C9.53851 10.8666 9.3666 11.0365 9.22848 11.1419C9.17307 11.1842 9.13961 11.2029 9.1225 11.2107C9.1054 11.2029 9.07194 11.1842 9.01653 11.1419C8.87841 11.0365 8.7065 10.8666 8.4154 10.5755L7.13815 9.29825C6.8778 9.03791 6.45569 9.03791 6.19534 9.29825C5.93499 9.55861 5.93499 9.98071 6.19534 10.2411L7.50018 11.5459C7.75408 11.7999 7.98968 12.0355 8.20775 12.2019C8.44909 12.3861 8.74554 12.5469 9.1225 12.5469C9.49946 12.5469 9.79592 12.3861 10.0373 12.2019C10.2553 12.0355 10.4909 11.7999 10.7448 11.5459L14.3635 7.92721Z"
                          fill="#047857"
                        />
                      </svg>
                    </div>
                    <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">
                      28 May, 2024
                    </h6>
                  </div>
                </li>
                <li className="group flex relative justify-start">
                  <div className="w-full block z-10 flex flex-col items-center justify-start gap-1">
                    <div className="justify-center items-center gap-1.5 inline-flex">
                      <h5 className="text-center text-gray-500 text-lg font-medium leading-normal">
                        Oder Delivered
                      </h5>
                    </div>
                    <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">
                      2 Jun, 2024
                    </h6>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          <div className="space-y-3   border border-gray-200 rounded-md p-6 shadow-md ">
            <h2 className="text-xl font-semibold text-gray-800">Order #{id}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <h3 className="text-base font-semibold text-gray-800">
                  Order Date
                </h3>
                <p className="text-sm text-gray-600">October 10, 2023</p>
              </div>

              <div className="flex flex-col">
                <h3 className="text-base font-semibold text-gray-800">
                  Order Status
                </h3>
                <p className="text-sm text-green-600">Delivered</p>
              </div>

              <div className="flex flex-col">
                <h3 className="text-base font-semibold text-gray-800">
                  Payment Method
                </h3>
                <p className="text-sm text-gray-600">Credit Card</p>
              </div>

              <div className="flex flex-col">
                <h3 className="text-base font-semibold text-gray-800">
                  Shipping Address
                </h3>
                <p className="text-sm text-gray-600">
                  123 Main St, Springfield, IL 62701
                </p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-base font-semibold text-gray-800">
                  Subtotal
                </h3>
                <p className="text-sm text-gray-600">
                  {formatCurrency(120.0, "USD", "en-us")}
                </p>
              </div>

              <div className="flex flex-col">
                <h3 className="text-base font-semibold text-gray-800">Tax</h3>
                <p className="text-sm text-gray-600">
                  {formatCurrency(10, "USD", "en-us")}
                </p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-base font-semibold text-gray-800">Total</h3>
                <p className="text-sm text-gray-600">
                  {formatCurrency(130.0, "USD", "en-us")}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3   border border-gray-200 rounded-md p-6 shadow-md">

            <h2 className="text-xl font-semibold text-gray-800">Products</h2>

            {[
              {
                id: 1,
                name: "Velvet Sneaker",
                size: "MD",
                price: "$20.00",
                quantity: 2,
                image: "https://readymadeui.com/images/product14.webp",
              },
              {
                id: 2,
                name: "Smart Watch Timex",
                size: "SM",
                price: "$60.00",
                quantity: 1,
                image: "https://readymadeui.com/images/watch5.webp",
              },
              {
                id: 3,
                name: "French Connection",
                size: "LG",
                price: "$40.00",
                quantity: 1,
                image: "https://readymadeui.com/images/watch4.webp",
              },
            ].map((item, index) => (
              <Link key={item.id}
              to={'/product/1'}
              >
                <div className="grid grid-cols-3 items-start gap-4">
                  <div className="col-span-2 flex items-start gap-4">
                    <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="flex flex-col">
                      <h3 className="text-base max-sm:text-sm font-bold text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-xs font-semibold text-gray-500 mt-0.5">
                        Size: {item.size}
                      </p>
                      
                      
                        <Link
                        to={'/product/1/reviews'}
                          className="mt-6 font-semibold text-xs flex items-center gap-1"
                        >
                         <MdOutlineStarRate />

                         Rate Product
                        </Link>
                    </div>

                    
                    
                  </div>

                  

                  <div className="ml-auto">
                    <h4 className="text-lg max-sm:text-base font-bold text-gray-800">
                      {item.price}
                    </h4>

                    <div className="mt-6 flex items-center px-3 py-1.5 border border-gray-300 text-gray-800 text-xs bg-transparent rounded-md">
                      <span className="mx-3 font-bold">{item.quantity}</span>
                    </div>
                  </div>
                </div>

                {index < 2 && <hr className="border-gray-300 my-4" />}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
