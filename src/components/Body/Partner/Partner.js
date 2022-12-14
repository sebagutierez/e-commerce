import connected from "./connected.png";

const Partner = () => {
  return (
    <>
      <div className="mb-20 mt-auto sm:mt-32">
        <div className=" text-sky-900 text-left ml-14 text-3xl font-bold">Partner</div>
        <div className="flex flex-col sm:flex-row justify-items-center justify-center p-5">
          <div className="font-ftext sm:w-1/2 md:w-3/5 flex sm:items-start md:items-center md:p-10 text-justify font-medium">
            <div className="sm:p-10">
              <div className="text-lg text-orange-600 text-center text-bold font-ftitles mb-5">
                ¿Te gustaría tener un compañero o grupo para aprovechar al
                máximo tu lectura?
              </div>
              <p className="text-center">
                Dejanos tu petición en el foro de nuestra comunidad y cuando
                otro usuario tenga tu mismo interes nuestro sistema los pondrá
                en contacto para que puedan compartir su aprendizaje.
              </p>
            </div>
          </div>
          <div className="max-h-96 sm:w-1/2 md:w-2/5 p-5">
            <img
              className="max-h-96 justify-self-center"
              src={connected}
              alt="/"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
