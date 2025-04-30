import React from 'react'

function MyTest() {
  return (
    <div className='grid gap-10 justify-items-center mt-35'>
      <div className='grid justify-items-center bg-red-400 h-50 w-100'>
        <div className='bg-amber-800 h-20 w-80 m-auto'></div>
        <div className='bg-blue-200 h-20 w-80 m-auto'></div>
      </div>
      <div className='flex items-center  bg-yellow-400 h-50 w-100'>
        <div className='bg-blue-200 h-20 w-40 m-auto'></div>
        <div className='bg-blue-900 h-20 w-40 m-auto'></div>
      </div>
      <div className='grid justify-items-center bg-green-400 h-50 w-100'>
      <div className='bg-blue-200 h-20 w-80 m-auto'></div>
      </div>
    </div>
  )
}

export default MyTest
