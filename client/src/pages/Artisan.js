import Header from '../components/Header';
import Form from '../components/Form';
import Footer from '../components/Footer';
import work from '../assets/images/img-travail.jpg';
import {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';


const StarRating = ({ note }) => {
  
  return (
    <li>
      {[...Array(5)].map((_, index) => (
        <span key={index} style={{ color: index < Math.round(note) ? "gold" : "gray" }}>
          ★
        </span>
      ))}
      <span>({note})</span>
    </li>
  );
};

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
console.log("Slug:", artisan.Specialite?.Categorie?.slug);
const slug = artisan.Specialite?.Categorie?.slug;

    return (
        <>
            <header>
                 <Header/>
            </header>
            <main className='mb-3'> 
                <div className='breadcrumb ms-4 mt-4'>
                        <ul className='list-unstyled d-flex'>
                            <li className='me-2'><Link className='breadcrumb-link' to='/'>Accueil /</Link></li>
                            <li className='text-capitalize me-2'>
                                <Link className='breadcrumb-link' to={`/categorie/${slug}`}>{artisan.Specialite?.Categorie?.nom_categorie} /</Link>
                            </li>
                            <li className='text-capitalize'>{artisan.nom_artisan}</li>
                        </ul>
                </div>
                <h1 className='main-title text-center mt-4'>{artisan.nom_artisan}</h1>
                <hr className='main-hr'/>
                <section className='container mb-5'>
                    <div className='bloc-infos-artisan d-flex .flex-row justify-content-center align-items-center mb-3 gap-3'>
                        <div className='card d-flex flex-column justify-content-center'>
                            <ul className='card-infos mt-3 ms-2'>
                                <li className='fs-5 text-capitalize'>{artisan.Specialite?.Categorie?.nom_categorie}</li>
                                <StarRating note={artisan.note} />
                                <li className='text-capitalize'>{artisan.Specialite ? artisan.Specialite.nom_specialite : "Chargement..."}</li>
                                <li className='text-capitalize'>{artisan.ville}</li>
                                {/* <li>{artisan.site_web ? (
                                                <a href={artisan.site_web} target="_blank" rel="noopener noreferrer">
                                                    Visiter le site
                                                </a>
                                                ) : null}  A DECOMMENTER APRES MAJ de la BDD
                                </li> */}
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
                
                   <Form artisan={artisan}/>
                    
                </section>
            </main>
            <Footer/>
        </>

      
    );
};

export default Artisan;