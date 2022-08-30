import React from "react";
import {
  FaWifi,
  FaPhone,
  FaHandsHelping,
  FaGlobeAmericas,
} from "react-icons/fa";
// flex flex-col justify-center w-full h-screen mt-8 mb-40
const Services = () => {
  return (
    <div name="services" className="container mx-auto my-8">
      <div className="flex flex-wrap mx-4">
        <h2 className="m-4 text-4xl font-bold">Nuestros Servicios</h2>
        <h3 className="m-4 text-xl font-bold text-sky-900">
          El cliente primero
        </h3>

        {/* 1 */}
        <div className="grid gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex">
            <div>
              <FaWifi className="mr-4 text-sky-900 w-7" />
            </div>
            <div>
              <h3 className="text-lg font-bold">
                Mantente Siempre Actualizado
              </h3>
              <p className="pt-4 pb-4 text-lg">
                Recibe las nuevas actualizaciones de los temas de tu interes al
                instante de su publicación.
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="flex">
            <div>
              <FaGlobeAmericas className="mr-4 text-sky-900 w-7" />
            </div>
            <div>
              <h3 className="text-lg font-bold">
                Acceso a Todas las Librerías del Mundo
              </h3>
              <p className="pt-2 pb-4 text-lg">
                Recibe recomendaciones de una de las mayores comunidades de
                lectores a nivel mundial
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className="flex">
            <div>
              <FaHandsHelping className="mr-4 text-sky-900 w-7" />
            </div>
            <div>
              <h3 className="text-lg font-bold">La Mayor comunidad</h3>
              <p className="pt-2 pb-4 text-lg">
                Conectate con nuestra comunidad para hacer todas las consultas
                que tengas y recibir las mejores recomendaciones.
              </p>
            </div>
          </div>

          {/* 4 */}
          <div className="flex">
            <div>
              <FaPhone className="mr-4 text-sky-900 w-7" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Servicio al Cliente 24/7</h3>
              <p className="pt-2 pb-4 text-lg">
                Soporte las 24 hs todos los días de la semana.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
