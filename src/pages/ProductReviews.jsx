import React, { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineReportProblem } from "react-icons/md";

export const ProductReviews = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      comment: "Great product! Highly recommend.",
      date: "2023-10-01",
      image: "https://readymadeui.com/images/product5.webp",
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 4,
      comment: "Good quality, but a bit expensive.",
      date: "2023-10-02",
    },
    {
      id: 3,
      name: "Alice Johnson",
      rating: 3,
      comment: "Average product, nothing special.",
      date: "2023-10-03",
    },
    {
      id: 4,
      name: "Bob Brown",
      rating: 2,
      comment: "Not satisfied with the quality.",
      date: "2023-10-04",
    },
    {
      id: 5,
      name: "Charlie White",
      rating: 1,
      comment: "Terrible experience, will not buy again.",
      date: "2023-10-05",
    },
  ]);
  return (
    <>
      <div className="container mx-auto px-4    mb-48 md:mb-28 mt-4">
        {/* overall rating */}
        <div className="flex flex-col bg-gray-100 p-6 rounded-lg gap-3 ">
          <div className="flex flex-row gap-3 items-center ">
            <div class="flex space-x-1">
              <svg
                class="w-5 fill-black"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                class="w-5 fill-black"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                class="w-5 fill-black"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                class="w-5 fill-black"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                class="w-5 fill-[#CED5D8]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>

            <h2 className="text-3xl font-bold">4.5</h2>
          </div>


            <div class="flex flex-wrap gap-y-4 gap-x-6 ">
                  <div class="flex items-center">
                    <p class="text-sm text-gray-800 font-bold">5.0</p>
                    <svg
                      class="w-5 fill-black ml-1.5"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div class="bg-gray-300 rounded-md w-[50px] md:w-[100px] h-2 ml-3">
                      <div class="w-2/3 h-full rounded-md bg-black"></div>
                    </div>
                    <p class="text-sm text-gray-800 font-bold ml-3">66%</p>
                  </div>

                  <div class="flex items-center">
                    <p class="text-sm text-gray-800 font-bold">4.0</p>
                    <svg
                      class="w-5 fill-black ml-1.5"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div class="bg-gray-300 rounded-md w-[50px] md:w-[100px] h-2 ml-3">
                      <div class="w-1/3 h-full rounded-md bg-black"></div>
                    </div>
                    <p class="text-sm text-gray-800 font-bold ml-3">33%</p>
                  </div>

                  <div class="flex items-center">
                    <p class="text-sm text-gray-800 font-bold">3.0</p>
                    <svg
                      class="w-5 fill-black ml-1.5"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div class="bg-gray-300 rounded-md w-[50px] md:w-[100px] h-2 ml-3">
                      <div class="w-1/6 h-full rounded-md bg-black"></div>
                    </div>
                    <p class="text-sm text-gray-800 font-bold ml-3">16%</p>
                  </div>

                  <div class="flex items-center">
                    <p class="text-sm text-gray-800 font-bold">2.0</p>
                    <svg
                      class="w-5 fill-black ml-1.5"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div class="bg-gray-300 rounded-md w-[50px] md:w-[100px] h-2 ml-3">
                      <div class="w-1/12 h-full rounded-md bg-black"></div>
                    </div>
                    <p class="text-sm text-gray-800 font-bold ml-3">8%</p>
                  </div>

                  <div class="flex items-center">
                    <p class="text-sm text-gray-800 font-bold">1.0</p>
                    <svg
                      class="w-5 fill-black ml-1.5"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div class="bg-gray-300 rounded-md w-[50px] md:w-[100px] h-2 ml-3">
                      <div class="w-[6%] h-full rounded-md bg-black"></div>
                    </div>
                    <p class="text-sm text-gray-800 font-bold ml-3">6%</p>
                  </div>
                </div>
        </div>
        {comments.length > 0 ? (
          comments.map((comment) => {
            return (
              <div
                key={comment.id}
                className="mb-6 p-4 border-bottom border-b-2  border-gray-100 relative"
              >
                <div className="flex  mb-2 flex-col gap-2">
                  <div className="flex flex-row gap-2 items-center">
                    <h3 className="text-lg font-semibold">{comment.name}</h3>
                    <p className="text-sm text-gray-500 ">{comment.date}</p>
                  </div>
                  <div class="flex space-x-1">
                    <svg
                      class="w-3 fill-black"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-3 fill-black"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-3 fill-black"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-3 fill-black"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-3 fill-[#CED5D8]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                  </div>
                  <p className="text-gray-700">{comment.comment}</p>
                  {comment.image && (
                    <PhotoProvider>
                      <PhotoView src={comment.image} key={comment.id}>
                        <img
                          src={comment.image}
                          className="w-[100px] h-[100px] object-cover cursor-pointer"
                        />
                      </PhotoView>
                    </PhotoProvider>
                  )}
                </div>

                <div className="absolute bottom-0 right-0 p-4 flex flex-row gap-2">
                  <button type="button">
                    <MdOutlineReportProblem className="text-2xl hover:fill-red-500" />
                  </button>
                  <button type="button">
                    <AiOutlineLike className="text-2xl hover:fill-red-500" />
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-8"></div>
        )}
      </div>

      {/* add to cart component */}
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center border-t-2 border-gray-200 h-auto bg-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row  justify-between gap-4">
            {/* Product info */}
            <div className="flex flex-row items-center  space-x-4">
              <img
                src="https://readymadeui.com/images/product6.webp"
                alt="Selected Product"
                className="w-[60px] h-[60px] rounded-md object-cover object-top"
              />
              <div className="flex flex-col">
                <p className="text-lg font-bold text-gray-800">
                  Adjective Attire | T-shirt
                </p>
                <div className="flex flex-wrap gap-4">
                  <p className="text-gray-800 text-xl font-bold">$12</p>
                  <p className="text-gray-400 text-xl">
                    <strike>$16</strike>
                    <span className="text-sm ml-1.5">Tax included</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Add to cart button */}
            <button
              type="button"
              className="w-full h-fit sm:w-auto mt-4 sm:mt-0 px-6 py-3 bg-black hover:bg-blue-700 text-white text-sm font-semibold rounded-md"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
