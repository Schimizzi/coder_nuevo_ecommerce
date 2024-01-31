import { Productos } from "../Productos/Productos"


export const ListaDeItems = ({ productos }) => {
    return (
        <div className='text-center'>
            {
                productos.map(prod => {
                    return (
                        < div key={prod.id} >
                            <Productos name={prod.name} img={prod.img} />
                            <a>detalle</a>
                        </div>
                    )
                })}
        </div>
    )
}
