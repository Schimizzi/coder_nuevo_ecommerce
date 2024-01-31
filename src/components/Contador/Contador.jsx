import { useState, useEffect } from 'react';

export const Contador = ({}) => {
    /* const [cantidad, setCantidad] = useState(inicial);

    useEffect(() => {
        console.log(cantidad)
    }, [cantidad]);

    const increment = () => {        
        if(cantidad < stock){
            setCantidad(prev => prev + 1);
        }
    }

    const decrement = () => {
        if(cantidad > 0){
            setCantidad(prev => prev - 1);
        }
    }
 */
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <button className='btn btn-primary' onClick={ () => {console.log('boton para quitar')}}> - </button>
                    <button className='btn btn-primary' onClick={ () => {console.log('boton para comprar')}} disabled={0}>Agregar {'XXX'} al carrito</button>
                    <button className='btn btn-primary' onClick={ () => {console.log('boton para agregar')}}> + </button>
                </div>
            </div>
        </div>
    );
}

