import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import Pictures from '../components/Pictures';
import Card from '../components/Card';
import Footer from '../components/Footer';
import hammer from '../assets/logo/hammer-blue.svg';



const Home = () => {
    return (
        <>
        <header>
            <Header/>
        </header>
        <main>
            <Breadcrumb/>
            <h1 className='main-title text-center'>
                Vous cherchez un artisan dans votre région?
            </h1>
             <p className='text-center' >
                Nous vous guidons.
             </p>
             <hr className='main-hr'/>
             <section>
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
             <section>
                <hr className='main-hr'/>
                <h2 className='text-center mt-3'>Top 3 des Artisans du mois 
                    <span className='ms-3'>
                        <img src={hammer}/>
                    </span>
                </h2>
                <div>
                    <Card/>
                </div>
             </section>
            
         </main>
         <Footer/>
        </>
    );
};

export default Home