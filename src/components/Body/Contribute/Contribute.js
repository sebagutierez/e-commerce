import React from "react";
import Discount from "./Discount";

const Contribute = () => {
  return (
    <>
      {/* Contenedor */}
      <div className="flex flex-col p-2 justify-items-center justify-center bg-sky-900">
        {/* titulo */}
        <div className=" text-white text-center font-bold text-3xl m-5">
          Contribuí a nuestra biblioteca
        </div>
        {/* contenido */}
        <div className="grid grid-flow-row sm:grid-flow-col justify-items-center my-10 place-content-evenly gap-y-10">
          <div className="h-80 font-ftext bg-white place-content-center text-justify max-w-sm p-8 m-2 shadow-xl shadow-neutral-900/50 border border-sky-900">
            En tienda de libros nos interesa cuidar el medio ambiente, por lo
            que trayendo tu libro usado podés acceder a descuentos exclusivos en
            tu próxima compra. Enterate cómo podes acceder a descuentos de 10%, 15% y hasta 20%
          </div>
          {/* contenedor alternative */}
          <div className="flex place-content-center">
            <Discount />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contribute;
