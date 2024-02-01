import { useEffect, useState } from "react"
import { getProductsByCategory } from "../asyncMock"
import { Contador } from "../Contador/Contador"
import { useParams } from "react-router-dom"
import { ListaDeItems } from "../ListaDeItems/ListaDeItems"


export const Categorias = () => {
    const [categoria, setCategoria] = useState([])
    const { cId } = useParams()

    useEffect(() => {
        getProductsByCategory(cId)
            .then(response => {
                setCategoria(response)
            })
            .catch(error => {
                console.error("Error fetching product details:", error)
                setCategoria(null)
            })
    }, [cId])

    if (!categoria) {
        return <p>Cargando...</p>
    }

    if (Array.isArray(categoria) && categoria.length === 0) {
        return <p>Productos no encontrados para la categoría: {cId}</p>
    }

    return (
        <div className="text-center">
            <h1 className='text-center'>Detalle del producto</h1>
            <h2> {categoria?.name} </h2>
            <img src={categoria?.img} style={{ width: 200 }} alt={categoria?.name} />
            <p> {categoria?.description} </p>
            <h2> ${categoria?.price} </h2>
            <Contador />            
            <ListaDeItems productos={categoria} />
        </div>
    )
}


