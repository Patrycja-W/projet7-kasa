import {Routes, Route} from "react-router-dom"
import Header from './composants/Header'
import Accueil from './pages/accueill'
import Fiche from "./pages/Fiche"
import Erreur from "./pages/Erreur"
import Apropos from "./pages/APropos"
import Footer from './composants/Footer'


function App() {
  return <>
  <Header></Header>
  <Routes>
    <Route path="/" element={<Accueil />} />
    <Route path="/fiche/:id" element={<Fiche />} />
    <Route path="*" element={<Erreur />} />
    <Route path="/apropos" element={<Apropos />} />
  </Routes>
  <Footer></Footer>
  </>
}


export default App


