import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";
import build from "../assets/images/img-construction.jpg";

const WorkInProgress = () => {
    return (
        <>
        <header>
            <Header/>
        </header>
        <main>
            <Breadcrumb/>
            <h1 className='main-title text-center'>Page bientôt disponible</h1>
            <figure className='container mt-4 mb-4 d-flex justify-content-center picture-notfound'>
                <img className='img-fluid' src={build}/>
            </figure>
            <div className='mt-4 mb-4 d-flex justify-content-end'>
                <Link className='me-4' to='/'>Retour Accueil</Link>
            </div>
        </main>
        <Footer/>
        </>
    );
};

export default WorkInProgress;