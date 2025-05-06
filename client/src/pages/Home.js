import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import MainTitle from '../components/MainTitle';
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
            <Breadcrumb/>
            <MainTitle name='Accueil'/>
            <section className='mb-3'>
                <h2 className='section-title text-center'>
                    Comment trouver mon artisan?
                </h2>
                <p className='text-center'>
                    En 4 étapes, votre Région vous aide à trouver l'artisan de votre choix.
                </p>
                <div className='d-flex justify-content-center mb-3'>
                    <ol className='bloc-etapes'>
                        <li >
                            Choisir la catégorie d'artisanat dans le menu.
                        </li>
                        <li>
                            Choisir un artisan.
                        </li>
                        <li>
                            Le contacter via le formulaire de contact.
                        </li>
                        <li>
                            Une réponse sera apportée sous 48h.
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
                <Homecards/>
            </section>   
         </main>
         <Footer/>
        </>
    );
};

export default Home