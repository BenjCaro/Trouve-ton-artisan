

const Card = ({ artisan, specialite }) => {
  return (
    <div className="top-card d-flex flex-column justify-content-center">
      <h2 className="secondary-title ms-2">{artisan.nom_artisan}</h2>
      <ul className="card-infos mt-3 ms-2">
        <li>Spécialité : {specialite}</li>
      </ul>
    </div>
  );
};

export default Card;

