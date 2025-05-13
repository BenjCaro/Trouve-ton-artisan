import banner from '../assets/images/banner.png';
import '../assets/css/Header.scss';

const Banniere = () => {
    return (
        <>
        <img src={banner} alt="banniere du site illustrant les volcans" className='img-fluid banner' loading='lazy'/>
        </>
    );
};



export default Banniere;