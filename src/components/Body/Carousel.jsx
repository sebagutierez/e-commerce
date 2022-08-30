import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
const sliderData = [
  {
    url: "https://images.unsplash.com/photo-1636262513955-986a7bc5be16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1632479734663-a742f1c4ef88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1588044021457-bff7a20c171d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1592966719124-2ca2978ba325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1558025623-2aafbebe8daf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
  },
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const length = sliderData.length;

  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };
  return (
    <>
      <div name="services" className="container mx-auto my-8">
        <h2 className="m-4 text-4xl font-bold text-sky-900">Best Sellers</h2>
        <h3 className="m-4 text-2xl font-bold text-orange-600">
          Los Top 10 más vendidos
        </h3>
        <div className="max-w-[1240px] mx-auto px-4 py-6 relative flex justify-center items-center">
          <FaAngleLeft
            onClick={prevSlide}
            className="absolute top-[50%] text-3xl text-white cursor-pointer left-8"
          />
          <FaAngleRight
            onClick={nextSlide}
            className="absolute top-[50%] aspect-w-16 aspect-h-9 text-3xl text-white cursor-pointer right-8"
          />
          {sliderData.map((item, index) => (
            <div className={index === slide ? "opacity-100" : "opacity-0"}>
              {index === slide && (
                <img className="w-full rounded-md" src={item.url} alt="/" />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
