import GoUpButton from "./GoUpButton"

const Footer = () => {
    return (
        <div className="absolute w-full h-auto bg-sky-900 text-white grid grid-cols-1  justify-items-center items-center py-8 mt-20 sm:grid-cols-8 sm:grid-rows-1  md:grid-cols-4 md:grid-rows-1">
            <div className='mt-8 flex items-center text-xl font-bold sm:place-self-start sm:ml-4 sm:font-black text-black duration-500 md:hover:text-neutral-300 font-ftitles sm:col-start-1 sm:col-end-3 sm:row-start-1 sm:row-end-2 sm:text-lg md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 md:place-self-start md:pl-4 md:justify-self-center md:text-xl'>
                <span className='pt-2 mr-1 text-orange-600'>
                <ion-icon name='book'></ion-icon>
                </span>
                TIENDA DE LIBROS
        </div>
        <div className="sm:col-start-3 sm:col-end-6 sm:row-start-1 sm:row-end-2 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 selfe-top">
            <div className='py-2 m-4 border-2 border-transparent border-b-orange-600 font-ftext font-medium text-lg text-left tracking-wider'>Contactanos</div>
            <ul>
                <li className='py-2 m-4 font-ftext font-normal text-normal text-left italic sm:hover:text-orange-600 flex flex-col'>
                    <span className="text-lg mr-2 justify-self-center">
                        <ion-icon name="call-outline"></ion-icon>
                    </span>
                    00 0000-0000</li>
                <li className='py-2 m-4 font-ftext font-normal text-normal text-left italic sm:hover:text-orange-600 flex flex-col'>
                    <span className="text-lg mr-2 justify-self-center">
                        <ion-icon name="mail-outline"></ion-icon>
                    </span>
                    ejemplo@ejemplo.com</li>
                <li className='py-2 m-4 font-ftext font-normal text-normal text-left italic sm:hover:text-orange-600 flex flex-col'>
                    <span className="text-lg mr-2 justify-self-center">
                        <ion-icon name="home-outline"></ion-icon>
                    </span>
                    calle, num. Localidad</li>
            </ul>
        </div>
        <div className="self-start sm:col-start-6 sm:col-end-8 sm:row-start-1 sm:row-end-2 md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-2">
            <div>
                <div className='py-2 m-4 border-2 border-transparent border-b-orange-600 font-ftext font-medium text-lg tracking-wider text-white'>Seguinos</div>
                <ul className='grid grid-cols-3 justify-items-center justify-center'>
                    <li className='py-4 font-ftext text-xl text-left italic'><a href='https://es-la.facebook.com/' className='sm:hover:text-orange-600'><ion-icon name="logo-facebook"></ion-icon></a></li>
                    <li className='py-4 font-ftext text-xl text-left italic'><a href='https://www.instagram.com/' className='sm:hover:text-orange-600'><ion-icon name="logo-instagram"></ion-icon></a></li>
                    <li className='py-4 font-ftext text-xl text-left italic'><a href='https://twitter.com/' className='sm:hover:text-orange-600'><ion-icon name="logo-twitter"></ion-icon></a></li>
                </ul>
            </div>
            <div className="mt-12">
                <p className='py-2 m-4 border-2 border-transparent border-b-orange-600 font-ftext  font-medium text-lg tracking-wider text-white'>Acerca de</p>
                <ul className='justify-left object-contain grid grid-cols-1 grid-rows-2'>
                    <li className='font-ftext italic underline text-sm sm:hover:text-orange-600'><button>Nuestros términos y condiciones</button></li>
                    <li className='font-ftext italic underline text-sm sm:hover:text-orange-600'><button>Nuestra política de privacidad</button></li>
                </ul>
            </div>
        </div>
        <div className='mt-8 sm:col-start-8 sm:col-end-9 sm:row-start-1 sm:row-end-2 md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-2 selfe-center'>
            <GoUpButton />
        </div>
        </div>
    )
}

export default Footer