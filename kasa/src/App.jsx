import {Routes, Route} from "react-router-dom"
import Accueil from "./pages/accueil"
import Fichelogement from "./pages/fichelogement"
import Erreur from "./pages/erreur"
import Apropos from "./pages/apropos"


function App() {
  return <>

  <Routes>
    <Route path="/" element={<Accueil />} />
    <Route path="/ficheslogements" element={<Fichelogement />} />
    <Route path="/erreur" element={<Erreur />} />
    <Route path="/apropos" element={<Apropos />} />
  </Routes>

  </>
}


export default App
