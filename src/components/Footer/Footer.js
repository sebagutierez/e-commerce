import GoUpButton from "./GoUpButton";
import {
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoBookSharp,
} from "react-icons/io5";
import Credits from "./Credits";

const Footer = () => {
  let info = [
    {
      dato: "+54 9899-3254",
      ícono: <IoCallOutline />,
      key: 1,
    },
    {
      dato: "calle 9 897, CABA, Argentina",
      ícono: <IoLocationOutline />,
      key: 3,
    },
    {
      dato: "contactanos@tiendadelibros.com",
      ícono: <IoMailOutline />,
      key: 2,
    },
  ];
  let redes = [
    {
      ícono: <IoLogoTwitter />,
      link: "https://twitter.com/",
      list: 1,
    },
    {
      ícono: <IoLogoInstagram />,
      link: "https://www.instagram.com/",
      list: 2,
    },
    {
      ícono: <IoLogoFacebook />,
      link: "https://es-la.facebook.com/",
      list: 3,
    },
  ];
  return (
    <>
    <div className="grid items-center w-full h-auto grid-cols-1 grid-row-3 py-8  text-sky-900 bg-white justify-items-center sm:grid-cols-3 sm:grid-rows-1 border-t border-t-sky-900 mt-20">
      <div className="flex flex-col items-center mt-8 text-lg font-bold text-black sm:place-self-start sm:ml-4 sm:font-black font-ftext row-start-3 row-end-4 sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-2 sm:pl-2 pr-2 sm:pt-4 sm:justify-self-center sm:text-sm md:text-lg">
        <div className="flex flex-row items-center cursor-pointer hover:scale-110">
          <span className="pt-2 mr-1 text-orange-600">
            <IoBookSharp />
          </span>
          TIENDA DE LIBROS
        </div>
        <div className="mt-8 sm:col-start-3 sm:col-end-4 sm:pt-32">
          <GoUpButton />
        </div>
      </div>
      <div className="row-start-1 row-end-2 sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2 self-start">
        <div className="py-2 m-4 text-lg font-medium tracking-wider sm:text-left border-2 border-transparent border-b-orange-600 text-center">
          Contactanos
        </div>
        <ul>
          {info.map((e) => (
            <li
              key={e.key}
              className="grid grid-cols-1 py-2 m-4 italic font-normal text-left text-normal sm:hover:text-orange-600 justify-items-center sm:justify-items-start"
            >
              <span className="text-lg m-2">{e.ícono}</span>
              {e.dato}
            </li>
          ))}
        </ul>
      </div>
      <div className="self-start row-start-2 row-end-3 sm:col-start-3 sm:col-end-4 sm:row-start-1 sm:row-end-2">
        <div>
          <div className="py-2 m-4 text-lg text-center sm:text-left font-medium tracking-wider border-2 border-transparent border-b-orange-600">
            Seguinos en
          </div>
          <ul className="grid justify-center grid-cols-3 justify-items-center">
            {redes.map((e) => (
              <li
                key={e.list}
                className="py-4 font-ftext text-xl text-left italic sm:hover:scale-125"
              >
                <a href={e.link} className="sm:hover:text-orange-600 ">
                  {e.ícono}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-12">
          <div className="py-2 m-4 text-lg text-center sm:text-left font-medium tracking-wider border-2 border-transparent border-b-orange-600">
            Acerca de
          </div>
          <ul className="grid object-contain grid-cols-1 grid-rows-2 justify-left">
            <li className="text-base sm:text-sm md:text-base italic underline sm:hover:text-orange-600 p-0.5">
              <a href="/" className="p-3 m-4">
                Términos y condiciones
              </a>
            </li>
            <li className="text-base sm:text-sm md:text-base italic underline sm:hover:text-orange-600 p-0.5">
              <a href="/" className="p-3 m-4">
                Política de privacidad
              </a>
              </li>
            </ul>
          </div>
          <div className="ml-16 sm:ml-8 text-base sm:text-sm md:text-base italic underline p-0.5 hover:decoration-orange-600">
            <Credits />
          </div>
        </div>
        
        </div>
    </>
  );
};

export default Footer;
