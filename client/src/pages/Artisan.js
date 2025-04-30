import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import Form from '../components/Form';
import Footer from '../components/Footer';
import work from '../assets/images/img-travail.jpg';



const Artisan = () => {
    return (
        <>
            <header>
                 <Header/>
            </header>
            <main className='mb-3'>
                <Breadcrumb/> 
                <h1 className='main-title text-center'>Nom Artisan</h1>
                <hr className='main-hr'/>
                <section className='container mb-5'>
                    <div className='bloc-infos-artisan d-flex .flex-row justify-content-center align-items-center mb-3 gap-3'>
                        <div className='top-card d-flex flex-column justify-content-center'>
                            <h2 className='secondary-title ms-2'>Nom</h2>
                            <ul className='card-infos mt-3 ms-2'>
                                {/* <li>Nom</li> */}
                                <li>Ranking</li>
                                <li>Spécialité</li>
                                <li>Localisation</li>
                            </ul>
                        </div>
                        <div className=''>
                            <figure className='artisan-pictures'>
                                <img src={work} className='img-fluid'/>
                            </figure>
                        </div> 
                    </div>     
                    <h3 className='text-decoration-underline'>A propos</h3>
                    <p className='text-description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Phasellus eleifend ante sem, 
                    id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, 
                    quis sollicitudin tellus sollicitudin. 
                    </p>
                    <hr className='main-hr'/>
                </section>
                <section className='container mb-5 d-flex flex-column align-items-center'>
                <h2 className='section-title text-center ms-2'>Contact Nom Artisan</h2>
                   {/* composant Form */}
                   <Form/>
                    
                </section>
            </main>
            <Footer/>
        </>

      
    );
};

export default Artisan;