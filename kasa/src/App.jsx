import {Routes, Route} from "react-router-dom"
import Accueil from "./pages/accueil"
import Ficheslogements from "./pages/ficheslogements"
import Erreur from "./pages/erreur"
import Apropos from "./pages/apropos"


function App() {
  return <>

  <Routes>
    <Route path="/" element={<Accueil />} />
    <Route path="/ficheslogements" element={<Ficheslogements />} />
    <Route path="/erreur" element={<Erreur />} />
    <Route path="/apropos" element={<Apropos />} />
  </Routes>

  </>
}


export default App
