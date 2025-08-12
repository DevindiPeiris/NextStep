import H1 from '../components/H1';
import Gray from '../components/Gray';
import Input from '../components/Input';
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import signUpLogo from '../assets/Logo_sm.png';
import signUpBack from '../assets/backArrow.png'


const Signin = () => {
  const navigate = useNavigate();
  return (
    <div className="signIn-container mx-0 md:mx-140 ">
            <div className="signUp-Logo flex items-center justify-center mt-7 md:mt-10">
                <img src={signUpLogo}/>
            </div>
            <div className='signUp-Back hidden md:flex items-center mt-5 pt-6'>
                <Link to="/"><img src={signUpBack}/></Link>
                <p className="text-[13px] text-[#6D6D6D] font-bold [font-family:'Montserrat',sans-serif] px-2">Home</p>        
            </div>
            <div className="mt-4 bg-white p-15 rounded-2xl shadow-md w-full max-w-m border border-[#d0daec]">
              <p className="text-[22px] font-bold text-center mb-2 [font-family:'Montserrat',sans-serif]">Welcome Back</p>
              <div className="text-center mb-12">
                <Gray>Sign In to your NextStep Account</Gray>
              </div>
              <div className="px-40">
                <label className="block text-md font-medium text-gray-900 mb-1 [font-family:'Montserrat',sans-serif]">Username</label>
                <Input placeholder="Enter your username" />
                <label className="block text-md font-medium text-gray-900 mb-1 [font-family:'Montserrat',sans-serif]">Password</label>
                <Input placeholder="Enter your password " type="password" />
                <div className='flex justify-center'><Button className="mt-8" onClick={() => navigate('/services')}>Sign In</Button></div>
                <div className="text-center mt-6">
                  <p className="[font-family:'Montserrat',sans-serif]"> Don't have an account?{' '}
                    <Link to="/roleselection" className="font-semibold text-[#2560E0]">Sign Up </Link>
                  </p>
                </div>
              </div>
            </div> 
                   
    </div>
  );
};

export default Signin;