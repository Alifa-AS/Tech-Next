"use client";

import Image from "next/image";
import Slider from "react-slick";

const Banner = () => {
  const bigBannerImages = [
    { src: "/images/a1.jpg", title: "Big Banner Sale" },
    { src: "/images/a2.jpg", title: "Mega Discount" },
    { src: "/images/a3.jpg", title: "Hot Deals" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Big Carousel */}
        <div className="relative col-span-1 md:col-span-2 rounded-lg overflow-hidden">
          <div className="relative col-span-1 md:col-span-2 rounded-lg overflow-hidden">
            <Slider {...settings} className="rounded-lg overflow-hidden">
              {bigBannerImages.map((item, index) => (
                <div
                  key={index}
                  className="relative h-96 md:h-[400px] rounded-lg overflow-hidden"
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-lg">
                    <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
                      {item.title}
                    </h2>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Right Two Cards */}
        <div className="flex flex-col gap-6">
          <div className="relative h-48 rounded-lg overflow-hidden">
            <Image
              src="/images/r1.jpg"
              alt="Right Banner 1"
              width={400}
              height={200}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
              <h3 className="text-xl font-semibold text-white">
                Special Offer 1
              </h3>
            </div>
          </div>
          <div className="relative h-48 rounded-lg overflow-hidden">
            <Image
              src="/images/r2.jpg"
              alt="Right Banner 2"
              width={400}
              height={200}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
              <h3 className="text-xl font-semibold text-white">
                Special Offer 2
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
