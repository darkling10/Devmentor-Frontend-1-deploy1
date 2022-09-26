import React, { useEffect, useState } from 'react'
import CommentCard from './CommentCard'
import CommentForm from './CommentForm'

import Loading from '../component/Loading';

function PublicReview({comments , id , call , setcall}) {
  useEffect(()=>{
    console.log("reload")
  },[call])
  const [val, setval] = useState({
    like:false,
    dislike:false
  });

  const like = ()=>{
    setval({dislike:false,like:true})
    console.log(val.like)
  }
  const Dislike = ()=>{
    setval({dislike:false,like:true})
  }
  return (
    <div className='w-full py-10'>
       
        <div className="flex justify-between items-center w-full">
        <h1 className='font-semibold text-xl '>
        Public Review
        </h1>
        <div className="like">
          <button className='mx-2 text-2xl' onClick={()=>like()}><i class='bx bx-like'></i></button>
          <button className='mx-2 text-2xl' onClick={()=>Dislike()}><i class='bx bx-dislike'></i></button>

        </div>
       </div>
        <div className="grid md:grid-cols-1  grid-cols-[8fr_4fr]">
        <div className="col md:grid-cols-1  gap-5 my-10 w-full grid grid-cols-2">
      {
        comments ? comments.map((ele)=>{
          return    <CommentCard data={ele} />
        }) : <Loading />
      }

        </div>
        <div className="col py-10 px-5 ">
          <CommentForm call={call}  setcall={setcall} id={id} />
        </div>
        </div>
    </div>

  )
}

export default PublicReview