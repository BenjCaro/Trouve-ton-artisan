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




const Card = ({ artisan, specialite }) => {
  return (
    <Link to={`/artisan/${artisan.id}`} className='text-decoration-none'>
      <div className="top-card d-flex flex-column justify-content-center">
        <ul className="card-infos mt-3 ms-2">
          <li className="text-capitalize fs-5 fw-semibold"><i class="bi bi-person-fill"></i> {artisan.nom_artisan}</li>
          <StarRating note={artisan.note} />
          <li className="text-capitalize">{specialite}</li>
          <li className="text-capitalize"><i class="bi bi-geo-alt"></i> {artisan.ville}</li>
        </ul>
      </div>
    </Link>
  );
};

export default Card;

