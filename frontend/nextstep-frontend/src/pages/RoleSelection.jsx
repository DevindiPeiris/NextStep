import React from 'react';

function RoleSelection() {
  return (
  <div className='grid justify-items-center bg-gray-50 h-[100vh]'>
    <div className="grid  items-center place-content-end">
        <h1 className="text-4xl font-bold text-black m-auto mb-0">Choose Your Role</h1>
        <p className="text-base text-gray-400 m-auto mt-0">Select how you want to join our platform</p>
    </div>
    
    <div className='flex justify-items-center gap-10 items-center'>
      <div className='max-w-sm rounded-xl shadow-lg bg-white py-10 px-15 m-auto'>
        <h2 className='text-3xl font-bold text-black'>Student</h2>
        <p className='text-base text-gray-400 mb-3'>Get guidance for your career path</p>
        <button className='bg-black text-white rounded w-full py-1.5 font-semibold'>Join as Student</button>
      </div>
    
      <div className='max-w-sm rounded-xl shadow-lg bg-white py-10 px-15 m-auto'>
        <h2 className='text-3xl font-bold text-black'>Counselor</h2>
        <p className='text-base text-gray-400 mb-3'>Help students with your expertise</p>
        <button className='bg-black text-white rounded w-full py-1.5 font-semibold'>Join as Counselor</button>
      </div>
    </div>

    <div className='grid'>
      <p className='mr-2'>Already have an account? &nbsp; <a className='font-bold' href=''>Sign In</a></p>
  
    </div>
  </div>
    

    
  );
}

export default RoleSelection;

