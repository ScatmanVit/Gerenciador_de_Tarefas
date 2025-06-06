import Home from './pages/Home/index.jsx'
import Contato from './pages/Contato/index.jsx'
import Tarefas from './pages/Tarefas/index.jsx'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contato" element={<Contato/>}/>
        <Route path="/Tarefas" element={<Tarefas/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
