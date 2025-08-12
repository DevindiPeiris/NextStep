import H1 from '../components/H1';
import Gray from '../components/Gray';
import Input from '../components/Input';
import Button from '../components/Button';
import FileUpload from '../components/FileUpload'; 
import { Link } from 'react-router-dom';
import signUpLogo from '../assets/Logo_sm.png';
import signUpBack from '../assets/backArrow.png'


const CounsellorSignup = () => {
  return (
    <div className="signUp-container mx-0 md:mx-180">
            <div className="signUp-Logo flex items-center justify-center mt-7 md:mt-10">
                <img src={signUpLogo}/>
            </div>
            <div className='signUp-Back hidden md:flex items-center mt-5 pt-6'>
                <Link to="/"><img src={signUpBack}/></Link>
                <p className="text-[13px] text-[#6D6D6D] font-bold [font-family:'Montserrat',sans-serif] px-2">Home</p>        
            </div>
            <div className="mt-4 bg-white p-8 rounded-2xl shadow-md w-full max-w-m border border-[#d0daec]">
              <p className="text-[22px] font-bold text-center mb-2 [font-family:'Montserrat',sans-serif]">Join as Counselor</p>
              <div className="text-center mb-8">
                <Gray>Submit the request to register as a counselor</Gray>
              </div>
              <div className="mt-4">
                <label className="block text-md font-medium text-gray-900 mb-1 [font-family:'Montserrat',sans-serif]">Full Name</label>
                <Input placeholder="Enter your full name" />
                <label className="block text-md font-medium text-gray-900 mb-1 [font-family:'Montserrat',sans-serif]">Email</label>
                <Input placeholder="Enter your email" />
                <label className="block text-md font-medium text-gray-900 mb-1 [font-family:'Montserrat',sans-serif]">Contact</label>
                <Input placeholder="Enter your contact" />
                <label className="block text-md font-medium text-gray-900 mb-1 [font-family:'Montserrat',sans-serif]">Supporting Document(Proof)</label>
                <FileUpload placeholder="Supporting Document" />
                <div className='flex justify-center mt-8'>
                  <Button className="">Submit</Button>
                </div>
                <div className="text-center mt-4">
                  <p className="[font-family:'Montserrat',sans-serif]">Already have an account?{' '}
                  <Link to="/signin" className="font-semibold [font-family:'Montserrat',sans-serif] text-[#2560E0]">
                    Sign In
                  </Link>
            </p>
          </div>
        </div>
            </div>  

    </div>
  );
};

export default CounsellorSignup;

