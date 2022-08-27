import Cards from "./Cards";
import databooks from "./databooks";

const CardContainer = () => {
  return (
    <div className="flex flex-wrap justify-center mt-24">
  {databooks.map((e) => {
    let imglibro;
    if(e.stock < 10 ){
      imglibro="https://www.hostinet.com/formacion/wp-content/uploads/2017/01/agotado-sello.png";
    }else{
        imglibro=e.img;
      }
       return (
       <Cards title={e.title} img={imglibro} author={e.author} price={e.price}/>
     );})}
            
  </div>
  )
}

export default CardContainer