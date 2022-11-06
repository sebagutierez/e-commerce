import StartButton from "./StartButton"


const Banner = () => {
    return (
        <>
        <div className="w-full h-[26rem] mt-16 bg-different bg-cover bg-fixed bg-left-top flex items-center">
            <div className="flex flex-col h-52 w-full md:w-1/2 self-center">
                <div className="text-5xl font-fbanner font-semibold text-black text-center self-center">
                    TIENDA DE LIBROS
                </div>
                <p className="mt-8 text-center m-4 text-2xl font-fbanner">
                    La tienda de libros con la mejor variedad en el mundo. 
                </p>
                    <div className="self-center">
                        <StartButton />
                </div>
            </div>
        </div>
        </>
    )
}

export default Banner