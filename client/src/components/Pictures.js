import workshop from '../assets/images/img-atelier.jpg';
import baker from '../assets/images/img-boulangerie.jpg';


const Pictures = () => {
    return (
        <>
        <div className='d-flex justify-content-center column-gap-3 mt-5'>
            <figure className='home-pictures '>
                <img src={workshop} className='img-fluid'/>
            </figure>
            <figure className='home-pictures'>
                <img src={baker} className='img-fluid'/>
            </figure>
        </div>
        </>
    );

};

export default Pictures;