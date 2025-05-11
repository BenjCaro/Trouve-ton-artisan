import '../assets/css/Breadcrumb.scss';
import { Link } from "react-router-dom";

const Breadcrumb = () => {
    return (
        <>
         <ul className='mt-3'>
            <li>
                <Link to='/' className='breadcrumb-link'>Accueil</Link>
            </li>
         </ul>
        </>
    );

};

export default Breadcrumb;




