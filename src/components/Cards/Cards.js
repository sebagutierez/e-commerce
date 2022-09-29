import { useState } from "react";
import Modal from "../Modal/Modal";

const Cards = ({data, addToCart}) => {
  const {img, title, author, price, stock } = data;
  let imglibro;
  let buttontype;
  let visible;
  if (stock <= 10) {
    imglibro =
      "https://www.hostinet.com/formacion/wp-content/uploads/2017/01/agotado-sello.png";
      buttontype="opacity-50 cursor-not-allowed"
      visible=false;
  } else {
    imglibro = img;
    buttontype="opacity-100 cursor-pointer"
    visible=true;
  }
  const [showModal,setShowModal]=useState(false)

  //con destructuring podria pasarle {(img,title,text)} y abajo invocar sin usar props.
  return (
    <>
    <div className="w-72 h-auto p-4 m-1.5 rounded-lg overflow-hidden bg-white transition-all duration-500 shadow-md cursor-pointer hover:shadow-lg hover:scale-110 hover:transtion-all ease-in-out">
      <div className="flex flex-col items-center justify-around w-full h-full">
        <img className="w-2/5 m-4 h-6/12" src={imglibro} alt="libro"></img>
        <h2 className="text-xl font-bold text-center text-sky-900 ">
          {title}
        </h2>
        <p className="text-center font-ftext">Autor: {author}</p>
        <p className="font-bold text-center font-ftext">${price}</p>
        <p className="text-center">Disponibles: {stock}</p>
        <button onClick={() => setShowModal(visible)} className={`p-3 m-4 ${buttontype}`}>Agregar al Carrito</button>
      </div>
    </div>
    <Modal show={showModal} setShow={setShowModal} data={data} addToCart={addToCart} />
</>
  );
};
export default Cards;
