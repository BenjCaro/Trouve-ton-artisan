import Home from './pages/Home';
import Categorie from './pages/Categorie';
import Artisan from './pages/Artisan';
import {Routes, Route} from "react-router-dom";

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
     </Routes>
       
      
        
     </>
   );
}

export default App;
