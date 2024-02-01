import { useEffect, useState } from "react"
import { getProductsById } from "../asyncMock"
import { Contador } from "../Contador/Contador"
import { useParams } from "react-router-dom"


export const Detalles = () => {
    const [producto, setProducto] = useState([])

    const {pId} = useParams()

    useEffect(() => {
        getProductsById(pId)
            .then(response => {
                setProducto(response)
            })
    }, [])
    console.log(producto)

    return (
        <div className="text-center">
            <h1 className='text-center'>detalle del</h1>
            <h1> {!producto ? 'Producto no encontrado' : null} </h1>
            <h2> {producto?.name} </h2> 
            <img src={producto?.img} style={{ width: 200 }} />
            <p> {producto?.description} </p> 
            <h2> ${producto?.price} </h2> 
            <Contador />
             
        </div>

    )
}