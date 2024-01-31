import { NavBar } from './components/NavBar/NavBar'
import { Contador } from './components/Contador/Contador'
import { DetallesDeLaLista } from './components/DetallesDeLaLista/DetallesDeLaLista'


function App() {
  return (
    <>
      <NavBar />  
      <Contador /> 
      <DetallesDeLaLista greeting={'Solo por Hoy!!'} />
    </>
  )
}

export default App