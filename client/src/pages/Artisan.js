import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import Form from '../components/Form';
import Footer from '../components/Footer';
import work from '../assets/images/img-travail.jpg';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';


const Artisan = () => {
    
     const {id} = useParams();
     const [artisan, setArtisan] = useState({});

     const getArtisan = async () => {
        const res = await fetch(`/api/artisan/${id}`);
        const json = await res.json();
        setArtisan(json);
     };

     useEffect(() => {
        getArtisan();
     }, [id]);

console.log(artisan);
    

    return (
        <>
            <header>
                 <Header/>
            </header>
            <main className='mb-3'>
                <Breadcrumb/> 
                <h1 className='main-title text-center'>{artisan.nom_artisan}</h1>
                <hr className='main-hr'/>
                <section className='container mb-5'>
                    <div className='bloc-infos-artisan d-flex .flex-row justify-content-center align-items-center mb-3 gap-3'>
                        <div className='top-card d-flex flex-column justify-content-center'>
                            <h2 className='secondary-title ms-2'>{artisan.nom_artisan}</h2>
                            <ul className='card-infos mt-3 ms-2'>
                                {/* <li>Nom</li> */}
                                <li>{artisan.note}</li>
                                <li className='text-capitalize'>Spécialité</li>
                                <li className='text-capitalize'>{artisan.ville}</li>
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
                      {artisan.a_propos}
                    </p>
                    <hr className='main-hr'/>
                </section>
                <section className='container mb-5 d-flex flex-column align-items-center'>
                <h2 className='section-title text-center ms-2'>Contactez {artisan.nom_artisan}</h2>
                
                   <Form/>
                    
                </section>
            </main>
            <Footer/>
        </>

      
    );
};

export default Artisan;