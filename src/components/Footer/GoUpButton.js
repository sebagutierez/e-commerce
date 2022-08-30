
const GoUpButton = () => {
    const goUp = () => {
        window.scrollTo({
            top: 0,
        });
    };
    return (
        <div>
            <button className="w-20 h-20 selfe-center sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white text-sky-900 sm:hover:bg-orange-600 text-lg font-extrabold font-ftext" onClick={goUp}>
                SUBIR
            </button>
        </div>
    )
}

export default GoUpButton