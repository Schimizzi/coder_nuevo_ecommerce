import { Link } from 'react-router-dom'

export const NavBar = () => {
    return(
        <nav className='text-center' >
            <Link to='/' >e-commerce</Link>
            <section>
                <Link className='btn btn-primary' to={'/productos/celular'} > celular </Link>
                <Link className='btn btn-success'to={'/productos/computadora'} > computadora </Link>
                <Link className='btn btn-warning'to={'/productos/tablet'} > tablet </Link>
            </section>
            
        </nav>
    )
}
