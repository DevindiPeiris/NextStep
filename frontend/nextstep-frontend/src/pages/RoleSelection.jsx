import React from 'react';

function RoleSelection() {
  return (
  <div className='bg-gray-50 '>
    <div className="flex flex-col items-center justify-center mt-50">
        <h1 className="text-4xl font-bold text-black">Choose Your Role</h1>
        <p className="text-base text-gray-400 mt-2 mb-15">Select how you want to join our platform</p>
    </div>
    
    <div className='flex flex-rows justify-center gap-6'>
      <div className='max-w-sm rounded-xl shadow-lg bg-white p-5'>
        <h2 className='text-3xl font-bold text-black'>Student</h2>
        <p className='text-base text-gray-400 mb-3'>Get guidance for your career path</p>
        <button className='bg-black text-white rounded w-full py-1.5 font-semibold'>Join as Student</button>
      </div>
    
      <div className='max-w-sm rounded-xl shadow-lg bg-white p-6'>
        <h2 className='text-3xl font-bold text-black'>Counselor</h2>
        <p className='text-base text-gray-400 mb-3'>Help students with your expertise</p>
        <button className='bg-black text-white rounded w-full py-1.5 font-semibold'>Join as Counselor</button>
      </div>
    </div>

    <div className='flex flex-rows justify-center'>
      <p className='mr-2'>Already have an account?</p>
      <a className='font-bold' href=''>Sign In</a>
    </div>
  </div>
    

    
  );
}

export default RoleSelection;

