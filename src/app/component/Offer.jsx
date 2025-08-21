"use client";

const Offer = () => {
  const offers = [
    {
      id: 1,
      title: "Summer Sale",
      discount: "Up to 50% Off",
      bgImage: "/images/off1.jpg",
    },
    {
      id: 2,
      title: "Winter Special",
      discount: "Flat 30% Discount",
      bgImage: "/images/2.jpg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {offers.map((offer) => (
          <div
            key={offer.id}
            style={{
              backgroundImage: `url(${offer.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className={`relative rounded-lg overflow-hidden p-8 flex flex-col justify-center items-center text-center text-white shadow-lg hover:scale-105 transform transition-transform duration-300 cursor-pointer`}
          >
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
              <p className="text-lg">{offer.discount}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offer;
