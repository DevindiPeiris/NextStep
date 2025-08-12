import React from 'react';
import H1 from '../components/H1';
import { Link } from 'react-router-dom';
import Gray from '../components/Gray';
import Role from '../components/Role';
import { useNavigate } from 'react-router-dom';
import signUpLogo from '../assets/Logo_sm.png';
import signUpBack from '../assets/backArrow.png'

function RoleSelection() {
  const navigate = useNavigate();
  return (
  <div className="mx-0 md:mx-80">
    <div className="signUp-Logo flex items-center justify-center mt-7 md:mt-20">
      <img src={signUpLogo}/>
    </div>
    <div className='signUp-Back hidden md:flex items-center pt-6'>
      <Link to="/"><img src={signUpBack}/></Link>
      <p className="text-[13px] text-[#6D6D6D] font-bold [font-family:'Montserrat',sans-serif] px-2">Home</p>        
    </div>
    
    <div className="mt-4 bg-white p-8 rounded-2xl shadow-md w-full max-w-m border border-[#d0daec]">
      <p className="text-[22px] font-bold text-center mt-8 mb-2 [font-family:'Montserrat',sans-serif]">Choose Your Role</p>
      <div className="text-center mb-8">
        <Gray>Select how you want to join our platform</Gray>
      </div>
    
      <div className='flex gap-20 justify-center items-center mt-20'>
      
      <Role
        title="Student"
        description="Get guidance for your career path"
        buttonText="Join as Student"
        onClick={() => navigate('/StudentSignUp')}
      />
      <Role
        title="Counsellor"
        description="Provide support and career advice to students"
        buttonText="Join as Counsellor"
        onClick={() => navigate('/Counsellorsignup')}
      />
    </div>

    <div className="flex justify-center mt-25 mb-15 [font-family:'Montserrat',sans-serif]">
      <p className='mr-2'>Already have an account? &nbsp; <Link to='/signin' className='font-semibold text-[#2560E0]'>Sign In</Link></p>
    </div>
  </div>
  </div>

    
  );
}

export default RoleSelection;

