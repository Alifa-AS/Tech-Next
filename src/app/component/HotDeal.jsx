"use client";

import Image from "next/image";

const HotDeal = () => {
  const products = [
    {
      id: 1,
      name: "Smartphone X",
      image: "/products/pro2.png",
      gradient: "from-pink-500 via-red-400 to-yellow-400",
    },
    {
      id: 2,
      name: "Wireless Headphones",
      image: "/products/pro2.png",
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
    },
    {
      id: 3,
      name: "Smart Watch Pro",
      image: "/products/pro2.png",
      gradient: "from-teal-400 via-green-400 to-lime-400",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Hot Deal
      </h2>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className={`flex flex-col md:flex-row items-center md:items-start 
                       rounded-2xl overflow-hidden shadow-lg text-white
                       bg-gradient-to-br ${product.gradient} 
                       transition-transform duration-300 hover:scale-105`}
          >
            {/* Left Image */}
            <div className="w-full md:w-1/2 h-48 relative">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-between">
              <h3 className="text-xl font-semibold mb-4">{product.name}</h3>
              <button className="mt-auto border border-white rounded-lg px-4 py-2 hover:bg-white hover:text-gray-900 transition">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotDeal;
