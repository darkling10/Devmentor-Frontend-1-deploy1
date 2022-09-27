import React, { useEffect, useState } from 'react'
import InterviewCard from '../components/InterviewCard'
import InterviewFilter from '../components/InterviewFilter'
import { useInterviewContext } from '../context/InterviewContext'
import {Link} from 'react-router-dom'
import CustomLoading from '../components/CustomLoading'
import img from './Noresult.png'

function InterviewExp() {
 const data = useInterviewContext();
  const [interviews, setinterviews] = useState(null);
  const [setFiltered, setsetFiltered] = useState(false);

  useEffect(()=>{
    if(setFiltered===false){
      setinterviews(data)
    }
    
 
  },[data,setFiltered])

  return (
    <div className='w-full pb-10 bg-blue-50/70 min-h-screen '>

<Link to={'/postinterviewexp'}>
<button className='w-16 h-16 shadow-xl bottom-10 right-10 bg-primary rounded-full flex justify-center items-center text-white fixed'>
    <i className='bx text-3xl  bxs-plus-circle'></i>
    </button>
</Link>
    <div className="w-full py-10 min-h-[40vh] bg-int">
        <div className="flex items-center justify-center w-full min-h-[20vh]">
        <h1 className='w-full text-center font-semibold text-4xl text-white'>Interview Experiences</h1>
        </div>
    </div>

    <InterviewFilter setInteview={setinterviews} setFilter = {setsetFiltered}  />
    {
      interviews?.length === 0 ?
     ( <div className="mx-auto w-full flex flex-col justify-center items-center">
        <img src={img}  alt="" />
        <h1 className='font-semibold'>No Results Found</h1>
      </div>) : null
    }
    <div className="grid my-5 grid-cols-3 gap-5 mx-auto w-[75%]">
    {
      interviews ? interviews.map((info,idx)=>{
        return <InterviewCard key={idx} data={info} />
      }):<CustomLoading msg={"Requesting Interviews"} />
    }

    </div>
    

    </div>
  )
}

export default InterviewExp