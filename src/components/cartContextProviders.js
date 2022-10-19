import { useContext, useReducer, createContext } from "react";
import { TYPES } from "./actions";
import axios from "axios";

const StateContext = createContext();
const DispatchContext = createContext();

const agregaProd = async (id, stock, img, title,author,price) => {
  try {
    await axios.post("http://127.0.0.1:3000/cart",  {
    id: id,
    stock: stock,
    img: img,
    title: title,
    author:author,
    price:price,
    quantity: 1,
  });
    
  } catch (error) {
    console.log(error)
  }
  
};

const modificaCant = async (id, stock, img, title,author,price, quantity) => {
  try {
    await axios.put(`http://127.0.0.1:3000/cart/${id}`, {
      id: id,
      stock: stock,
      img: img,
      title: title,
      author:author,
      price:price,
      quantity: quantity,
    });
    
  } catch (error) {
    console.log(error)
    
  }
 
};

const eliminaProd = async (id) => {
  try {    
    await axios.delete(`http://127.0.0.1:3000/cart/${id}`);
  } catch (error) {
    console.log(error)
    
  }
  
};


function reducer(state, action) {
  switch (action.type) {
   
    case TYPES.READ_STATE_PRODUCTS_CART: {
      return {
      ...state,
      products: action.payload[0],
      cart: action.payload[1]
      }
      }

      case TYPES.READ_STATE_CART : {
        return {
        ...state,
        cart: action.payload
        }
        }
  

    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload.id
      );

      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      newItem.stock = newItem.stock - 1;

        return itemInCart
        ?  {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload.id
                ?(modificaCant(
                  item.id,
                  item.stock-1,
                  item.img,
                  item.title,
                  item.author,
                  item.price,
                  item.quantity+1),
                   {
                    ...item,
                    quantity: item.quantity + 1,
                    stock: item.stock - 1,
                  })
                : item
            ),
        }
        : (agregaProd(
          action.payload.id,
          action.payload.stock,
          action.payload.img,
          action.payload.title,
          action.payload.author,
          action.payload.price,
          action.payload.quantity,
        ),
        {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          });

          
    }

    case TYPES.DECREMENTA: {

      let producto = state.products.find(
       (producto) => producto.id === action.payload.id
      );
      let itemToDelete = state.cart.find((item) => item.id === action.payload.id);
     
      //producto.stock = producto.stock + 1;

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload.id
                ?(modificaCant(
                  item.id,
                  item.stock+1,
                  item.img,
                  item.title,
                  item.author,
                  item.price,
                  item.quantity-1), {
                    ...item,
                    quantity: item.quantity - 1,
                    stock: item.stock + 1,
                  })
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
   
    }
    case TYPES.REMOVE_ALL_PRODUCTS: {
     // let producto = state.products.find(
      //  (producto) => producto.id === action.payload
     // );
     // let itemStock = state.cart.find((item) => item.id === action.payload);

     // let RecuperaStock = (producto.stock =
     //   producto.stock + itemStock.quantity);

      return (
        eliminaProd(action.payload.id),
       {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      }
       );
    }

    default:
      return state;
  }
}

export const Proveedor = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    products: [],
    cart: [],
  });

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

function useConsumer() {
  return [useContext(StateContext), useContext(DispatchContext)].map((ctx) => {
    if (ctx === undefined) throw new Error(`Provider not found`);
    return ctx;
  });
}

/*
 * Exportamos
 */

export { useConsumer };
