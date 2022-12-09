# E-COMMERCE  

Tienda de Libros es un e-commerce que se dedica a la comercialización de productos y servicios relacionados con libros.

## **Dependencies**  

- Axios  
- gh-pages  
- react  
- react-dom  
- react-icons  
- react-router-dom  
- react-scripts  
- react-scroll  
- web-vitals  

## **DevDependencies**  

- Autoprefixer  
- Postcss  
- Tailwindcss  

## **Commands.**  

 `npm install` antes de iniciar el proyecto.  
 
 `json-server --watch ./src/db/db.json` para apuntar a la base de datos.  
 
 `npm start` para iniciar el proyecto.  
 
## **Functionality.**  

La página web cuenta con dos rutas: home y carrito de compras. En home se pueden encontrar componentes como un carrusel que contiene best sellers, un acordeón que despliega respuestas a las preguntas frecuentes, pestañas para informarse de distintos descuentos, entre otros.  
Al seleccionar el botón de compra de los productos se despliega un modal para confirmar o cancelar la acción. En caso de confirmar la compra se añadirá el producto al carrito de compras y disminuirá el stock. En el carrito de compras se podrá aumentar o disminuír las unidades de los productos y también eliminarlos. Cuando el stock llega a 10 unidades no se permite seguir comprando ese mismo articulo y se muestra una imagen que indica que se encuentra agotado.  
