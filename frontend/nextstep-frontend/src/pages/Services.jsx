import { Link, useNavigate } from 'react-router-dom';
import avatar from '../assets/avatar.png'
import ServiceCard from '../components/ServiceCard';
import { FaBook, FaPuzzlePiece, FaVideo, FaBriefcase } from 'react-icons/fa';


const Services = () => {
  return (
    <div className="min-h-screen bg-gray-100 mr-25 ml-25">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white shadow mb-8">
        <div className="text-2xl font-bold text-gray-900">NextStep</div>
        <div className="flex space-x-10 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Courses</a>
          <a href="#" className="hover:text-blue-600">Quizzes</a>
          <a href="#" className="hover:text-blue-600">Meetings</a>
          <a href="#" className="hover:text-blue-600">Career Recommendations</a>
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
          <img src={avatar} alt="User Profile" className="w-full h-full object-cover" />
        </div>
      </header>

     
      <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-25 w-full max-w-4xl">
                <ServiceCard
                    icon={<FaBook />}
                    title="Courses"
                    description="Explore a variety of courses tailored to your career path."
                />
                <ServiceCard
                    icon={<FaPuzzlePiece />}
                    title="Quizzes"
                    description="Take quizzes to identify your interests and strengths."
                />
                <ServiceCard
                    icon={<FaVideo />}
                    title="Meetings"
                    description="Schedule video meetings with career mentors and professionals."
                />
                <ServiceCard
                    icon={<FaBriefcase />}
                    title="Career Recommendations"
                    description="Get personalized career suggestions based on your preferences."
                />
            </div>
      </div>

    </div>
  );
};

export default Services;