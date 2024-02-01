import { NavBar } from './components/NavBar/NavBar'
import { DetallesDeLaLista } from './components/DetallesDeLaLista/DetallesDeLaLista'
import { Formulario } from './components/Formulario/Formulario'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Categorias } from './components/Categorias/Categorias'
import { Detalles } from './components/Detalles/Detalles'


function App() {



  return (
    <>
      <BrowserRouter>
        <NavBar /> 
        {<Routes>
          <Route path='/' element={<DetallesDeLaLista greeting={'Solo por Hoy!!'}/>} />
          <Route path='/productos/:cId' element={<Categorias/>} />
          <Route path='/formulario' element={<Formulario />} />
          <Route path='*' element={<h1 className='text-center'> no hemos encontrado la pagina</h1>} />
          <Route path='/detalles/:pId' element={<Detalles />} />
          
        </Routes>}
      </BrowserRouter>
      
    </>
  )
}

export default App