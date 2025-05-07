

const Card = ({ artisan, specialite }) => {
  return (
    <div className="top-card d-flex flex-column justify-content-center">
      <ul className="card-infos mt-3 ms-2">
        <li className="text-capitalize fs-5">{artisan.nom_artisan}</li>
        <li className="text-capitalize">{artisan.note}</li>
        <li className="text-capitalize">{specialite}</li>
        <li className="text-capitalize">{artisan.ville}</li>
      </ul>
    </div>
  );
};

export default Card;

