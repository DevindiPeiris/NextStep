import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RoleSelection from './pages/RoleSelection'
import SignIn from './pages/SignIn'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/roleselection' element={<RoleSelection/>}/>
        <Route path='/signin' element={<SignIn/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
