import { TYPES } from "../actions";
import Cards from "./Cards";
import { useConsumer } from "../cartContextProviders";
import { useEffect } from "react";
import axios from "axios";

const CardContainer = () => {
  const [state, dispatch] = useConsumer();
 
 
  const productsURL = "http://localhost:3000/products";
  const cartURL = "http://localhost:3000/cart";
  const config = {
    headers:{
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials':'true',
      'crossorigin':'true',
      'Accept':'application/json, text/plain, /','Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE, OPTIONS',                
      'Access-Control-Allow-Headers': 'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
      'Content-Type': 'application/json',
      'Access-Control-Request-Method': 'GET,PUT,POST,DELETE, OPTIONS', 
      'Access-Control-Request-Headers': 'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
    
    }
  };

  //cuando se renderiza el cardgenerator, me trae los productos y el carrito
  const updateState = async () => {
    const resProducts = await axios.get(productsURL, config);
    const resCart = await axios.get(cartURL, config);
    const newProduct = await resProducts.data;
    const newCartItem = await resCart.data;
    dispatch({ type: TYPES.READ_STATE, payload: [newProduct, newCartItem] });
  };

  useEffect(() => {
    updateState();
  }, []);

  const addToCart = async ({ data }) => {
    const { id, stock} = data;
    let existe = false;
    let quantity = 1;

    const resCart = await axios.get(cartURL, config);

    //descuenta stock de productos
    const descontado = {
      ...data,
      stock: stock - 1,
    };
    await axios.put(`${productsURL}/${id}`, descontado, config);

    //controla si el carrito esta vacio y agrega un item con quantity 1 y resta 1 al stock (en el carrito, no del producto)
    if (resCart.data.length === 0) {
      const agregado = {
        ...data,
        quantity:quantity,
        stock: stock - 1,
      };
      await axios.post(cartURL, agregado, config);

      //si no esta vacio, controla si el item agregado ya existe en el carrito. Si existe, lo agrega modificando quantity y el stock (en el carrito)
    } else {
      resCart.data.map((carritoItem) => {
        if (id === carritoItem.id) {
          carritoItem.quantity += 1;
          carritoItem.stock -= 1;
          const agregado = {
            ...carritoItem,
            stock: carritoItem.stock,
            quantity: carritoItem.quantity,
          };
          axios.put(`${cartURL}/${carritoItem.id}`, agregado, config);

          existe = true;
        }
      });

      //Si no existe, pero en el carrito ya hay items, lo agrega.
      if (existe === false) {
        const agregado = {
          ...data,
          quantity:quantity,
          stock: stock - 1,
        };
        await axios.post(cartURL, agregado, config);
      }
    }
    //actualiza estado
    updateState();
  };

 
 
 
 
 
  /* const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };*/

  return (
    <>
        <h2 className="mx-4 mt-24 mb-8 text-4xl font-bold text-sky-900">Productos</h2>
        <div className="flex flex-wrap justify-center mt-8">

        {state.products.map((product) => {
          return (
            <Cards key={product.id} data={product} addToCart={addToCart} />
          );
        })}
      </div>
      
    </>
  );
};


export default CardContainer;
