import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';
import error from '../assets/images/erreur 404.jpg';
import { Link } from "react-router-dom";
// import '../assets/css/notfound.scss';

const NotFound = () => {
    return (
        <>
        <header>
            <Header/>
        </header>
        <main>
            <Breadcrumb/>
            <div>
                <h1 className='main-title text-center'>Erreur 404</h1>
                <p className='ms-5 mb-4'>Cette page n'existe pas.</p>
            </div>
            <figure className='container mt-4 mb-4'>
                <img className='img-fluid' src={error}/>
            </figure>
            <div className='d-flex justify-content-end'>
                <button className='mt-4 mb-4 me-4'><Link to='/'>Retour Accueil</Link></button>
            </div>
        </main>
        <Footer/>
        </>
    );
};


export default NotFound;