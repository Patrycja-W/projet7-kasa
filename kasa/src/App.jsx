import {Routes, Route} from "react-router-dom"
import Accueil from "./composants/accueil/accueil"
import Ficheslogements from "./composants/ficheslogements/ficheslogements"
import Erreur from "./composants/erreur/erreur"
import Apropos from "./composants/apropos/apropos"



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
