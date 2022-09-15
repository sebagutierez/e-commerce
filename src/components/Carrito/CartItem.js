//item carrito
const CartItem = ({ data, deleteFromCart, addToCart }) => {
  const { id, img, title, author, price, quantity,stock } = data;
  let buttontype;
  let actividad;
  if (stock > 10) {
    buttontype="opacity-100 cursor-pointer"
    actividad=false
    
    
  } else {
    buttontype="opacity-50 cursor-not-allowed"
    actividad=true
   
  }
  let subtotal = quantity * price;

  return (
    <div className="flex flex-row justify-around w-full h-48 py-2 px-2  m-1.5 rounded-lg overflow-hidden bg-white shadow-md cursor-pointer hover:shadow-lg">
      <div className="flex flex-row items-center justify-around w-full h-full p-2 border-2 rounded-lg">
        <div className="flex items-center justify-center flex-none h-full ">
          <img className="h-40 w-30" src={img} alt="libro"></img>
        </div>

        <div className="flex flex-col items-start justify-around h-full md:ml-4 md:items-center md:flex-row md:w-full md:justify-between">
          <div className="flex flex-col items-center justify-center md:w-60 md:items-start ">
            <h2 className="mb-1 text-xl font-bold font-ftitles">{title}</h2>
            <p className="font-ftext">{author}</p>
            <p className="font-ftext">Disponibles: {stock}</p>
          </div>
          <div className="flex-col items-center justify-center hidden md:flex md:flex-none">
            <h2 className="mb-1 text-xl font-bold font-ftitles">
              Precio Unitario
            </h2>
            <p className="font-ftext">${price}</p>
          </div>
          <div className="flex flex-col items-center justify-start md:mr-20">
            <h2 className="hidden mb-2 text-xl font-bold md:flex font-ftitles">
              Cantidad
            </h2>
            <div className="flex items-center">
              <button
                onClick={() => deleteFromCart(id)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-2.5 rounded-l"
              >
                -
              </button>
              <p className="p-1 text-xl text-center font-ftext">{quantity}</p>
              <button
                onClick={() => addToCart(id)}
                className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-2 rounded-r ${buttontype}`}  disabled={actividad}
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between h-full md:flex-row-reverse">
          <div className="md:ml-12">
            <button
              className="text-3xl hover:text-red-800 hover:scale-125"
              onClick={() => deleteFromCart(id, true)}
            >
              <ion-icon name="trash-outline"></ion-icon>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="mb-1 text-xl font-bold font-ftitles">Subtotal</h2>
            <p className="font-ftext">${subtotal}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
