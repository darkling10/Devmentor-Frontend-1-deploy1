import React from 'react'
import CommentCard from './CommentCard'
import CommentForm from './CommentForm'

import Loading from '../component/Loading';


function PublicReview({comments , id}) {
 
  return (
    <div className='w-full py-10'>
       <h1 className='font-semibold text-xl '>
        Public Review
        </h1>
        <div className="grid md:grid-cols-1  grid-cols-[8fr_4fr]">
        <div className="col md:grid-cols-1  gap-5 my-10 w-full grid grid-cols-2">
      {
        comments ? comments.map((ele)=>{
          return    <CommentCard data={ele} />
        }) : <Loading />
      }

        </div>
        <div className="col py-10 px-5 ">
          <CommentForm id={id} />
        </div>
        </div>
    </div>

  )
}

export default PublicReview