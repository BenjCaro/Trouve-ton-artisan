import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import Card from '../components/Card';
import MainTitle from '../components/MainTitle';
import Footer from '../components/Footer';



       
const Categorie = () => {
    return (
        <>
            <header>
                 <Header/>
            </header>
            <main className='mb-3'>
                <Breadcrumb/> 
                <MainTitle name='Alimentation'/>
                <section className='container mb-5'>
                    <Card/>
                    <Card/>
                    <Card/>
                </section>
            </main>
            <Footer/>
        </>
    );
};

export default Categorie