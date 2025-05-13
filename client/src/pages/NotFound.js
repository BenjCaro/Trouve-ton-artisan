import Header from '../components/Header';

import Footer from '../components/Footer';
import error from '../assets/images/erreur 404.jpg';
import { Link } from "react-router-dom";
import '../assets/css/notfound.scss';

const NotFound = () => {

    return (
        <>
        <header>
            <Header/>
        </header>
        <main>
            <h1 className='main-title text-center mt-4'>Erreur 404</h1>
            <figure className='container mt-4 mb-4 d-flex justify-content-center picture-notfound'>
                <img className='img-fluid' alt="Page non trouvée" loading='lazy' src={error}/>
            </figure>
            <div className='mt-4 mb-4 d-flex justify-content-end'>
                <Link className='me-4' to='/'>Retour Accueil</Link>
            </div>
        </main>
        <Footer/>
        </>
    );
};


export default NotFound;