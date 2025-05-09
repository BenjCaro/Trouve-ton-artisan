import search from '../assets/logo/search-blue.svg';
import '../assets/css/Header.scss';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const SearchBar = () => {


    const [nom, setNom] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch (`/api/search?nom=${encodeURIComponent(nom)}`); // api/search?nom=Leala correspond à req.query.nom
        const artisan = await res.json();
        
        navigate(`/artisan/${artisan.id}`);


    };
        






    return (
            <form className="d-flex" role="search" onSubmit={handleSubmit}>
                            <input className="form-control ms-lg-0  ms-xl-5 me-2" value={nom} onChange={e => setNom(e.target.value)} type="search" placeholder="Recherchez" aria-label="Search"/>
                            <button className="btn" type="submit">
                                <img src={search}/>
                            </button>
                        </form>
    )
};


export default SearchBar;