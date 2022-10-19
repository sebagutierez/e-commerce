import { useState } from "react";

const Discount = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      {/* Container */}
      <div className="flex flex-col max-w-sm h-80 bg-neutral-300 border-2 border-solid border-sky-900 break-all m-2 shadow-xl shadow-neutral-900/50">
        {/* block tabs */}
        <div className="flex font-ftitles">
          {data.map((e, i) => (
            <button
              key={e.key}
              className={
                toggleState === i
                  ? "p-3.5 text-center w-1/2 bg-white cursor-pointer border-b border-transparent box-content rounded-none relative outline-none text-orange-600 transition-all"
                  : "p-3.5 text-center w-1/2 bg-neutral-300 cursor-pointer border-b border border-transparent border-b-sky-900/50 box-content relative outline-none rounded-none text-black hover:scale-110 hover:border-none transition-all"
              }
              onClick={() => toggleTab(i)}
            >
              {e.descuento}
            </button>
          ))}
        </div>

        <div className="content-tabs flex-grow font-ftext">
          {data.map((e, i) => (
            <div
              key={e.key}
              className={
                toggleState === i
                  ? "content  active-content bg-white p-5 w-full h-full block rounded-b-lg"
                  : "content bg-white p-5 w-full h-full hidden"
              }
            >
              <div className="font-bold">{e.titulo}</div>
              <hr className="w-full h-0.5 mb-1 border-sky-900" />
              <p className="w-full h-full break-normal">{e.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

let data = [
  {
    key: 1,
    titulo: "Conseguí un descuento del 10%",
    texto:
      "en tu próxima compra de un libro físico, trayendo dos más libros usados dependiendo del estado, cantidad de páginas, etc",
    descuento: "10%",
  },
  {
    key: 2,
    titulo: "Conseguí un descuento del 15%",
    texto: "en nuestra suscripción estandar trayendo entre dos y cinco libros",
    descuento: "15%",
  },
  {
    key: 3,
    titulo: "Conseguí un descuento del 25%",
    texto: "en nuestra suscripción premium trayendo más de cinco libros usados",
    descuento: "25%",
  },
];

export default Discount;
