import CardsButton from "./CardsButton";

const Cards = ({img,title,author,price}) => { //con destructuring podria pasarle {(img,title,text)} y abajo invocar sin usar props.
    return (
            <div className="w-72 h-auto p-4 m-1.5 rounded-lg overflow-hidden bg-white transition-all duration-500 shadow-md cursor-pointer hover:shadow-lg hover:scale-110 hover:transtion-all ease-in-out">
                <div className="flex flex-col items-center justify-around w-full h-full">
                    <img  className="w-2/5 m-4 h-6/12" src={img} alt="libro"></img>
                    <h2 className="text-xl font-bold text-center font-ftitles">{title}</h2>
                    <p className="text-center font-ftext">Autor: {author}</p>
                    <p className="font-bold text-center font-ftext">${price}</p>
                    <CardsButton/>
                </div>
            </div>
    );
    };
    export default Cards;