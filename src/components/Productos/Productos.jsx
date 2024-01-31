
export const Productos = (prod) => {

    return (
        <div>
            <h1> {prod.name} </h1>
            <img src={prod.img} style={{ width: 100 }} />
            <h3> {prod.category} </h3>
            <h2> {prod.price} </h2>   
        </div>

    )

}
