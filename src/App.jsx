import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SyntaxJsx from './components/pages/SyntaxJsx'
import Homepage from './components/pages/HomePage.jsx'
import Theorie from './components/pages/Theorie.jsx'
import NavBar from './components/NavBar.jsx'
import HookUseState from './components/pages/HookUseState.jsx'
import Exercices from './components/pages/Exercices.jsx'
import Formulaire from './components/pages/Formulaire.jsx'
import Flux from './components/pages/Flux.jsx'
import HookUseEffect from './components/pages/HookUseEffect.jsx'
import HookUseMemo from './components/pages/HookUseMemo.jsx'
import RequetesApi from './components/pages/RequetesApi.jsx'

function App() {

  return (
    <div className='m-5'>
      <NavBar/>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/syntax-jsx" element={<SyntaxJsx/>}/>
          <Route path="/theorie" element={<Theorie/>}/>
          <Route path="/hook-use-state" element={<HookUseState/>}/>
          <Route path="/exercices" element={<Exercices/>}/>
          <Route path="/formulaire" element={<Formulaire/>}/>
          <Route path="/flux" element={<Flux/>}/>
          <Route path="/use-effect" element={<HookUseEffect/>}/>
          <Route path="/use-memo" element={<HookUseMemo/>}/>
          <Route path="/requete-api" element={<RequetesApi/>}/>
        </Routes>
      </Router>
    </div>   
  )
}

export default App