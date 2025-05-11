import Home from './pages/Home';
import Categorie from './pages/Categorie';
import Artisan from './pages/Artisan';
import NotFound from './pages/NotFound';
import {Routes, Route, Navigate} from "react-router-dom";

function App() {
 return (
     <>
     
     <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/categorie/:slug" element={<Categorie/>}>Alimentation</Route>
        <Route path="/categorie/:slug" element={<Categorie/>}>Batiment</Route>
        <Route path="/categorie/:slug" element={<Categorie/>}>Fabrication</Route>
        <Route path="/categorie/:slug" element={<Categorie/>}>Services</Route>
        <Route path="/artisan/:id" element={<Artisan />} />
        <Route path="*" element={<Navigate to="/404"/>}></Route>
        <Route path="/404" element={<NotFound/>}></Route>
     </Routes>
       
      
        
     </>
   );
}

export default App;
