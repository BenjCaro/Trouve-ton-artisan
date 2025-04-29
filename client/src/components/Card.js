


const Card = () => {
    return (
        <>
        <div className='d-flex .flex-row justify-content-center mb-3 gap-3'>
            <div className='top-card d-flex flex-column justify-content-center'>
                 <h2 className='secondary-title ms-2'>Nom</h2>
                 <ul className='card-infos mt-3 ms-2'>
                    <li>Ranking</li>
                    <li>Spécialité</li>
                    <li>Localisation</li>
                 </ul>
             </div>
             <div className='top-card d-flex flex-column justify-content-center'>
                <h2 className='secondary-title ms-2'>Nom</h2>
                 <ul className='card-infos mt-3 ms-2'>
                     <li>Ranking</li>
                    <li>Spécialité</li>
                    <li>Localisation</li>
                 </ul>
             </div>
        </div>
        </>
    );
};

export default Card;