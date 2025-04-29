import gold from '../assets/logo/medal.svg';
import silver from '../assets/logo/medal-silver.svg';
import bronze from '../assets/logo/medal-bronze.svg';

const Homecards = () => {
    return (
        <>
            <div className='bloc-cards container d-flex gap-3 justify-content-center mt-3 mb-5'>
                <div className='top-card d-flex justify-content-start align-items-center'>
                    <img src={gold} className='medal-icon'/>
                    <ul className='card-infos mt-3 ms-2'>
                        <li>Nom</li>
                        <li>Ranking</li>
                        <li>Spécialité</li>
                        <li>Localisation</li>
                    </ul>
                </div>
                <div className='top-card d-flex justify-content-start align-items-center'>
                    <img src={silver} className='medal-icon'/>
                    <ul className='card-infos mt-3 ms-2'>
                        <li>Nom</li>
                        <li>Ranking</li>
                        <li>Spécialité</li>
                        <li>Localisation</li>
                    </ul>
                </div>
                <div className='top-card d-flex justify-content-start align-items-center'>
                    <img src={bronze} className='medal-icon'/>
                    <ul className='card-infos mt-3 ms-2'>
                        <li>Nom</li>
                        <li>Ranking</li>
                        <li>Spécialité</li>
                        <li>Localisation</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Homecards;





