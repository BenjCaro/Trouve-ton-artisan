import Header from '../components/Header';
import Breadcrump from '../components/Breadcrumb';
import Pictures from '../components/Pictures';
import Footer from '../components/Footer';



const Home = () => {
    return (
        <>
        <header>
            <Header/>
        </header>
        <main>
            <Breadcrump/>
            <h1 className='main-title text-center'>
                Vous cherchez un artisan dans votre région?
            </h1>
             <p className='text-center' >
                Oui, vous êtes sur la bonne voie.
             </p>
             <hr className='main-hr'/>
             <section>
                <h2 className='section-title text-center'>
                    Comment trouver mon artisan?
                </h2>
                <p className='text-center'>
                    En 4 étapes, votre Région vous aide à trouver l'artisan de votre choix.
                </p>
                <div className='d-flex justify-content-center'>
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
                <Pictures/>
             </section>
             <section>
                
             </section>
            
         </main>
         <Footer/>
        </>
    );
};

export default Home