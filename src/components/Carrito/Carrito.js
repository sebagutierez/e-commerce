import CartItem from "./CartItem";
import { TYPES } from "../actions";
import { useConsumer } from "../cartContextProviders";
import { useEffect } from "react";
import axios from "axios";


const Carrito = () => {
  const [state, dispatch] = useConsumer();

  
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
  }
  
  const productsURL = "http://localhost:3000/products";
        const cartURL = "http://localhost:3000/cart";
        const updateState = async ()=>{
          const resProducts = await axios.get(productsURL,config);
          const resCart = await axios.get(cartURL,config);
          const newProduct = await resProducts.data
          const newCartItem = await resCart.data
          dispatch ({type: TYPES.READ_STATE , payload: [newProduct , newCartItem]})
          }

  useEffect (()=>{    
  updateState()
  },[])


 /*const addToCart = (id,title) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };*/

  const IncDec=async(id,stock, img, title, author, price, quantity,h)=>{
    if (h==="dec"){
      if (quantity===1){
        quantity=1;
      }else{
        quantity-=1;
        stock+=1;
      }
    }else{
      quantity+=1;
      stock-=1;
    }
    const agregado = {
      id: id,
      stock: stock,
      img: img,
      title: title,
      author: author,
      price: price,
      quantity:quantity,
    };
    await axios.put(`${productsURL}/${id}`, agregado, config);

    await axios.put(`${cartURL}/${id}`, agregado,config);
    
    updateState();
  }
 
      const deleteFromCart = async ({data}) => {
        const { id, stock,quantity} = data;
        let isDelete=window.confirm("Seguro desea eliminarlo de su carrito?")
        if (isDelete){
          //primero resstablece el stock de ese prodcuto
          const producto = {
            ...data,
            stock: stock + quantity,
          };
          //lo elimina del carrito
          await axios.delete(`${cartURL}/${id}`,config)
          await axios.put(`${productsURL}/${id}`, producto, config);

          updateState();
        }
      }


 /* const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const deleteFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: id });
    }
  };*/

  const totalPrice = state.cart.reduce((count, curItem) => {
    return count + curItem.price * curItem.quantity;
  }, 0);

  return (
    <div className="flex flex-wrap justify-center mt-32">
      {state.cart.length <= 0 && (
        <p className="text-2xl font-ftitles">No hay ítems en tu carrito!</p>
      )}

      {state.cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            data={item}
            IncDec={IncDec}
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
  );
};

export default Carrito;
