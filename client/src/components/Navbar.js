import logo from '../assets/logo/Logo.png';
import search from '../assets/logo/search-blue.svg';
import '../assets/css/Header.scss';



const Navbar = () => {
    return (
    <>       
    <nav class="navbar navbar-expand-lg menu">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"> <img src={logo} className='menu-logo'/></a>
             <button class="navbar-toggler mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link menu-link" aria-current="page" href="#">Alimentation</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link menu-link" href="#">Batiment</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link menu-link" href="#">Fabrication</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link menu-link" href="#">Services</a>
                </li>
            </ul>
            <form class="d-flex " role="search">
                <input class="form-control ms-5 me-2" type="search" placeholder="Recherchez" aria-label="Search"/>
                <button class="btn" type="submit">
                    <img src={search}/>
                </button>
            </form>
            </div>
        </div>
    </nav>
    </>
    );
};

export default Navbar



