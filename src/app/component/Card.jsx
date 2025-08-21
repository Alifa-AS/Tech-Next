"use client";

import { FaTruck, FaClock, FaHeadset } from "react-icons/fa";

const ServiceCards = () => {
  const services = [
    {
      id: 1,
      icon: <FaTruck className="text-4xl text-white" />,
      title: "Free Shipping",
      description: "On all orders over $50",
      bg: "bg-blue-500",
    },
    {
      id: 2,
      icon: <FaClock className="text-4xl text-white" />,
      title: "7 Days Delivery",
      description: "Fast delivery guaranteed",
      bg: "bg-green-500",
    },
    {
      id: 3,
      icon: <FaHeadset className="text-4xl text-white" />,
      title: "24/7 Support",
      description: "We are here to help anytime",
      bg: "bg-purple-500",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-lg ${service.bg} text-white`}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;
