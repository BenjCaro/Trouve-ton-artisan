import Header from '../components/Header';

import Pictures from '../components/Pictures';
import Homecards from '../components/Homecards';
import Footer from '../components/Footer';
import hammer from '../assets/logo/hammer-blue.svg';




const Home = () => {
     return (
        <>
        <header>
            <Header/>
        </header>
        <main className='mb-3'>
            
            <h1 className='main-title text-center mt-3'>Accueil</h1>
            <section className='mb-3'>
                <h2 className='section-title text-center'>
                    Comment trouver mon artisan?
                </h2>
                <p className='text-center fw-bold'>
                    En 4 étapes, votre Région vous aide à trouver l'artisan de votre choix.
                </p>
                <div className='d-flex justify-content-center mb-3'>
                    <ol className='bloc-etapes'>
                        <li className='fw-semibold' >
                            Choisir la catégorie d'artisanat dans le menu
                        </li>
                        <li>
                            Choisir un artisan <i class="bi bi-person"></i>
                        </li>
                        <li>
                            Le contacter via le formulaire de contact <i class="bi bi-pencil"></i>
                        </li>
                        <li>
                            Une réponse sera apportée sous 48h <i class="bi bi-hourglass"></i>
                        </li>
                    </ol>
                </div>
                <hr className='main-hr'/>
                <Pictures/>
            </section>
            <hr className='main-hr remove-hr'/>
            <section className='mb-3'>
                <h2 className='section-title text-center mt-3 mb-4'>Top 3 des Artisans du mois 
                    <span className='ms-3'>
                        <img src={hammer}/>
                    </span>
                </h2>
                <Homecards />
            </section>   
         </main>
         <Footer/>
        </>
    );
};

export default Home