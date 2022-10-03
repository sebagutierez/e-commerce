

const Banner = () => {
    return (
        <>
        <div className="w-full h-96 mt-16 bg-different bg-cover bg-fixed bg-left-top flex items-center">
            <div className="flex flex-col h-52 w-full sm:w-1/2 self-center">
                <div className="font-black font-ftitles text-xl text-sky-900 sm:text-3xl md:text-5xl self-center md:self-start md:ml-8">
                    Tienda de Libros
                </div>
                <p className="md:ml-8 mt-8 font-bold text-center m-4 text-sm sm:text-base md:text-lg sm:text-left">
                    La tienda de libros con la mejor variedad en el mundo. 
                </p>
                <button className="transform bg-orange-600 text-neutral-300 border-0 font-ftitle text-xl md:hover:font-bold md:text-base hover:text-black hover:font-black h-10 w-28 hover:h-12 hover:w-32 md:h-14 md:w-32 rounded-md self-center md:self-start m-4 md:ml-8 sm:justify-self-start hover:transition-all hover:scale-125 ">
                    Empezar
                </button>
            </div>
        </div>
        </>
    )
}

export default Banner