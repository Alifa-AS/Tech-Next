"use client";

import Image from "next/image";

const BestSelling = () => {
  const bestSellingProducts = [
    { id: 1, name: "iPhone 15 Pro", image: "/products/pro2.png" },
    { id: 2, name: "AirPods Max", image: "/products/pro2.png" },
    { id: 3, name: "Apple Watch Ultra", image: "/products/pro2.png" },
    { id: 4, name: "MacBook Air M2", image: "/products/pro2.png" },
    { id: 5, name: "iPad Pro", image: "/products/pro2.png" },
    { id: 6, name: "HomePod Mini", image: "/products/pro2.png" },
    { id: 7, name: "iMac 24-inch", image: "/products/pro2.png" },
    { id: 8, name: "Apple TV 4K", image: "/products/pro2.png" },
    { id: 9, name: "Magic Keyboard", image: "/products/pro2.png" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
        Best Selling Products
      </h2>

      {/* White container box */}
      <div className="bg-white rounded-2xl p-6 shadow-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {bestSellingProducts.map((product) => (
            <div
              key={product.id}
              className="flex items-center bg-white rounded-xl shadow-lg p-4 gap-4 hover:shadow-xl transition"
            >
              {/* Left Image */}
              <div className="relative w-20 h-20 flex-shrink-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Right Name */}
              <h3 className="text-lg font-medium text-gray-700">
                {product.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
