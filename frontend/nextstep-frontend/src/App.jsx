import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RoleSelection from './pages/RoleSelection'
import SignIn from './pages/SignIn'
import CounsellorSignup from './pages/CounsellorSignup'
import CounsellorHome from './pages/CounsellorHome'
import StudentSignUp from './pages/StudentSignUp'
import Services from './pages/Services'
import Chatbot from './pages/Chatbot'
import Courses from './pages/Courses'
import Quizzes from './pages/Quizzes'
import Meetings from './pages/Meetings'
import ViewMeetings from './pages/ViewMeetings'
import BookMeeting from './pages/BookMeeting'
import AdminDashboard from './pages/AdminDashboard'
import AdminCourse from './pages/AdminCourse'
import AdminUser from './pages/AdminUser'
import Results from './pages/Results'
import ProtectedRoute from './components/ProtectedRoute'
import PaymentSuccess from './pages/PaymentSuccess';
import PaymentCancel from './pages/PaymentCancel';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/roleselection' element={<RoleSelection/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/Counsellorsignup' element={<CounsellorSignup/>}/>
        <Route path='/StudentSignUp' element={<StudentSignUp/>}/>

        
        <Route path='/services' element={<ProtectedRoute allowedRoles={['STUDENT']}><Services /></ProtectedRoute>}/>
        <Route path='/chatbot' element={<ProtectedRoute allowedRoles={['STUDENT']}><Chatbot/></ProtectedRoute>}/>
        <Route path='/courses' element={<ProtectedRoute allowedRoles={['STUDENT']}><Courses/></ProtectedRoute>}/>
        <Route path='/quiz' element={<ProtectedRoute allowedRoles={['STUDENT']}><Quizzes/></ProtectedRoute>}/>
        <Route path='/meetings' element={<ProtectedRoute allowedRoles={['STUDENT']}><Meetings/></ProtectedRoute>}/>
        <Route path='/viewmeetings' element={<ProtectedRoute allowedRoles={['STUDENT']}><ViewMeetings/></ProtectedRoute>}/>
        <Route path='/bookmeeting' element={<ProtectedRoute allowedRoles={['STUDENT']}><BookMeeting/></ProtectedRoute>}/>
        <Route path="/results" element={<ProtectedRoute allowedRoles={['STUDENT']}><Results /></ProtectedRoute>} />


        <Route path='/admindashboard' element={<ProtectedRoute allowedRoles={['ADMIN']}><AdminDashboard/></ProtectedRoute>}/>
        <Route path='/admincourse' element={<ProtectedRoute allowedRoles={['ADMIN']}><AdminCourse/></ProtectedRoute>}/>
        <Route path='/adminuser' element={<ProtectedRoute allowedRoles={['ADMIN']}><AdminUser/></ProtectedRoute>}/>


        <Route path='/counsellorhome' element={<ProtectedRoute allowedRoles={['COUNSELLOR']}><CounsellorHome/></ProtectedRoute>}/>
        
        <Route path="/payment/success" element={<PaymentSuccess />} />
        <Route path="/payment/cancel" element={<PaymentCancel />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
