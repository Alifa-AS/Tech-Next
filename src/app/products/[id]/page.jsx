"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data); 
      })
      .catch((err) => console.log("Fetch error:", err));
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Product Image */}
        <div className="md:w-1/2 flex justify-center items-start">
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="transition-transform duration-300 ease-in-out hover:scale-110 object-contain"
            />
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <p className="text-sm text-gray-500">{product.category}</p>
          <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>

          <div className="flex items-center gap-4 text-yellow-500">
            <p>⭐ Review({product.reviewCount || 0})</p>
            <p className="text-gray-500">Sold: {product.sold || 0}</p>
          </div>
          <button className="text-blue-500 underline mt-1">View shop</button>

          <div className="mt-4 flex items-center gap-3">
            <p className="text-xl font-bold text-green-600">
              {product.currentPrice || product.price}
            </p>
            {product.originalPrice &&
              product.originalPrice !== product.currentPrice && (
                <p className="text-gray-400 line-through">{product.originalPrice}</p>
              )}
          </div>

          {/* Full Product Specs */}
          <div className="mt-4 space-y-1 text-gray-700">
            <p><span className="font-semibold">Brand:</span> {product.brand || "N/A"}</p>
            <p><span className="font-semibold">Model Name:</span> {product.model || "N/A"}</p>
            <p><span className="font-semibold">Screen Size:</span> {product.screenSize || "N/A"}</p>
            <p><span className="font-semibold">Refresh Rate:</span> {product.refreshRate || "N/A"}</p>
            <p><span className="font-semibold">Resolution:</span> {product.resolution || "N/A"}</p>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <input type="number" defaultValue={1} min={1} className="w-20 border border-gray-300 rounded px-2 py-1"/>
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">Add to Cart</button>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">About this item</h2>
            <p className="text-gray-700">{product.description || "No description available."}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
