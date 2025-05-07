

const Card = ({ artisan, specialite }) => {
  return (
    <div className="top-card d-flex flex-column justify-content-center">
      <h2 className="secondary-title fs-5 ms-2">{artisan.nom_artisan}</h2>
      <ul className="card-infos mt-3 ms-2">
        <li className="text-capitalize">{specialite}</li>
        {/* <li className="text-capitalize">{}</li> */}
      </ul>
    </div>
  );
};

export default Card;

