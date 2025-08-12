import { Link } from 'react-router-dom';
import avatar from '../assets/profile.png'
import Logo from '../assets/logo_nav.png'

const Navbar = () => {
    return(
        <header className="flex justify-between items-center p-4 bg-white shadow mb-8 px-80">
            <div className=''>
                <img src={Logo}/>
            </div>
            <div className="flex space-x-10 text-gray-700 font-medium [font-family:'Montserrat',sans-serif]">
                <Link to="/services" className="hover:text-blue-600">Home</Link>
                <Link to="/courses" className="hover:text-blue-600">Courses</Link>
                <Link to="/quiz" className="hover:text-blue-600">Quizzes</Link>
                <Link to="/meetings" className="hover:text-blue-600">Meetings</Link>
                <Link to="/chatbot" className="hover:text-blue-600">Career Recommendations</Link>

            </div>
            <div className="">
                <img src={avatar} alt="User Profile" className="" />
            </div>
        </header>
    )
}

export default Navbar;