import { useState } from "react";
import { Link } from "react-router";

export const CategorySlider = () => {
  const [categories, setCategories] = useState([
    {
      name: "Men's Fashion",
      image: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Shoes",
      image: "https://images.unsplash.com/photo-1664551585759-8a6259161936?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Woman's Fashion",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Kids' Fashion",
      image: "https://images.unsplash.com/photo-1529672425113-d3035c7f4837?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Electronics",
      image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Home & Garden",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Sports & Outdoors",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Health & Beauty",
      image: "https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Toys & Hobbies",
      image: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Automotive",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Books & Stationery",
      image: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]);
  return (
    <div className="py-6">
      <div className="flex overflow-auto w-full  md:grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {categories.map((category, index) => {
         return <Link
            to={"/category/"+category.name.toLowerCase().replace(/\s+/g, "-")}
            className="flex flex-col items-center p-4 "
            title="Category Name"
          >
            <div className="w-24 h-24 overflow-hidden rounded-full border-4 border-gray-200 shadow-md">
              <img
                src={category.image}
                alt="Category Name"
                className="w-full h-full object-cover transform transition hover:scale-105 hover:shadow-lg"
              />
            </div>
            <span className="text-center text-sm font-medium mt-2">
              {category.name}
            </span>
          </Link>;
        })}
      </div>
    </div>
  );
};
