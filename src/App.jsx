import { NavBar } from './components/NavBar/NavBar'
import { DetallesDeLaLista } from './components/DetallesDeLaLista/DetallesDeLaLista'
import { Formulario } from './components/Formulario/Formulario'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Categorias } from './components/Categorias/Categorias'
import { Detalles } from './components/Detalles/Detalles'
import { useState, createContext } from 'react'

export const CarritoContext = createContext()

function App() {
  const [carrito, setCarrito] = useState(10)



  return (
    <>
      <BrowserRouter>
      <CarritoContext.Provider value={{carrito, setCarrito}}>
        <NavBar carrito={carrito} /> 
        {<Routes>
          <Route path='/' element={<DetallesDeLaLista greeting={'Solo por Hoy!!'}/>} />
          <Route path='/productos/:cId' element={<Categorias/>} />
          <Route path='/formulario' element={<Formulario />} />
          <Route path='*' element={<h1 className='text-center'> no hemos encontrado la pagina</h1>} />
          <Route path='/detalles/:pId' element={<Detalles />} />
        </Routes>}
      </CarritoContext.Provider>
      </BrowserRouter>
      
    </>
  )
}

export default App