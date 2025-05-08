import '../assets/css/Breadcrumb.scss';
import { NavLink } from "react-router-dom";

const Breadcrumb = () => {
    return (
        <>
         <ul className='mt-3'>
            <li>
                <NavLink to='/' className='breadcrumb-link'>Accueil</NavLink>
            </li>
         </ul>
        </>
    );

};

export default Breadcrumb;




