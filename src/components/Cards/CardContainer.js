import Cards from "./Cards";
import databooks from "./databooks";

const CardContainer = () => {
  return (
    <>
      <h2 className="mx-4 mt-24 mb-8 text-4xl font-bold text-sky-900">
        Productos
      </h2>
      <div className="flex flex-wrap justify-center">
        {databooks.map((e) => {
          let imglibro;
          if (e.stock < 10) {
            imglibro =
              "https://www.hostinet.com/formacion/wp-content/uploads/2017/01/agotado-sello.png";
          } else {
            imglibro = e.img;
          }
          return (
            <Cards
              id={e.id}
              title={e.title}
              img={imglibro}
              author={e.author}
              price={e.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default CardContainer;
