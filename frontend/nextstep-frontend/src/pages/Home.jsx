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
        <div className='md:pr-[6%] md:py-[4%] '>
          <div className="hidden md:flex justify-end space-x-4">
            <Link to="/signin" 
            className="bg-[#2560E0] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#1b54c2] transition duration-200 text-sm md:text-base">
              Sign In
            </Link>
            <Link to="/roleselection"
            className="bg-white text-[#2560E0] border border-[#2263DD] px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition duration-200 text-sm md:text-base">
              Sign Up
            </Link>
          </div>
          <div className=''>
            <img src={NextStepLogo} alt="Logo"/>
          </div>
          <div className='flex flex-col items-center  md:pl-[6%]'>
            <span className="text-xl md:text-6xl lg:text-5xl font-extrabold text-white mt-[15%] md:mt-[5%]  bg-[#2560E099] px-[5%] md:px-[2%] py-[1%] md:py-[0.2%] [font-family:'Montserrat',sans-serif]" >Shape Your Future with</span>
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#212C3C] mt-[3%] md:mt-[1%] [font-family:'Montserra',sans-serif]" style={{WebkitTextStroke: '1px white'}} > Expert Guidance</span>
            <span className="text-white text-lg md:text-2xl bg-[#0e2b4766] md:bg-transparent  text-center font-semibold mt-[12%] md:mt-[7%] [font-family:'Montserrat',sans-serif] py-[70px] md:py-0" > Get personalized career counseling, explore courses, and make<br/>informed decisions about your educational 
            path with NextStep.</span>
          </div>
          <div className="flex flex-col items-center pl-0 md:pl-[6%] pt-[3%] mt-[95px] md:mt-0">
          <button className="flex items-center gap-3 bg-[#2263DD] text-white px-25 py-3 rounded-full font-semibold text-base md:text-lg hover:bg-[#1b54c2] 
          transition duration-200 [font-family:'Montserrat',sans-serif] shadow-md" onClick={() => navigate('/roleselection')}>
            Get Started<HiArrowNarrowRight className="text-xl md:text-2xl mt-[1px]" />
          </button>
        </div>
        </div>

        
      </section>

      {/* Services Section */}
      <section className="p-20 mx-[6%]">
        <h2 className="text-2xl md:text-5xl font-bold text-center mb-8 text-gray-900 [font-family:'Montserrat',sans-serif]">Our Services</h2>
        <div className="flex justify-center">
          <span className="text-base md:text-xl text-center text-[#6D6D6D]">Comprehensive career guidance tools and resources to help you make <br/>informed decisions about your future</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-10 md:mt-20 ">
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