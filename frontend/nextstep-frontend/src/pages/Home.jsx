import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
    
  return (
    <div className='mt-25 ml-25'>
      <h1>Welcome</h1> <br/>
      <button
        onClick={() => navigate('/signin')}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Sign In
      </button>
      <button
        onClick={() => navigate('/roleselection')}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Sign Up
      </button>
    </div>
  )
}

export default Home
