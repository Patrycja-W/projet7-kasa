import {Routes, Route} from "react-router-dom"
import Header from './composants/header'
import Accueil from "./pages/accueil"
import Fiche from "./pages/fiche"
import Erreur from "./pages/erreur"
import Apropos from "./pages/apropos"
import Footer from './composants/footer'


function App() {
  return <>
  <Header></Header>
  <Routes>
    <Route path="/" element={<Accueil />} />
    <Route path="/:id" element={<Fiche />} />
    <Route path="/erreur" element={<Erreur />} />
    <Route path="/apropos" element={<Apropos />} />
  </Routes>
  <Footer></Footer>
  </>
}


export default App

