import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../asyncMock"
import { ListaDeItems } from "../ListaDeItems/ListaDeItems"
import { useParams } from "react-router-dom"


export const DetallesDeLaLista = ({ greeting }) => {
    const [productos, setProductos] = useState([])

    const {cId} = useParams()

    useEffect(() => {
        const asyncFunction = cId ? getProductsByCategory : getProducts
        asyncFunction(cId)
            .then(response => {
                setProductos(response)
            }, [cId])
        
    }, [])
    console.log(productos)

    return (
        <>
            <h1 className='text-center'>{greeting}</h1>
            < ListaDeItems productos={productos} />              
        </>

    )
}