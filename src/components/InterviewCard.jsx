import React from 'react'
import { Link } from 'react-router-dom'

function InterviewCard({data}) {
  return (
    <Link to={'/Interview_experiences/1'}>
    <div className='w-full cursor-pointer px-2.5  py-2.5 rounded-md bg-int '>
        <div className="w-full min-h-[10vh] flex p-5 backdrop-blur-md bg-black/20 rounded-md">
           <div className="w-12 bg-white flex justify-center items-center h-12 rounded-full">
           <img alt='meta' className='w-6 h-6' src="https://img.icons8.com/fluency/48/000000/meta.png"/>       
           </div>
           <div className="block mx-5">
            <h1 className='font-semibold text-white'>Software Engineer</h1>
            <h1 className=' text-white/70'>at Meta</h1>

           </div>
         </div>
        <div className="flex justify-between items-center my-2.5">
            <h1 className="ctc font-semibold text-white"><i class='bx bx-money pr-2' ></i> 20 LPA</h1>
            <h1 className="ctc font-semibold text-white"><i class='bx bxs-user-badge'></i> Off Campus</h1>
        </div>
        

    </div>
    </Link>
  )
}

export default InterviewCard