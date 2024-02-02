import { useEffect, useState, useContext } from "react"
import { getProducts, getProductsByCategory } from "../asyncMock"
import { ListaDeItems } from "../ListaDeItems/ListaDeItems"
import { useParams } from "react-router-dom"
import { CarritoContext } from "../../App"


export const DetallesDeLaLista = ({ greeting }) => {
    const [productos, setProductos] = useState()
    const {cId} = useParams()
    const value = useContext(CarritoContext)
    console.log(value)

    const handleOnAdd = (cantidad) => {
        const objProductToAdd = {
            id: productos.id,
            name: productos.name,
            price: productos.price,
            quantity: cantidad
        }
        console.log(objProductToAdd)
        setProductos([...productos, objProductToAdd])
    }

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
            <h1 className='text-center pt-3'>{greeting}</h1>
            < ListaDeItems productos={productos} />              
        </>

    )
}