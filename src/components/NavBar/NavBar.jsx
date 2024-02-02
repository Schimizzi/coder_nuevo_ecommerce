import { Link } from 'react-router-dom'
import classes from './NavBar.module.css'
import { Carrito } from '../Carrito/Carrito'

export const NavBar = () => {
    return(
        <nav className='text-center' >
            <Link className= {classes.logo} to='/' >e-commerce</Link>
            <Carrito />
            <section>
                <Link className='btn btn-primary' to={'/productos/celular'} > celular </Link>
                <Link className='btn btn-success'to={'/productos/computadora'} > computadora </Link>
                <Link className='btn btn-warning'to={'/productos/tablet'} > tablet </Link>
            </section>
            
        </nav>
    )
}
