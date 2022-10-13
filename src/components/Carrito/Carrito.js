import CartItem from "./CartItem";
import { TYPES } from "../actions";
import { useConsumer } from "../cartContextProviders";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";

const Carrito = () => {
  const [state, dispatch] = useConsumer();
  const [loading, setLoading] = useState(false);


  const updateStateCarrito = async () => {
    setLoading(true)
    try {
      
      //const productsURL = "http://127.0.0.1:3000/products";
    const cartURL = "http://127.0.0.1:3000/cart";
    //const resProducts = await axios.get(productsURL);
    const resCart = await axios.get(cartURL, {
      headers: {
          'Content-Type': 'application/json;',
          "Access-Control-Allow-Origin": "*",
      }});
    //const newProduct = await resProducts.data;
    const newCartItem = await resCart.data;
    dispatch({ type: TYPES.READ_STATE_CART, payload: newCartItem });
    } catch (error) {
      console.log(error)
      
    }
    setLoading(false)
    
  };

  useEffect(() => {
    updateStateCarrito();
  }, []);

  const addToCart = async({data}) => {
    const {id,stock}=data

    try {
      const descontado = {
        ...data,
        stock: stock - 1,
      };
    await axios.put(`http://127.0.0.1:3000/products/${id}`, descontado);
       
    await dispatch({ type: TYPES.ADD_TO_CART, payload: data});
     
      
    } catch (error) {
      console.log("ERROR"+error)
      
    }
   
  };

  const deleteOne = async ({data}) => {
    const {id,stock}=data

    try {
      const descontado = {
        ...data,
        stock: stock + 1,
      };
    await axios.put(`http://127.0.0.1:3000/products/${id}`, descontado);
    await dispatch({ type: TYPES.DECREMENTA, payload: data });

     
      
    } catch (error) {
      console.log("ERROR"+error)
      
    }
   
  };

  const deleteFromCart = async({data}) => {
    const {id,stock,quantity}=data
           let isDelete=window.confirm("Seguro desea eliminarlo de su carrito?")
        if (isDelete){
          const descontado = {
            ...data,
            stock: stock + quantity,
          };
          await axios.put(`http://127.0.0.1:3000/products/${id}`, descontado);   

      await dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: data });
  }
  };

  const totalPrice = state.cart.reduce((count, curItem) => {
    return count + curItem.price * curItem.quantity;
  }, 0);

  return (
    <>
    { loading && (
      <Loader />
    )
  }
  {
    !loading && (
    <div className="flex flex-wrap justify-center mt-32">
      {state.cart.length <= 0 && (
        <p className="text-2xl font-ftitles">No hay ítems en tu carrito!</p>
      )}

      {state.cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            data={item}
            addToCart={addToCart}
            deleteOne={deleteOne}
            deleteFromCart={deleteFromCart}
          />
        );
      })}

      {state.cart.length > 0 && (
        <div className="flex justify-center md:justify-end items-center py-8 md:px-4 w-full h-12 p-4 m-1.5 rounded-lg overflow-hidden bg-white shadow-md cursor-pointer hover:shadow-lg">
          <h2 className="mb-4 text-3xl font-bold font-ftitles">
            Total ${totalPrice}
          </h2>
        </div>
      )}
    
    </div>
    )}
</>
    
  );
};

export default Carrito;
