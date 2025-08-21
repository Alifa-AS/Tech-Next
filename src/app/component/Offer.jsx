"use client";

const OfferCards = () => {
  const offers = [
    {
      id: 1,
      title: "Summer Sale",
      discount: "Up to 50% Off",
      bg: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      id: 2,
      title: "Winter Special",
      discount: "Flat 30% Discount",
      bg: "bg-gradient-to-r from-blue-500 to-green-500",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className={`relative rounded-lg overflow-hidden p-8 flex flex-col justify-center items-center text-center text-white ${offer.bg} shadow-lg hover:scale-105 transform transition-transform duration-300 cursor-pointer`}
          >
            <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
            <p className="text-lg">{offer.discount}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferCards;
