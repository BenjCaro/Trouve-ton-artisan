import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';
import error from '../assets/images/erreur 404.jpg';
import { Link } from "react-router-dom";


const NotFound = () => {

    return (
        <>
        <header>
            <Header/>
        </header>
        <main>
            <Breadcrumb/>
            <h1 className='main-title text-center'>Erreur 404</h1>
            <figure className='container mt-4 mb-4'>
                <img className='img-fluid' src={error}/>
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