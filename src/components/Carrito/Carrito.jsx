import classes from './Carrito.module.css';
import florCarrito from './imgCarrito/cartverde.png'
import { useEffect } from 'react';

export const Carrito = ({ src }) => {

    useEffect(() => {
        document.title = 'Carrito' // cambia el nombre de la pestaña
    }, [])


    return (
        <div>
            <img className={classes.carritocss} src={florCarrito} alt='florCarrito' />
        </div>
    )
}
