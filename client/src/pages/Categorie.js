import Header from '../components/Header';
import Card from '../components/Card';
import MainTitle from '../components/MainTitle';
import Footer from '../components/Footer';

import {useState, useEffect} from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';


       
const Categorie = () => {
    const {slug} = useParams();
    const navigate = useNavigate();

    const [categorie, setCategorie] = useState({});

    const getCategorie = async () => {

        try {

            const res = await fetch(`/api/categorie/${slug}`);
            const json = await res.json();
            setCategorie(json);

        } catch (error) {
            console.error("Erreur lors de la recherche:", error);
            alert("Une erreur s'est produite lors du chargement de la page.");
        }

    };

    useEffect(() => {
        getCategorie();
    }, [slug]);
    
    console.log(categorie); // vérifie si nom_categorie est bien la


    return (
        <>
            <header>
                 <Header/>
            </header>
            <main className='mb-3'>
                 <div className='breadcrumb ms-4 mt-4'>
                        <ul className='list-unstyled d-flex'>
                            <li className='me-2'><Link className='breadcrumb-link' to='/'>Accueil /</Link></li>
                            <li className='text-capitalize'>{categorie.nom_categorie}</li>
                        </ul>
                </div>
                <MainTitle title={categorie.nom_categorie} />
                <section className="container mb-5">
                    <div className="row">
                            {categorie.Specialites &&
                                categorie.Specialites.map((specialite) =>
                                specialite.Artisans.map((artisan, index) => (
                            <div className='col-lg-4 mb-3 d-flex justify-content-center'>
                                <Card key={index} artisan={artisan} specialite={specialite.nom_specialite} />
                            </div>
                            
                            ))
                        )}
                    </div>
                </section>

                
            </main>
            <Footer/>
        </>
    );
};

export default Categorie