"use client";

import Image from "next/image";

const Banner = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Big Card */}
        <div className="relative col-span-1 md:col-span-2 rounded-lg overflow-hidden">
          <Image
            src="/images/banner-left.jpg" // apnar asset path
            alt="Big Banner"
            width={800}
            height={400}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
              Big Banner Sale
            </h2>
          </div>
        </div>

        {/* Right Two Cards */}
        <div className="flex flex-col gap-6">
          <div className="relative h-48 rounded-lg overflow-hidden">
            <Image
              src="/images/banner-right-1.jpg"
              alt="Right Banner 1"
              width={400}
              height={200}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
              <h3 className="text-xl font-semibold text-white">Special Offer 1</h3>
            </div>
          </div>
          <div className="relative h-48 rounded-lg overflow-hidden">
            <Image
              src="/images/banner-right-2.jpg"
              alt="Right Banner 2"
              width={400}
              height={200}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
              <h3 className="text-xl font-semibold text-white">Special Offer 2</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
