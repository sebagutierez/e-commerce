import GoUpButton from "./GoUpButton";

const Footer = () => {
  return (
    <div className="absolute grid items-center w-full h-auto grid-cols-1 py-8 mt-20 text-white bg-sky-900 justify-items-center sm:grid-cols-8 sm:grid-rows-1 md:grid-cols-4 md:grid-rows-1">
      <div className="flex items-center mt-8 text-xl font-bold text-black duration-500 sm:place-self-start sm:ml-4 sm:font-black md:hover:text-neutral-300 font-ftitles sm:col-start-1 sm:col-end-3 sm:row-start-1 sm:row-end-2 sm:text-lg md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 md:place-self-start md:pl-4 md:justify-self-center md:text-xl">
        <span className="pt-2 mr-1 text-orange-600">
          <ion-icon name="book"></ion-icon>
        </span>
        TIENDA DE LIBROS
      </div>
      <div className="sm:col-start-3 sm:col-end-6 sm:row-start-1 sm:row-end-2 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 selfe-top">
        <div className="py-2 m-4 text-lg font-medium tracking-wider text-left border-2 border-transparent border-b-orange-600">
          Contactanos
        </div>
        <ul>
          <li className="flex flex-col py-2 m-4 italic font-normal text-left text-normal sm:hover:text-orange-600">
            <span className="mr-2 text-lg justify-self-center">
              <ion-icon name="call-outline"></ion-icon>
            </span>
            +54 9899-3254
          </li>
          <li className="flex flex-col py-2 m-4 italic font-normal text-left text-normal sm:hover:text-orange-600">
            <span className="mr-2 text-lg justify-self-center">
              <ion-icon name="mail-outline"></ion-icon>
            </span>
            contactanos@tiendadelibros.com
          </li>
          <li className="flex flex-col py-2 m-4 italic font-normal text-left text-normal sm:hover:text-orange-600">
            <span className="mr-2 text-lg justify-self-center">
              <ion-icon name="home-outline"></ion-icon>
            </span>
            calle 9 897, CABA, Argentina
          </li>
        </ul>
      </div>
      <div className="self-start sm:col-start-6 sm:col-end-8 sm:row-start-1 sm:row-end-2 md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-2">
        <div>
          <div className="py-2 m-4 text-lg font-medium tracking-wider text-white border-2 border-transparent border-b-orange-600">
            Seguinos en
          </div>
          <ul className="grid justify-center grid-cols-3 justify-items-center">
            <li className="py-4 text-xl italic text-left">
              <a
                href="https://es-la.facebook.com/"
                className="sm:hover:text-orange-600"
              >
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li className="py-4 text-xl italic text-left">
              <a
                href="https://www.instagram.com/"
                className="sm:hover:text-orange-600"
              >
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
            <li className="py-4 text-xl italic text-left">
              <a
                href="https://twitter.com/"
                className="sm:hover:text-orange-600"
              >
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-12">
          <p className="py-2 m-4 text-lg font-medium tracking-wider text-white border-2 border-transparent border-b-orange-600">
            Acerca de
          </p>
          <ul className="grid object-contain grid-cols-1 grid-rows-2 justify-left">
            <li className="text-sm italic underline sm:hover:text-orange-600">
              <button className="p-3 m-4">Términos y condiciones</button>
            </li>
            <li className="text-sm italic underline sm:hover:text-orange-600">
              <button className="p-3 m-4">Política de privacidad</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 sm:col-start-8 sm:col-end-9 sm:row-start-1 sm:row-end-2 md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-2 selfe-center">
        <GoUpButton />
      </div>
    </div>
  );
};

export default Footer;
