import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ServiceCard from '../components/ServiceCard';
import { FaBook, FaPuzzlePiece, FaVideo, FaBriefcase } from 'react-icons/fa';
import coursepic from '../assets/course.png';
import chatbotpic from '../assets/chatbot.png';
import quizpic from '../assets/quiz.png';
import counsellorpic from '../assets/counsellor.png';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar/>

      <div className="flex justify-center md:mt-25">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-25 w-full max-w-4xl">
          <Link to="/courses">
            <ServiceCard
            img={coursepic}
            title="Course Search"
            description="Find the perfect course that matches your interests and goals."
          />
          </Link>
          <Link to="/quiz">
            <ServiceCard
            img={quizpic}
            title="Career Quiz"
            description="Discover your career interests with our personalized quiz."
          />
          </Link>
          <Link to="/meetings">
            <ServiceCard
            img={counsellorpic}
            title="Book a Counselor"
            description="Schedule a one-on-one session with a professional career counselor."
          />
          </Link>
          <Link to="/chatbot">
            <ServiceCard
            img={chatbotpic}
            title="Career Chatbot"
            description="Get personalized career suggestions based on your preferences."
          />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
