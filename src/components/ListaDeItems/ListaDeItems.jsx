import { Productos } from "../Productos/Productos"

export const ListaDeItems = ({ productos }) => {
    
    const handleClick = () => {
        console.log('click en lista de items')
    }

    return (
        <div className='text-center' onClick={handleClick}>
            {
                Array.isArray(productos) && productos.length > 0 ? (
                    productos.map(prod => (
                        <div className='pt-3' key={prod.id}>
                            <Productos id={prod.id} name={prod.name} img={prod.img}  />
                        </div>
                    ))
                ) : (
                    <p>No hay productos para mostrar.</p>
                )
            }
        </div>
    )
}
