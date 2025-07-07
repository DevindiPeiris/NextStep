import H1 from '../components/H1';
import Gray from '../components/Gray';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import pic1 from '../assets/123.jpg';
import { Link, useNavigate } from 'react-router-dom';
import MainImg from '../assets/c.jpeg';
import HomepageBackground from '../assets/HomepageBackground.png'
import NextStepLogo from '../assets/NextStepLogo.png'
import { HiArrowNarrowRight } from 'react-icons/hi';


const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Homepage - Introduction Section*/}
      <section style={{ backgroundImage: `url(${HomepageBackground})` }} className="bg-cover bg-center min-h-screen">
        <div className="flex flex-col md:flex-row items-center justify-between px-[6%] py-4 gap-4 md:gap-0 md:pt-[4%]">
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-x-0 sm:space-x-4 text-center sm:text-left">
            <img src={NextStepLogo} alt="Logo" className="w-24 sm:w-28 md:w-32 object-contain"/>
            <div className="leading-tight mt-2 sm:mt-0">
              <div className="text-[#0F172A] text-2xl sm:text-3xl md:text-[2.5rem] font-extrabold md:mt-[10%]">NextStep</div>
              <div className="text-[#2560E0] text-sm sm:text-base md:text-lg font-semibold tracking-widest uppercase">Career Guidance</div>
            </div>
          </div>
          <div className="flex space-x-4">
            <Link to="/signin" 
            className="bg-[#2560E0] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#1b54c2] transition duration-200 text-sm md:text-base">
              Sign In
            </Link>
            <Link to="/roleselection"
            className="bg-white text-[#2560E0] border border-[#2263DD] px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition duration-200 text-sm md:text-base">
              Sign Up
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center pt-[2%]">
          <span className="text-3xl sm:text-3xl md:text-6xl lg:text-7xl font-extrabold" style={{WebkitTextStroke: '1.5px #2560E0',WebkitTextFillColor: 'white'}}>Shape Your Future with</span><br/>
          <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold" style={{WebkitTextStroke: '1px white',WebkitTextFillColor: '#2560E0'}}>Expert Guidance</span>
          <span className="[font-family:'Montserrat',sans-serif] text-white font-semibold text-base sm:text-lg md:text-xl pt-[4%]   sm:tracking-widest md:tracking-[0.25em] text-center mx-auto">
            Get personalized career counseling, explore courses, and make<br/>informed decisions about your educational 
            path with NextStep.</span>
        </div>
        <div className="flex flex-col items-center pt-[5%]">
          <button className="flex items-center gap-3 bg-[#2263DD] text-white px-25 py-3 rounded-full font-semibold text-base md:text-lg hover:bg-[#1b54c2] 
          transition duration-200 [font-family:'Montserrat',sans-serif] shadow-md" onClick={() => navigate('/roleselection')}>
            Get Started<HiArrowNarrowRight className="text-xl md:text-2xl mt-[1px]" />
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="p-20">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20">
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
      <section className="p-20 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
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
      <section className="p-20 bg-gradient-to-r from-gray-700 to-gray-900 text-center text-white">
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

export default Home;