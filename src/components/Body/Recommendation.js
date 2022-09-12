

import { IoPeopleCircleOutline } from 'react-icons/io5'

const Recommendation = () => {
    return (
        <>
            <div className="flex mx-8 flex-col h-72 rounded-md bg-neutral-300 place-content-center">
                <div className="text-sky-900 text-5xl font-black place-self-center">
                    <IoPeopleCircleOutline />
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-lg sm:text-3xl text-sky-900 font-ftitles">
                        ¿No sabés por donde empezar?
                    </div>
                    <div className="text-base sm:text-lg font-ftext m-4">
                        Mira las opiniones de nuestros clientes
                    </div>
                    <button className="transition h-8 w-16 m-8 rounded-md bg-orange-600 font-extrabold text-neutral-300 hover:text-neutral-300 shadow-lg shadow-neutral-900/50 hover:transition-all hover:bg-gradient-to-t hover:from-orange-600 border-0 hover:border-0 hover:to-sky-900 hover:scale-110">
                        Aquí
                    </button>
                </div>
            </div>
        </>
    )
}

export default Recommendation