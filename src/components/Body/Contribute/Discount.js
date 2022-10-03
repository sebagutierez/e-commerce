import { useState } from "react";

const Discount = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      {/* Container */}
      <div className="flex flex-col max-w-sm h-80 bg-neutral-300 border border-solid rounded-lg border-sky-900 break-all m-2 shadow-xl shadow-neutral-900/50">
        {/* block tabs */}
        <div className="flex font-ftitles">
          <button
            className={
              toggleState === 1
                ? "p-3.5 text-center text-orange-600 w-1/2 bg-white cursor-pointer border-b border-transparent box-content relative outline-none rounded-none rounded-tl-lg transition-all"
                : "p-3.5 text-center w-1/2 bg-sky-900/30 cursor-pointer border-transparent border-b border-b-sky-900/50 box-content relative outline-none rounded-none rounded-tl-lg text-black hover:scale-110 hover:border-none transition-all"
            }
            onClick={() => toggleTab(1)}
          >
            10%
          </button>
          <button
            className={
              toggleState === 2
                ? "p-3.5 text-center w-1/2 bg-white cursor-pointer border-b border-transparent box-content relative outline-none rounded-none text-orange-600 transition-all"
                : "p-3.5 text-center w-1/2 bg-sky-900/30 cursor-pointer border-b border-transparent border-b-sky-900/50 box-content relative outline-none rounded-none text-black hover:scale-110 hover:border-none transition-all"
            }
            onClick={() => toggleTab(2)}
          >
            15%
          </button>
          <button
            className={
              toggleState === 3
                ? "p-3.5 text-center w-1/2 bg-white cursor-pointer border-b border-transparent box-content relative outline-none rounded-none rounded-tr-lg text-orange-600 transition-all"
                : "p-3.5 text-center w-1/2 bg-sky-900/30 cursor-pointer border-b border border-transparent border-b-sky-900/50 box-content relative outline-none rounded-none rounded-tr-lg text-black hover:scale-110 hover:border-none transition-all"
            }
            onClick={() => toggleTab(3)}
          >
            25%
          </button>
        </div>

        <div className="content-tabs flex-grow font-ftext">
          <div
            className={
              toggleState === 1
                ? "content  active-content bg-white p-5 w-full h-full block rounded-b-lg"
                : "content bg-white p-5 w-full h-full hidden"
            }
          >
            <div className="font-bold">Conseguí un descuento del 10%</div>
            <hr className="w-full h-0.5 mb-1 border-sky-900" />
            <p className="w-full h-full">
              en tu próxima compra de un libro físico, trayendo dos más libros
              usados dependiendo del estado, cantidad de páginas, etc.
            </p>
          </div>

          <div
            className={
              toggleState === 2
                ? "content  active-content bg-white p-5 w-full h-full block rounded-b-lg"
                : "content bg-white p-5 w-full h-full hidden"
            }
          >
            <div className="font-bold">Conseguí un descuento del 15%</div>
            <hr className="w-full h-0.5 mb-1 border-sky-900" />
            <p className="w-full h-full">
              en nuestra suscripción estandar trayendo entre dos y cinco libros
              usados.
            </p>
          </div>

          <div
            className={
              toggleState === 3
                ? "content  active-content bg-white p-5 w-full h-full block rounded-b-lg"
                : "content bg-white p-5 w-full hfull hidden"
            }
          >
            <div className="font-bold">Conseguí un descuento del 25%</div>
            <hr className="w-full h-0.5 mb-1 border-sky-900" />
            <p className="w-full h-full">
              en nuestra suscripción premium trayendo más de cinco libros usados
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discount;
