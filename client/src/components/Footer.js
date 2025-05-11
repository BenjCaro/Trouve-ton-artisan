
import '../assets/css/Footer.scss';
import logo from '../assets/logo/Logo.png';
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <>
          <footer className='container-fluid'>
            <div className='d-flex justify-content-evenly pt-3 bloc-footer-adress'>
                <div>
                <img src={logo} className='footer-logo'/>
                </div>

                <div className='mt-3'>
                    <h2 className='footer-adress fs-5'>Lyon</h2>
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
                       <Link to="/soon" className='footer-link'>Mentions Légales</Link>
                    </li>
                    <li className='ms-3'>
                        <Link to="/soon" className='footer-link'>Données Personnelles</Link>
                    </li>
                    <li className='ms-3'>
                        <Link to="/soon" className='footer-link'>Accessibilités</Link>
                    </li>
                    <li className='ms-3'>
                        <Link to="/soon" className='footer-link'>Politiques des Cookies</Link>
                    </li>
                </ul>

            </div>
          </footer>
            

        </>
    );
};

export default Footer