import React from "react";

const Pricing = () => {
  return (
    <div name="pricing" className="w-full my-24 text-white">
      {/* background */}
      <div className="w-full h-[800px] bg-sky-900 absolute mix-blend-overlay"></div>
      {/* container */}
      <div className="max-w-[1240px] mx-auto py-12">
        <div className="py-8 mx-4 text-white">
          <h2 className="m-4 text-4xl font-bold ">Planes</h2>
          <h3 className="m-4 text-2xl font-bold">Elige el plan para tí</h3>
        </div>
        {/* container */}
        <div className="grid md:grid-cols-2 justify-evenly">
          {/* background standard card */}
          <div className="relative p-8 m-4 bg-white shadow-2xl text-slate-900 rounded-xl sm:w-9/12 place-self-center">
            {/* standard title */}
            <span className="px-3 py-1 text-sm text-white bg-orange-600 rounded-2xl">
              STANDARD
            </span>
            <div>
              <p className="flex py-4 text-6xl md:text-5xl font-bold">
                $49
                <span className="flex flex-col justify-end text-xl text-sky-900">
                  /mo
                </span>
              </p>
            </div>
            <p className="py-8 md:py-6 text-2xl font-bold text-sky-900">
              El plan inicial
            </p>
            <div className="text-2xl md:text-xl ">
              <ul>
                <li>Acceso a toda la biblioteca online</li>
                <li>Un envío a domicilio semestral</li>
                <li>Acceso a toda la plataforma online</li>
                <li>Acceso a la biblioteca en dos idiomas</li>
              </ul>
              <button className="w-full py-4 my-4">Comienza Ahora</button>
            </div>
          </div>

          {/* background premium card */}
          <div className="relative p-8 m-4 bg-white shadow-2xl text-slate-900 rounded-xl sm:w-9/12 place-self-center">
            {/* standard title */}
            <span className="px-3 py-1 text-sm text-white bg-orange-600 rounded-2xl">
              PREMIUM
            </span>
            <div>
              <p className="flex py-4  text-6xl md:text-5xl font-bold">
                $99
                <span className="flex flex-col justify-end text-xl text-sky-900">
                  /mo
                </span>
              </p>
            </div>
            <p className="py-8 md:py-6 text-2xl font-bold text-sky-900">
              Un plan para una lectura diaria
            </p>
            <div className="text-2xl md:text-xl ">
              <ul>
                <li>Acceso a toda la biblioteca online</li>
                <li>Un envío gratis por mes</li>
                <li>Acceso a toda la plataforma online</li>
                <li>Acceso a la biblioteca multilenguaje</li>
              </ul>
              <button className="w-full py-4 my-4">Comienza Ahora</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
