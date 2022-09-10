import { TYPES } from "../actions";
import Cards from "./Cards";
import { useConsumer } from "../cartContextProviders";

const CardContainer = () => {
  const [state, dispatch] = useConsumer();
  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

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
