import { useState } from 'react'

export const Contador = ({ inicial = 0, onAdd, stock }) => {
    const [cantidad, setCantidad] = useState(inicial)

    const increment = () => {
        if (cantidad < stock)
            setCantidad(mas => mas + 1)

    }

    const decrement = () => {
        if (cantidad > 0) {
            setCantidad(menos => menos - 1)
        }
    }
    return (
        <div className="container text-center">
            <div className="mb-4 row">
                <div className="col">
                    <button className='btn btn-primary' onClick={decrement}> - </button>
                    <button className='btn btn-primary' onClick={() => onAdd(cantidad)} disabled={cantidad === 0}>Agregar {cantidad} al carrito</button>
                    <button className='btn btn-primary' onClick={increment}> + </button>
                </div>
            </div>
        </div>
    )
}

