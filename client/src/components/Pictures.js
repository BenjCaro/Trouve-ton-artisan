import workshop from '../assets/images/img-atelier.jpg';
import baker from '../assets/images/img-boulangerie.jpg';


const Pictures = () => {
    return (
        <>
        <div className='d-flex justify-content-center column-gap-3 mt-5'>
            <figure className='home-pictures '>
                <img src={workshop} alt="atelier de menuisier" className='img-fluid' loading='lazy'/>
            </figure>
            <figure className='home-pictures'>
                <img src={baker} alt="vitrine d'une boulangerie artisanale" className='img-fluid' loading='lazy'/>
            </figure>
        </div>
        </>
    );

};

export default Pictures;