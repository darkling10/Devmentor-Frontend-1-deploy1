import React from 'react'
import { Link } from 'react-router-dom'

function InterviewCard({data}) {
  
  return (
    <Link to={`/Interview_experiences/${data._id}`}>
    <div className='w-full cursor-pointer px-2.5  py-2.5 rounded-md bg-int '>
        <div className="w-full min-h-[10vh] flex p-5 backdrop-blur-md bg-black/20 rounded-md">
           <div className="w-16 bg-white flex justify-center items-center h-16 rounded-full">
           <img alt='meta' className='w-8 h-8 object-contain' src={data?.companyLogo}/>       
           </div>
           <div className="block mx-5">
            <h1 className='font-semibold text-white'>{data?.role}</h1>
            <h1 className=' text-white/70'>at {data?.company}</h1>

           </div>
         </div>
        <div className="flex justify-between items-center my-2.5">
            <h1 className="ctc font-semibold text-white"><i className='bx bx-money pr-2' ></i> {data?.ctc} LPA</h1>
            <h1 className="ctc font-semibold text-white"><i className='bx bxs-user-badge pr-2'></i>{data?.onCampus?"On Campus":"Off Campus"}</h1>
        </div>
        

    </div>
    </Link>
  )
}

export default InterviewCard