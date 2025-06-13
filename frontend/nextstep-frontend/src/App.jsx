import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RoleSelection from './pages/RoleSelection'
import SignIn from './pages/SignIn'
import CounsellorSignup from './pages/CounsellorSignup'
import StudentSignUp from './pages/StudentSignUp'
import Services from './pages/Services'
import Chatbot from './pages/Chatbot'
import Courses from './pages/Courses'
import Quizzes from './pages/Quizzes'
import Meetings from './pages/Meetings'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/roleselection' element={<RoleSelection/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/Counsellorsignup' element={<CounsellorSignup/>}/>
        <Route path='/StudentSignUp' element={<StudentSignUp/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/chatbot' element={<Chatbot/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/quiz' element={<Quizzes/>}/>
        <Route path='/meetings' element={<Meetings/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
