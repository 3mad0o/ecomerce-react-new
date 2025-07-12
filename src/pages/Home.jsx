import React from "react";
import { Slider } from "../features/Slider/Components/Slider";
import { CategorySlider } from "../features/Category/Components/CategorySlider";
import { ProductList } from "../features/Products/Components/ProductList";
import { Link } from "react-router";
import { ProductSwiper } from "../features/Products/Components/ProductSwiper";
import { IoFlashOutline } from "react-icons/io5";
import { BannerSlider } from "../features/banner/components/BannerSlider";
  
export const Home = () => {
  const [filters, setFilters] = React.useState({
    sortBy: "no_of_sales",
    order: "desc",
  });
  const [selectedFilters, setSelectedFilters] = React.useState("no_of_sales");

  return (
    <>
        <Slider />

      <div className="space-y-3 container mx-auto">
        <CategorySlider />
        <ProductSwiper title={"Lighting Deals"} icon={<IoFlashOutline className="text-yellow-400 text-3xl" />} 
          products={[
{
      "id": 1,
      "category_id": 1,
      "name": "omnis ratione voluptas GOOCE",
      "description": "Molestiae ut cupiditate nesciunt eos magnam quod atque. Aliquam saepe praesentium qui laudantium in laboriosam nulla.",
      "price": 457.37,
      "quantity": 10,
      "discount_type": null,
      "discount": 0,
      "created_at": "2025-07-12 14:50:42",
      "main_image": "https://media.alshaya.com/adobe/assets/urn:aaid:aem:adbf4f60-59ed-4fd0-ac0a-b6a058977243/as/AR-0131-7808-040_2.jpg?width=450&height=577&preferwebp=true",
      "reviews_rate_sum": 0,
      "reviews_count": 0
    },
    {
      "id": 2,
      "category_id": 2,
      "name": "ea quis natus PEHVM",
      "description": "Adipisci eos et sunt neque dolor ut occaecati ea. Eaque modi explicabo ad sint dolores. Consequatur delectus sapiente quod molestiae ex voluptas. Ipsam dolores voluptatem reiciendis aliquam veniam eaque.",
      "price": 391.64,
      "quantity": 14,
      "discount_type": null,
      "discount": 0,
      "created_at": "2025-07-12 14:50:42",
      "main_image": "https://media.alshaya.com/adobe/assets/urn:aaid:aem:e654b2e0-98ed-42ab-b400-b7ac93b6a840/as/AR-0366-5962-106_2.jpg?width=450&height=577&preferwebp=true",
      "reviews_rate_sum": 0,
      "reviews_count": 0
    },
    {
      "id": 3,
      "category_id": 3,
      "name": "facere minima ab DO6XY",
      "description": "Et qui debitis laudantium adipisci nisi. A doloribus enim accusamus accusamus quia. Odit quia aliquid impedit saepe cumque ut labore. Non eos dolor et a illum. Magni necessitatibus ut eaque rem.",
      "price": 176.55,
      "quantity": 80,
      "discount_type": null,
      "discount": 0,
      "created_at": "2025-07-12 14:50:42",
      "main_image": "https://media.alshaya.com/adobe/assets/urn:aaid:aem:0e3ea941-00d2-4b88-a575-dc854bc65277/as/AR-0355-5856-211_2.jpg?width=450&height=577&preferwebp=true",
      "reviews_rate_sum": 0,
      "reviews_count": 0
    },
    {
      "id": 4,
      "category_id": 4,
      "name": "unde ipsa temporibus RGCHM",
      "description": "Aut aut sed quis qui. Provident ea eos nam et voluptas labore qui. Ut nihil at ut nihil sed voluptatem. Beatae officia nesciunt rerum doloremque quam similique.",
      "price": 261.62,
      "quantity": 54,
      "discount_type": null,
      "discount": 0,
      "created_at": "2025-07-12 14:50:42",
      "main_image": "https://media.alshaya.com/adobe/assets/urn:aaid:aem:5c15a091-6779-4d09-954a-a1967d50ab51/as/AR-0116-7129-738_2.jpg?width=450&height=577&preferwebp=true",
      "reviews_rate_sum": 0,
      "reviews_count": 0
    },
    {
      "id": 5,
      "category_id": 5,
      "name": "perferendis dolores quia OM159",
      "description": "Maxime accusantium et itaque numquam sunt ut. Sit eum aut dolor officiis veritatis tenetur illo distinctio. Rerum voluptatibus voluptatum ipsa pariatur ipsum debitis reprehenderit.",
      "price": 421.17,
      "quantity": 60,
      "discount_type": "fixed",
      "discount": 28.3,
      "created_at": "2025-07-12 14:50:42",
      "main_image": "https://media.alshaya.com/adobe/assets/urn:aaid:aem:83e9042c-8b22-467d-ba67-e504eddd3d0e/as/AR-0181-4290-001_2.jpg?width=450&height=577&preferwebp=true",
      "reviews_rate_sum": 0,
      "reviews_count": 0
    },


          ]}
        
        
        
        />


        <BannerSlider />
        <div className="flex flex-row justify-center items-center gap-10">
          <button
            className={`text-2xl ${
              selectedFilters == "no_of_sales"
                ? "border-b-2 font-semibold border-black p-1"
                : ""
            }`}
            onClick={() => {
              setSelectedFilters("no_of_sales");

              setFilters({
                sortBy: "no_of_sales",
                order: "desc",
              });
            }}
          >
            top selling
          </button>

          <button
            className={`text-2xl  ${
              selectedFilters == "discounts"
                ? "border-b-2 font-semibold border-black p-1"
                : ""
            }`}
            onClick={() => {
              setSelectedFilters("discounts");

              setFilters({
                sortBy: "discounts",
                order: "desc",
              });
            }}
          >
            discounts
          </button>
        </div>
        <ProductList filters={filters} />
      </div>
    </>
  );
};
