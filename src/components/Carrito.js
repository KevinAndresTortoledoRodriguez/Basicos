import Producto from "./Producto";
import './carrito.css';
const Carrito = ({carrito, addProducto}) => {
    return(
        <div className="carrito">
            <h2>Tu carrito de compras</h2>
            {carrito.length === 0 ? 
            'No hay elementos en tu carrito de compras'  
            : carrito.map((producto) => (
                <Producto
                    key={producto.id}
                    producto={producto}
                    carrito={carrito}
                    addProducto={addProducto}
                />
            ))}
        </div>
    )
}
 
export default Carrito;