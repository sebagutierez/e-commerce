import { useContext, useReducer, createContext } from "react";
import { TYPES } from "./actions";

const StateContext = createContext();
const DispatchContext = createContext();

function reducer(state, action) {
  switch (action.type) {

    case TYPES.READ_STATE : {
      return {
      ...state,
      products: action.payload[0],
      cart: action.payload[1]
      }
      }

   /* case TYPES.ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );

      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      let DescuentaStock = (newItem.stock = newItem.stock - 1);

      return itemInCart
        ? {
            ...state,
            DescuentaStock,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                    stock: item.stock - 1,
                  }
                : item
            ),
          }
        : {
            ...state,
            DescuentaStock,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_ONE_PRODUCT: {
      let producto = state.products.find(
        (producto) => producto.id === action.payload
      );
      let itemToDelete = state.cart.find((item) => item.id === action.payload);
      let RecuperaStock = (producto.stock = producto.stock + 1);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            RecuperaStock,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                    stock: item.stock + 1,
                  }
                : item
            ),
          }
        : {
            ...state,
            RecuperaStock,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case TYPES.REMOVE_ALL_PRODUCTS: {
      let producto = state.products.find(
        (producto) => producto.id === action.payload
      );
      let itemStock = state.cart.find((item) => item.id === action.payload);

      let RecuperaStock = (producto.stock =
        producto.stock + itemStock.quantity);

      return {
        ...state,
        RecuperaStock,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }*/

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
