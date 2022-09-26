import React, { useEffect, useState } from 'react'
import PublicReview from '../components/PublicReview'
import {useParams} from 'react-router-dom'
import { ROOT_URL } from '../context/Actions';
import Loading from '../component/Loading';
function CourseDetail() {
  const {id} = useParams();
  const [callVal, setcallVal] = useState(true);
  const [Course, setCourse] = useState(null);
  const [stats, setstats] = useState(null);
  const [HideBar, setHideBar] = useState(true);
  useEffect(() => {
    async function getCourse(){
      const data = await fetch(`${ROOT_URL}/user/coursebyid?id=${id}`).then((ele)=>{
        return ele.json();
      })
      console.log(data)
      setCourse(data)

      const likes = data.likes;
      const dislike= data.disLikes;
      
      const likePercentage = (likes/(likes+dislike))*100;
      const dislikePercentage = (dislike/(likes+dislike))*100;
      if(likes ===  0  && dislike === 0){
        setHideBar(false)
      }

      setstats({
        likePercentage , dislikePercentage
      })
    }
    getCourse()
   }, [id,callVal]);

  return (
    <div className='w-full bg-blue-50 '>
    
       <div className="bg-img w-full p-10 min-h-[30vh] flex justify-center items-center">

        <h1 className='font-bold text-white text-4xl sm:text-2xl'>{Course?.title}</h1>

       </div>
      <div className="w-[75%] mx-auto ">
      <div className="grid my-10 grid-cols-3 sm:grid-cols-1">
        <div className="col  flex justify-start items-center">
          <h1 className='font-semibold text-[16px] text-black'>Category - </h1>
          <p className='px-2 flex justify-center items-center text-[16px] text-black/50'>
            {Course?.category}</p>
        </div>
    
        <div className="col  flex justify-center items-center">
          <h1 className='font-semibold text-[16px] text-black'>Language - </h1>
          <img className='w-8 h-8 mx-2' alt='' src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${Course?.language.toLowerCase()}/${Course?.language.toLowerCase()}-original.svg`} />

          <p className='px-2 text-[16px] text-black/50'>{Course?.language}</p>
        </div>

        <div className="col  flex justify-end items-center">
          <h1 className='font-semibold text-[16px] text-black'> Platform - </h1>
          <p className='px-2 text-[16px] text-black/50'>Udemy</p>
        </div>
    
       </div>

       <div className="text">
        <h1 className='font-semibold text-xl'>Description - </h1>
        <p className='py-5 text-sm text-black/50'>
                {
                  Course?.description
                }
        </p>

        <div className="grid my-5 w-full grid-cols-2">
          <div className="col">
            <h1 className='font-semibold text-xl'>Pros</h1>
           <div className="pro text-black/50   p-2.5">

{
         Course?.pros.map((ele)=>{
          return            <li className='mx-2.5 '>{ele}</li>
         })
}
           </div>

          </div>
          <div className="col">
          <h1 className='font-semibold text-xl'>Cons</h1>
           <div className="pro text-black/50  p-2.5">
           {
         Course?.cons.map((ele)=>{
          return            <li className='mx-2.5 '>{ele}</li>
         })
         }
      
           </div>


          </div>

        </div>
        
        <h1 className='font-semibold my-5 text-xl'>

          Should you take this course
        </h1>
     { 
    
    HideBar && Course && stats ? <div className="section">
    <div className="w-full bg-red-500 h-4 my-5 rounded-md">
          <div className={`w-[${stats?.likePercentage.toFixed()}%] transition-all bg-green-500 rounded-md h-4`}></div>
    </div>

    <div className="flex w-full justify-between">
     <h1  className='font-semibold '>Yes - <span className='text-black/50'>{stats?.likePercentage.toFixed(2)} % </span></h1>
   
     <h1  className='font-semibold '>No - <span className='text-black/50'>{stats?.dislikePercentage.toFixed(2)} % </span></h1>

    </div>

    </div>: <p className='w-full text-center font-semibold'> Not Enough Data </p> 
     
     }

     
       <PublicReview call={callVal} setcall={setcallVal} comments={Course?.Comments} id={Course?._id} />
       

      

       </div>
      </div>
    </div>
  )
}

export default CourseDetail