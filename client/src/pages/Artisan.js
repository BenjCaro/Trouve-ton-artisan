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
        console.log(json);
        setArtisan(json);
     };

     useEffect(() => {
        getArtisan();
     }, [id]);

// console.log(artisan);
console.log("Specialite:", artisan.Specialite);
console.log("Categorie:", artisan.Specialite?.Categorie);
console.log("Nom catégorie:", artisan.Specialite?.Categorie?.nom_categorie);

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
                        <div className='card d-flex flex-column justify-content-center'>
                            <ul className='card-infos mt-3 ms-2'>
                                <li className='fs-5 text-capitalize'>{artisan.Specialite?.Categorie?.nom_categorie || "Catégorie inconnue"}</li>
                                <li>{artisan.note}</li>
                                <li className='text-capitalize'>{artisan.Specialite ? artisan.Specialite.nom_specialite : "Chargement..."}</li>
                                <li className='text-capitalize'>{artisan.ville}</li>
                            </ul>
                        </div>
                        <div>
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
                
                   <Form artisan/>
                    
                </section>
            </main>
            <Footer/>
        </>

      
    );
};

export default Artisan;