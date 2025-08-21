"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const pastelColors = ["bg-blue-50", "bg-green-50", "bg-yellow-50", "bg-pink-50"];

const Product = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [categoriesData, setCategoriesData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setCategoriesData(data.categories))
      .catch(err => console.log("Fetch error:", err));
  }, []);

  if (!categoriesData.length) return <p className="text-center mt-10">Loading...</p>;

  const currentProducts =
    activeCategory === "All"
      ? categoriesData.flatMap(cat => cat.products)
      : categoriesData.find(cat => cat.name === activeCategory)?.products || [];

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {currentProducts.map((product, index) => (
          <div
            key={`${product.id}-${index}`}
            className={`rounded-lg overflow-hidden p-4 flex flex-col items-center justify-center
              ${pastelColors[index % pastelColors.length]} shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer`}
            onClick={() => router.push(`/products/${product.id}`)}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={120}
              height={120}
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

export default Product;
