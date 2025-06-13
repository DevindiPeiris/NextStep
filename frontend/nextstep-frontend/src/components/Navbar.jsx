import { Link } from 'react-router-dom';
import avatar from '../assets/avatar.png'


const Navbar = () => {
    return(
        <header className="flex justify-between items-center p-4 bg-white shadow mb-8">
            <div className="text-2xl font-bold text-gray-900">NextStep</div>
            <div className="flex space-x-10 text-gray-700 font-medium">
                <Link to="/services" className="hover:text-blue-600">Home</Link>
                <Link to="/courses" className="hover:text-blue-600">Courses</Link>
                <Link to="/quiz" className="hover:text-blue-600">Quizzes</Link>
                <Link to="/meetings" className="hover:text-blue-600">Meetings</Link>
                <Link to="/chatbot" className="hover:text-blue-600">Career Recommendations</Link>

            </div>
            <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                <img src={avatar} alt="User Profile" className="w-full h-full object-cover" />
            </div>
        </header>
    )
}

export default Navbar;