import search from '../assets/logo/search-blue.svg';

const Search = () => {
    return (

    <>

        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Recherchez" aria-label="Search"/>
            <button class="btn" type="submit"><img alt='recherchez' src={search}/></button>
        </form>
        
    </>
    );
};

export default Search 