import { useState } from "react";

const Credits = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="block bg-transparent border-none text-sky-900 font-ftext justify-self-center"
      >
        Créditos
      </button>
      {modal && (
        <div className="inset-0 w-[100vw] h-[100vh] z-50 fixed">
          <div
            onClick={toggleModal}
            className="inset-0 fixed h-[100vh] w-[100vw] bg-sky-900/30"
          ></div>
          <div className="absolute top-[40%] left-[50%] -translate-x-2/4 -translate-y-2/4 p-1 rounded max-w-[600px] min-w-[300px] bg-white">
            <div className="font-ftitles text-xl font-bold p-8">Créditos</div>
            <div className="pb-8 px-8">
              <p>
                Foto de
                <a
                  className="text-orange-600"
                  href="https://unsplash.com/@brandi1?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                >
                  Brandi Redd
                </a>
                en
                <a
                  className="text-orange-600"
                  href="https://unsplash.com/es/s/fotos/bussines?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                >
                  Unsplash
                </a>
              </p>
            </div>
            <div className="pb-16 px-8">
              <button
                className="absolute p-2 border-none bg-orange-600 text-white"
                onClick={toggleModal}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Credits;
