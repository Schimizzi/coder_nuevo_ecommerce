import { Link } from "react-router-dom"

export const Productos = ({id, name, img, category, price}) => {

    console.log(id)
    return (
        <div>
            <h1> {name} </h1>
            <img src={img} style={{ width: 100 }} />
            <h3> {category} </h3>
            <h2> {price} </h2> 
            <Link to={`/detalles/${id}`}> Ver detalles del producto </Link>
        </div>

    )

}