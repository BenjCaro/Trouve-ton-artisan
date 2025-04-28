import './Footer.scss';
import logo from '../assets/logo/Logo.png';


const Footer = () => {
    return (
        <>
          <footer className='container-fluid'>
            <div className='d-flex justify-content-evenly pt-3 bloc-footer-adress'>
                <div>
                <img src={logo} className='footer-logo'/>
                </div>

                <div>
                    <h2 className='footer-adress'>Lyon</h2>
                    <p className='footer-adress'> 
                        
                        101 cours Charlemagne  <br/>
                        CS 20033  <br/>
                        69269 LYON CEDEX 02  <br/>
                        France  <br/>
                        +33 (0)4 26 73 40 00 </p>
                </div>
            </div>
            <hr/>
            <div className='bloc-footer-menu d-flex justify-content-center mt-3'>
                <ul className='footer-menu d-flex'>
                    <li className='ms-3'>
                        <a href='#' className='footer-link'>Mentions Légales</a>
                    </li>
                    <li className='ms-3'>
                        <a href='#' className='footer-link'>Données Personnelles</a>
                    </li>
                    <li className='ms-3'>
                        <a href='#' className='footer-link'>Accessibilités</a>
                    </li>
                    <li className='ms-3'>
                        <a href='#' className='footer-link'>Politiques des Cookies</a>
                    </li>
                </ul>

            </div>
          </footer>
            

        </>
    );
};

export default Footer