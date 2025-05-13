import logo from '../assets/logo/Logo.png';
// import search from '../assets/logo/search-blue.svg';
import '../assets/css/Header.scss';
import { NavLink } from "react-router-dom";
import SearchBar from './searchBar';


const Navbar = () => {
    return (
    <>       
    <nav className="navbar navbar-expand-lg menu">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/"> <img src={logo} alt="logo de trouve ton artisan" loading='lazy' className='menu-logo'/></NavLink>
             <button className="navbar-toggler mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink className="nav-link menu-link" aria-current="page" to="/categorie/alimentation">Alimentation</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link menu-link" to="/categorie/batiment">Batiment</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link menu-link" to="/categorie/fabrication">Fabrication</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link menu-link" to="/categorie/services">Services</NavLink>
                </li>
            </ul>
            <SearchBar/>
            </div>
        </div>
    </nav>
    </>
    );
};

export default Navbar



