import React from "react";
import gifCardImg from "../assets/gif-card.jpg";
const GifCard = () => {
  return (
    <div name="gifcard" className="container mx-auto my-8">
      <div className="flex flex-wrap mx-4">
        <div className="md:w-1/2 sm:w-full">
          <img
            className="object-cover w-full h-full mix-blend-overlay"
            src={gifCardImg}
            alt="/"
          />
        </div>
        <div className=" md:w-1/2 sm:w-full">
          <h2 className="m-4 text-4xl font-bold text-sky-900 ">
            Regala una Gif Card
          </h2>
          <h3 className="m-4 text-xl font-bold text-orange-600 ">
            Sorprende con un regalo original
          </h3>
          <p className="m-4">
            No te compliques la vida pensando en regalos, elige una Gif Card
            para que el agasajado encuentre el libro que más le guste!{" "}
          </p>
          <button className="p-3 m-4 ">Comprar Ahora</button>
        </div>
      </div>
    </div>
  );
};

export default GifCard;
