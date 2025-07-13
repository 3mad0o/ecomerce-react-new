import React, { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineReportProblem } from "react-icons/md";
import axios from "axios";
import { useParams } from "react-router";

export const ProductReviews = () => {
  const { slug } = useParams();
  const [comments, setComments] = useState([]);
  const [product, setProduct] = useState(null);
  const [url, setUrl] = useState(
    `http://192.168.1.32:8000/api/v1/products/${slug}/reviews`
  );

  const loadReviews = () => {
    axios
      .get(url)
      .then((res) => {
        const data = res.data.data;
        if (data) {
          setComments((prev)=>[...prev,...data]);
            setUrl(res.data?.links?.next ?? null);

        }
      })
      .catch((err) => console.error("Error fetching product:", err));
  };
  useEffect(() => {
    loadReviews();
  }, []);
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
          <>
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="mb-6 p-4 border-bottom border-b-2 border-gray-100 relative"
              >
                <div className="flex mb-2 flex-col gap-2">
                  <div className="flex flex-row gap-2 items-center">
                    <h3 className="text-lg font-semibold">
                      {comment?.user.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {comment.created_at}
                    </p>
                  </div>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4].map((i) => (
                      <svg
                        key={i}
                        className="w-3 fill-black"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                    ))}
                    <svg
                      className="w-3 fill-[#CED5D8]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                  </div>
                  <p className="text-gray-700">{comment.comment}</p>
                  {comment.images.length > 0 && (
                    <PhotoProvider>
                      {comment.images.map((image) => (
                        <PhotoView src={image} key={image}>
                          <img
                            src={image}
                            className="w-[100px] h-[100px] object-cover cursor-pointer"
                          />
                        </PhotoView>
                      ))}
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
            ))}

            {/* ✅ Only render this if comments.length > 2 and url is truthy */}
            { url && <div className="w-full fle justify-center">
              <button type="button"
            onClick={()=>loadReviews()}
            className="bg-black text-white px-4 py-2 rounded"
            
            >load more</button>
              
              </div>}
          </>
        ) : (
          <div className="text-center py-8"></div>
        )}
      </div>

      {/* add to cart component */}
      {product && (
        <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center border-t-2 border-gray-200 h-auto bg-white py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row  justify-between gap-4">
              {/* Product info */}
              <div className="flex flex-row items-center  space-x-4">
                <img
                  src={product?.main_image}
                  alt="Selected Product"
                  className="w-[60px] h-[60px] rounded-md object-cover object-top"
                />
                <div className="flex flex-col">
                  <p className="text-lg font-bold text-gray-800">
                    {product?.name}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex gap-2 items-center">
                      <h6 className="text-sm sm:text-base font-bold text-gray-800">
                        ${product.price.toFixed(2)}
                      </h6>

                      {product.discount > 0 && (
                        <h6 className="text-sm sm:text-base text-gray-500">
                          <strike>
                            ${(product.price + product.discount).toFixed(2)}
                          </strike>
                        </h6>
                      )}
                    </div>
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
      )}
    </>
  );
};
