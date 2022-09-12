import { useState } from "react";
import Modal from "../Modal/Modal";

const Cards = ({data, addToCart}) => {
  const { id, img, title, author, price, stock } = data;
  let imglibro;
  if (stock < 10) {
    imglibro =
      "https://www.hostinet.com/formacion/wp-content/uploads/2017/01/agotado-sello.png";
  } else {
    imglibro = img;
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
        <button onClick={() => setShowModal(true)} className="p-3 m-4">Agregar al Carrito</button>
      </div>
    </div>
    <Modal show={showModal} setShow={setShowModal} id={id} addToCart={addToCart} />
</>
  );
};
export default Cards;
