import React from 'react'
import FilterComponent from '../components/FilterComponent'

function Courses() {
  return (
    <div className='w-full min-h-screen bg-blue-50'>
   
    <div className="bg-img w-full  p-10 ">
         <div className="w-[75%] min-h-[40vh] text-white mx-auto grid grid-cols-[5fr_7fr]">
            <div className="col w-full h-full flex justify-start items-center">
            <h1 className='font-bold text-4xl'>Courses Review</h1>
            </div>

            <div className="col w-full h-full flex justify-end items-center text-left">
            <p className='text-2xl text-white/70'>Get a curated list of courses required to atain the mastery by taking courses which are choosen by developers for the developers ..</p>
            </div>

        </div>
    </div>

  <div className="w-[70%] z-50 mx-auto mt-[-10vh]">
   <FilterComponent />
  </div>
 
    </div>
  )
}

export default Courses