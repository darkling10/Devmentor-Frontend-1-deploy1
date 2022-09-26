import React from 'react'
import InterviewFilter from '../components/InterviewFilter'

function InterviewExp() {
  return (
    <div className='w-full bg-blue-50/70 min-h-screen '>

    <div className="w-full py-10 min-h-[40vh] bg-int">
        <div className="flex items-center justify-center w-full min-h-[20vh]">
        <h1 className='w-full text-center font-semibold text-4xl text-white'>Interview Experiences</h1>
        </div>
    </div>

    <InterviewFilter />

    </div>
  )
}

export default InterviewExp