import logo from '../assets/logo/Logo.png';
import './Logo.scss';

const Logo = () => {
    return (
        <>
        <div class="container bloc-logo">
            <figure className='logo-figure'>
                <a className="navbar-brand" href='#'>
                    <img alt='logo trouve ton artisan' src={logo} className='img-fluid'/>
                </a>
            </figure>
        </div>
            
        
        </>
    );
};

export default Logo