import { Productos } from "../Productos/Productos"

export const ListaDeItems = ({ productos }) => {
    return (
        <div className='text-center'>
            {
                Array.isArray(productos) && productos.length > 0 ? (
                    productos.map(prod => (
                        <div key={prod.id}>
                            <Productos id={prod.id} name={prod.name} img={prod.img} category={prod.category} price={prod.price} />
                        </div>
                    ))
                ) : (
                    <p>No hay productos para mostrar.</p>
                )
            }
        </div>
    )
}
