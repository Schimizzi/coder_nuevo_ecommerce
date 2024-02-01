import { useState} from 'react'

export const Contador = ({}) => {
    const [cantidad, setCantidad] = useState(0)

    const increment = () => {        
        
        setCantidad(mas => mas + 1)
        
    }

    const decrement = () => {
        if(cantidad > 0){
            setCantidad(menos => menos - 1)
        }
    }

    return (
        <div className="container text-center">
            <div className="mb-4 row">
                <div className="col">
                    <button className='btn btn-primary' onClick={decrement}> - </button>
                    <button className='btn btn-primary' onClick={ () => {console.log('boton para comprar')}} disabled={0}>Agregar {cantidad} al carrito</button>
                    <button className='btn btn-primary' onClick={increment}> + </button>
                </div>
            </div>
        </div>
    )
}

