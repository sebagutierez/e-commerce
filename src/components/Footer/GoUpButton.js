import { IoIosArrowUp } from 'react-icons/io'

const GoUpButton = () => {
    const goUp = () => {
        window.scrollTo({
            top: 0,
        });
    };
    return (
        <div>
            <button className="w-8 h-8 border-0 hover:clear-none self-end sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white text-sky-900 sm:hover:bg-orange-600 sm:hover:text-sky-900 text-3xl font-extrabold font-ftext flex place-content-center place-items-center" onClick={goUp}>
                <div>
                    <IoIosArrowUp />
                </div>
            </button>
        </div>
    )
}

export default GoUpButton