import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ServiceCard from '../components/ServiceCard';
import { FaBook, FaPuzzlePiece, FaVideo, FaBriefcase } from 'react-icons/fa';


const Services = () => {
  return (
    <div className="min-h-screen bg-gray-100 mr-25 ml-25">
      <Navbar/>

      <div className="flex justify-center md:mt-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-25 w-full max-w-4xl">
          <Link to="/courses">
            <ServiceCard
              icon={<FaBook />}
              title="Courses"
              description="Explore a variety of courses tailored to your career path."
            />
          </Link>
          <Link to="/quiz">
            <ServiceCard
              icon={<FaPuzzlePiece />}
              title="Quizzes"
              description="Take quizzes to identify your interests and strengths."
            />
          </Link>
          <Link to="/meetings">
            <ServiceCard
              icon={<FaVideo />}
              title="Meetings"
              description="Schedule video meetings with career mentors and professionals."
            />
          </Link>
          <Link to="/chatbot">
            <ServiceCard
              icon={<FaBriefcase />}
              title="Career Recommendations"
              description="Get personalized career suggestions based on your preferences."
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
