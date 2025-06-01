import React from 'react';
import H1 from '../components/H1';
import { Link } from 'react-router-dom';
import Gray from '../components/Gray';
import Role from '../components/Role';
import { useNavigate } from 'react-router-dom';

function RoleSelection() {
  const navigate = useNavigate();
  return (
  <div className='grid justify-items-center bg-gray-50 h-[100vh]'>
    <div className="grid  items-center place-content-end">
        <H1 className="m-auto mb-0">Choose Your Role</H1>
        <Gray className="m-auto mt-0">Select how you want to join our platform</Gray>
    </div>
    
    <div className='flex justify-items-center gap-10 items-center'>
      
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

    <div className='grid'>
      <p className='mr-2'>Already have an account? &nbsp; <Link to='/signin' className='font-bold'>Sign In</Link></p>
    </div>
  </div>
    

    
  );
}

export default RoleSelection;

