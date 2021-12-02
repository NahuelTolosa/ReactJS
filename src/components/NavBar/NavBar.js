import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import './navBar.scss';
import { DollarApi } from "../DollarApi/DollarApi";

export const NavBar = () => {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link class="navbar-brand" to='/'>E-Commerce</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link active" to='/'>Home</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Products
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link class="dropdown-item" to='/products/buzo'>Buzos</Link>
                                    <Link class="dropdown-item" to='/products/campera'>Camperas</Link>
                                    <Link class="dropdown-item" to='/products/remera'>Remeras</Link>
                                    <Link class="dropdown-item" to='/products/pantalon'>Pantalones</Link>
                                    <Link class="dropdown-item" to='/products/camisa'>Camisas</Link>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to='/about'>About Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to='/contact'>Contact</Link>
                        </li>
                    </ul>

                    <div class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Cotización del Dólar
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <div className = 'dollar-section'>
                                <p className='dollar-section__type'>Tipo</p>
                                <div className='dollar-section__values'>
                                    <p>Compra</p>
                                    <p>Venta</p>
                                </div>
                            </div>
                            <hr/>
                            <li className = 'dollar-item'><DollarApi value='official'/></li>
                            <li className='dollar-item'><DollarApi value='blue'/></li>
                        </ul>
                    </div>

                    <Link className='cart-logo' to='/cart'><CartWidget /></Link>
                </div>
            </div>
        </nav>
    );
}

// export default NavBar