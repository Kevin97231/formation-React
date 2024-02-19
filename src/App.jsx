import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SyntaxJsx from './components/pages/SyntaxJsx'
import Homepage from './components/pages/HomePage.jsx'
import Theorie from './components/pages/Theorie.jsx'
import NavBar from './components/NavBar.jsx'
import HookUseState from './components/pages/HookUseState.jsx'
import Exercices from './components/pages/Exercices.jsx'

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
        </Routes>
      </Router>
    </div>
    
    
  )
}

export default App