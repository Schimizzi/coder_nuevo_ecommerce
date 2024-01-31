import { useEffect, useState } from "react"
import { getProducts } from "../asyncMock"
import { ListaDeItems } from "../ListaDeItems/ListaDeItems"

export const DetallesDeLaLista = ({ greeting }) => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProducts()
            .then(response => {
                setProductos(response)
            })
    }, [])
    console.log(productos)

    return (
        <>
            <h1 className='text-center'>{greeting}</h1>
            < ListaDeItems productos={productos} /> 
             
        </>

    )
}