import Logo from './Logo';
import Search from './Search';


const Navbar = () => {
    return (
        <nav className ='navbar navbar-expand-lg'>
            <Logo/>
            <div className='collapse navbar-collapse'>
                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                    <li className='nav-item'>
                        <a href='#' className='nav-link'>Alimentation</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#' className='nav-link'>Batiment</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#' className='nav-link'>Fabrication</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#' className='nav-link'>Services</a>
                    </li>
                </ul>
                <Search/>
            </div>

            
        </nav>
    );
};

export default Navbar



{/* <ul>
                <li>Alimentation</li>
                <li>Batiment</li>
                <li>Fabrication</li>
                <li>Services</li>
            </ul> */}