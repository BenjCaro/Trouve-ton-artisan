import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import Card from '../components/Card';
import MainTitle from '../components/MainTitle';
import Footer from '../components/Footer';

import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';


       
const Categorie = () => {
    const {slug} = useParams();

    const [categorie, setCategorie] = useState({});

    const getCategorie = async () => {
        const res = await fetch(`/api/categorie/${slug}`);
        const json = await res.json();
        setCategorie(json);
    };

    useEffect(() => {
        getCategorie();
    }, [slug]);
   // console.log(categorie); // vérifie si nom_categorie est bien là
    

    return (
        <>
            <header>
                 <Header/>
        </header>
            <main className='mb-3'>
                <Breadcrumb/> 
                <MainTitle title={categorie.nom_categorie} />
                <section className="container mb-5">
                    <div className="row">
                            {categorie.Specialites &&
                                categorie.Specialites.map((specialite) =>
                                specialite.Artisans.map((artisan, index) => (
                            <div className=''>
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