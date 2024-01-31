

export const NavBar = () => {
    return(
        <nav className='text-center' >
            <h2>e-commerce</h2>
            <section>
                <h2 className='btn btn-primary' to={'/category/celular'} > celular </h2>
                <h2 className='btn btn-success'to={'/category/computadora'} > computadora </h2>
                <h2 className='btn btn-warning'to={'/category/tablet'} > tablet </h2>
            </section>
            
        </nav>
    )
}
