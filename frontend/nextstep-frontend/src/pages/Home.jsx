import H1 from '../components/H1';
import Gray from '../components/Gray';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import pic1 from '../assets/123.jpg';
import { Link, useNavigate } from 'react-router-dom';
import MainImg from '../assets/c.jpeg';
import HomepageBackground from '../assets/HomepageBackground1.png'
import NextStepLogo from '../assets/NextStepLogo1.png'
import { HiArrowNarrowRight } from 'react-icons/hi';
import coursepic from '../assets/course.png';
import chatbotpic from '../assets/chatbot.png';
import quizpic from '../assets/quiz.png';
import counsellorpic from '../assets/counsellor.png';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Homepage - Introduction Section*/}
      <section style={{ backgroundImage: `url(${HomepageBackground})` }} className="bg-cover bg-center min-h-screen">
        <div className='pr-[6%] py-[4%]'>
          <div className="flex justify-end space-x-4">
            <Link to="/signin" 
            className="bg-[#2560E0] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#1b54c2] transition duration-200 text-sm md:text-base">
              Sign In
            </Link>
            <Link to="/roleselection"
            className="bg-white text-[#2560E0] border border-[#2263DD] px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition duration-200 text-sm md:text-base">
              Sign Up
            </Link>
          </div>
          <div>
            <img src={NextStepLogo} alt="Logo"/>
          </div>
          <div className='flex flex-col items-center pl-[6%]'>
            <span className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-extrabold text-white mt-[5%] bg-[#2560E099] px-[2%] py-[0.2%] [font-family:'Montserrat',sans-serif]" >Shape Your Future with</span>
            <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#212C3C] mt-[1%] [font-family:'Montserra',sans-serif]" style={{WebkitTextStroke: '1px white'}} > Expert Guidance</span>
            <span className="text-white text-2xl font-semibold mt-[7%] [font-family:'Montserrat',sans-serif]" > Get personalized career counseling, explore courses, and make<br/>informed decisions about your educational 
            path with NextStep.</span>
          </div>
          <div className="flex flex-col items-center pl-[6%] pt-[3%]">
          <button className="flex items-center gap-3 bg-[#2263DD] text-white px-25 py-3 rounded-full font-semibold text-base md:text-lg hover:bg-[#1b54c2] 
          transition duration-200 [font-family:'Montserrat',sans-serif] shadow-md" onClick={() => navigate('/roleselection')}>
            Get Started<HiArrowNarrowRight className="text-xl md:text-2xl mt-[1px]" />
          </button>
        </div>
        </div>

        
      </section>

      {/* Services Section */}
      <section className="p-20 mx-[6%]">
        <h2 className="text-5xl font-bold text-center mb-8 text-gray-900 [font-family:'Montserrat',sans-serif]">Our Services</h2>
        <div className="flex justify-center">
          <span className="text-xl text-center text-[#6D6D6D]">Comprehensive career guidance tools and resources to help you make <br/>informed decisions about your future</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-25 ">
          <ServiceCard
            img={coursepic}
            title="Course Search"
            description="Find the perfect course that matches your interests and goals."
          />
          <ServiceCard
            img={quizpic}
            title="Career Quiz"
            description="Discover your career interests with our personalized quiz."
          />
          <ServiceCard
            img={chatbotpic}
            title="Career Chatbot"
            description="Get instant answers to your career and education questions."
          />
          <ServiceCard
            img={counsellorpic}
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