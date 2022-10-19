import { TYPES } from "../actions";
import Cards from "./Cards";
import { useConsumer } from "../cartContextProviders";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";

const CardContainer = () => {
  const [state, dispatch] = useConsumer();
  const [loading, setLoading] = useState(false);

  const updateStateProducts = async () => {
    setLoading(true)
    try {
      const productsURL = "http://127.0.0.1:3000/products";
    const cartURL = "http://127.0.0.1:3000/cart";
    const resProducts = await axios.get(productsURL,{
      headers: {
          'Content-Type': 'application/json;',
          "Access-Control-Allow-Origin": "*",
      }});
    const resCart = await axios.get(cartURL);
    const newProduct = await resProducts.data;
    const newCartItem = await resCart.data;
    dispatch({ type: TYPES.READ_STATE_PRODUCTS_CART, payload: [newProduct, newCartItem]});
      
    } catch (error) {
      console.log(error)
    }
    setLoading(false)

  };

  useEffect(() => {
      updateStateProducts();
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

  return (
    <>
        <h2 className="mx-4 mt-24 mb-8 text-4xl font-bold text-sky-900">Productos</h2>
        { loading && (
            <Loader />
          )
        }
        {
          !loading && (
        <div className="flex flex-wrap justify-center mt-8">

        {state.products.map((product) => {
          return (
            <Cards key={product.id} data={product} addToCart={addToCart} />
          );
        })}
      </div>
          )
        }
    </>
  );
};


export default CardContainer;
