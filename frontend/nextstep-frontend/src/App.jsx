import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RoleSelection from './pages/RoleSelection'
import SignIn from './pages/SignIn'
import CounsellorSignup from './pages/CounsellorSignup'
import StudentSignUp from './pages/StudentSignUp'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/roleselection' element={<RoleSelection/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/Counsellorsignup' element={<CounsellorSignup/>}/>
        <Route path='/StudentSignUp' element={<StudentSignUp/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
