import H1 from '../components/H1';
import Gray from '../components/Gray';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import pic1 from '../assets/123.jpg';
import { Link, useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 mr-25 ml-25">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white shadow">
        <div className="text-2xl font-bold text-gray-900">NextStep</div>
        <div className="space-x-4">
          <Link
            to="/signin"
            className="text-gray-600 hover:text-gray-900"
            onClick={() => navigate('/signin')}
          >
            Sign In
          </Link>
          <Link
            to="/roleselection"
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
            onClick={() => navigate('/roleselection')}
          >
            Sign Up
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between p-8 bg-gradient-to-r from-gray-700 to-gray-900 text-white">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <H1>Shape Your Future with Expert Guidance</H1>
          <Gray>
            Get personalized career counseling, explore courses, and make
            informed decisions about your educational paths.
          </Gray>
          <div className="mt-6">
            <Button
              className="w-auto md:w-[400px] px-6 mx-auto"
              onClick={() => navigate('/roleselection')}
            >
              Get Started
            </Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src={pic1}
            alt="Career Guidance"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="p-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <ServiceCard
            icon="🔍"
            title="Course Search"
            description="Find the perfect course that matches your interests and goals."
          />
          <ServiceCard
            icon="📚"
            title="Career Quiz"
            description="Discover your career interests with our personalized quiz."
          />
          <ServiceCard
            icon="💬"
            title="Career Chatbot"
            description="Get instant answers to your career and education questions."
          />
          <ServiceCard
            icon="📅"
            title="Book a Counselor"
            description="Schedule a one-on-one session with a professional career counselor."
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="p-8 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <span className="text-gray-800 text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Create Your Account</h3>
            <Gray>
              Register as a student to access all our career guidance services.
            </Gray>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <span className="text-gray-800 text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Explore Your Options</h3>
            <Gray>
              Take our career quiz, search for courses, or chat with our career
              bot.
            </Gray>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center mb-4">
              <span className="text-white text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Get Expert Advice</h3>
            <Gray>
              Book sessions with experienced counselors for personalized
              guidance.
            </Gray>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="p-8 bg-gradient-to-r from-gray-700 to-gray-900 text-center text-white">
        <H1>Ready to Shape Your Future?</H1>
        <Gray>
          Join thousands of students who have found their perfect career path
          with our guidance.
        </Gray>
        <div className="mt-6">
          <Button
            className="w-auto px-6"
            onClick={() => navigate('/roleselection')}
          >
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;