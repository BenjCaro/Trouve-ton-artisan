import Home from './pages/Home';
import Categorie from './pages/Categorie';
import Artisan from './pages/Artisan';
import {Routes, Route} from "react-router-dom";

function App() {
 return (
     <>
     
     <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/alimentation" element={<Categorie/>}>Alimentation</Route>
        <Route path="/batiment" element={<Categorie/>}>Batiment</Route>
        <Route path="/fabrication" element={<Categorie/>}>Fabrication</Route>
        <Route path="/services" element={<Categorie/>}>Services</Route>
     </Routes>
       
      
        
     </>
   );
}

export default App;
