import gold from '../assets/logo/medal.svg';
import silver from '../assets/logo/medal-silver.svg';
import bronze from '../assets/logo/medal-bronze.svg';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

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

const Homecards = ({artisan}) => {

    const [useTopArtisans, setTopArtisans] = useState([]);

    const getTopArtisans = async () => {
        const res = await fetch ('api/top-artisan');
        const json = await res.json();
        setTopArtisans(json);
    };

    useEffect(() => {
        getTopArtisans();
    }, []);

    return (
            <div className='bloc-cards container d-flex gap-4 justify-content-center mt-3 mb-5'>
                {useTopArtisans.map((artisan, index) => (
                <Link to={`/artisan/${artisan.id}`} className='text-decoration-none' >
                    <div key={index} className='top-card d-flex justify-content-start align-items-center'>
                        <img src={index === 0 ? gold : index === 1 ? silver : bronze} className='medal-icon'/>
                        <ul className='card-infos mt-3 ms-2'>
                            <li className='text-capitalize fs-5 fw-semibold'><i class="bi bi-person-fill"></i> {artisan.nom_artisan}</li>
                            <StarRating note={artisan.note} />
                            <li className='text-capitalize'>{artisan.Specialite.nom_specialite}</li>
                            <li className='text-capitalize'><i class="bi bi-geo-alt"></i> {artisan.ville}</li>
                        </ul>
                    </div>
                 </Link>
                ))}
            </div>

     

            

            
            
       
    );
};

export default Homecards;





