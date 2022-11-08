import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import bookOne from "../assets/books/bookOne.jpg";
import bookTwo from "../assets/books/bookTwo.jpg";
import bookThree from "../assets/books/bookThree.jpg";
import bookFour from "../assets/books/bookFour.jpg";
import bookFive from "../assets/books/bookFive.jpg";
import bookSix from "../assets/books/bookSix.jpg";
import bookSeven from "../assets/books/bookSeven.jpg";
import bookEight from "../assets/books/bookEight.jpg";
import bookNine from "../assets/books/bookNine.jpg";
import bookTen from "../assets/books/bookTen.jpg";

const sliderData = [
  {
    url: bookOne,
    key: 1,
  },
  {
    url: bookTwo,
    key: 2,
  },
  {
    url: bookThree,
    key: 3,
  },
  {
    url: bookFour,
    key: 4,
  },
  {
    url: bookFive,
    key: 5,
  },
  {
    url: bookSix,
    key: 6,
  },
  {
    url: bookSeven,
    key: 7,
  },
  {
    url: bookEight,
    key: 8,
  },
  {
    url: bookNine,
    key: 9,
  },
  {
    url: bookTen,
    key: 10,
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
      <div name="services" className="container h-[700px] mx-auto my-8">
        <h2 className="m-4 text-3xl font-bold text-sky-900">Best Sellers</h2>
        <h3 className="m-4 text-xl font-bold text-orange-600">
          Los Top 10 más vendidos
        </h3>
        <div className="max-w-[1240px] mx-auto px-4 py-6 relative flex justify-center items-center">
          <FaAngleLeft
            onClick={prevSlide}
            className="absolute top-[50%] text-3xl text-black cursor-pointer left-8"
          />
          <FaAngleRight
            onClick={nextSlide}
            className="absolute top-[50%] aspect-w-16 aspect-h-9 text-3xl text-black cursor-pointer right-8"
          />
          {sliderData.map((item, index) => (
            <div key={ item.key } className={index === slide ? "opacity-100" : "opacity-0"}>
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
