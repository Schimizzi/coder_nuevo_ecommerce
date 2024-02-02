import classes from './Carrito.module.css';
import florCarrito from './imgCarrito/cartverde.png'
import { useContext} from 'react';
import { CarritoContext } from '../../App';



export const Carrito = () => {

    const value = useContext(CarritoContext)


    return (
        <div>
            {value.carrito}
            <img className={classes.carritocss} src={florCarrito} alt='florCarrito' />
        </div>
    )
}
