

const Banner = () => {
    return (
        <>
        <div className="w-full h-[26rem] mt-16 bg-different bg-cover bg-fixed bg-left-top flex items-center">
            <div className="flex flex-col h-52 w-full sm:w-1/2 self-center">
                <div className="text-xl text-black sm:text-3xl self-center md:self-start md:ml-8">
                    Tienda de Libros
                </div>
                <p className="md:ml-8 mt-8 font-ftext text-center m-4 text-sm sm:text-base md:text-lg sm:text-left">
                    La tienda de libros con la mejor variedad en el mundo. 
                </p>
                <button className="transform bg-orange-600 text-white border-0 font-ftitle md:hover:font-bold md:text-base hover:text-black hover:font-black h-10 w-28 hover:h-12 hover:w-32 md:w-32 rounded-md self-center md:self-start m-4 md:ml-8 sm:justify-self-start hover:transition-all hover:scale-125 ">
                    Empezar
                </button>
            </div>
        </div>
        </>
    )
}

export default Banner