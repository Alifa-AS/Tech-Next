"use client";

import { useState } from "react";
import Image from "next/image";

// Categories + products
const categoriesData = [
  {
    name: "Phones",
    products: [
      { id: 1, name: "iPhone 15", price: "$999", image: "/products/phone1.jpg" },
      { id: 2, name: "Samsung S23", price: "$899", image: "/products/phone2.jpg" },
      { id: 3, name: "Pixel 8", price: "$799", image: "/products/phone3.jpg" },
      { id: 4, name: "OnePlus 12", price: "$699", image: "/products/phone4.jpg" },
    ],
  },
  {
    name: "Laptops",
    products: [
      { id: 1, name: "MacBook Pro", price: "$1999", image: "/products/laptop1.jpg" },
      { id: 2, name: "Dell XPS 13", price: "$1299", image: "/products/laptop2.jpg" },
      { id: 3, name: "HP Spectre", price: "$1399", image: "/products/laptop3.jpg" },
      { id: 4, name: "Asus Zenbook", price: "$1099", image: "/products/laptop4.jpg" },
    ],
  },
  {
    name: "Accessories",
    products: [
      { id: 1, name: "AirPods Pro", price: "$249", image: "/products/accessory1.jpg" },
      { id: 2, name: "Charger", price: "$29", image: "/products/accessory2.jpg" },
      { id: 3, name: "Smart Watch", price: "$199", image: "/products/accessory3.jpg" },
      { id: 4, name: "USB-C Hub", price: "$49", image: "/products/accessory4.jpg" },
    ],
  },
  {
    name: "Gadgets",
    products: [
      { id: 1, name: "Drone", price: "$499", image: "/products/gadget1.jpg" },
      { id: 2, name: "VR Headset", price: "$399", image: "/products/gadget2.jpg" },
      { id: 3, name: "Smart Camera", price: "$299", image: "/products/gadget3.jpg" },
      { id: 4, name: "Power Bank", price: "$59", image: "/products/gadget4.jpg" },
    ],
  },
];

// Pastel colors
const pastelColors = ["bg-blue-50", "bg-green-50", "bg-yellow-50", "bg-pink-50"];

const ProductCategorySection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Current products based on activeCategory
  const currentProducts =
    activeCategory === "All"
      ? categoriesData.flatMap(cat => cat.products)
      : categoriesData.find(cat => cat.name === activeCategory).products;

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      {/* Category Buttons */}
      <div className="flex flex-wrap gap-4 mb-8">
        <button
          onClick={() => setActiveCategory("All")}
          className={`px-4 py-2 rounded-full font-medium transition-colors duration-300
            ${activeCategory === "All" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}
        >
          All
        </button>

        {categoriesData.map(category => (
          <button
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
            className={`px-4 py-2 rounded-full font-medium transition-colors duration-300
              ${activeCategory === category.name ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {currentProducts.map((product, index) => (
          <div
            key={`${product.id}-${index}`}
            className={`rounded-lg overflow-hidden p-4 flex flex-col items-center justify-center
              ${pastelColors[index % pastelColors.length]} shadow hover:shadow-lg transition-shadow duration-300`}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="object-contain mb-4"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-700 font-medium mt-1">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategorySection;
