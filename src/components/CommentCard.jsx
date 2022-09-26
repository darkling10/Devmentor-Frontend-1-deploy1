import React from 'react'

function CommentCard({data}) {
  console.log(data)
  return (
    <div className='w-full min-h-[10vh] h-[max-content] bg-white  rounded-xl  grid grid-cols-[4fr_8fr]'>
   <div className="profile px-2 flex justify-center items-center py-5">
    <img className='w-16 h-16 rounded-full' src="https://cdnb.artstation.com/p/assets/images/images/034/457/411/large/shin-min-jeong-.jpg?1612345193" alt="" />
   </div>
  
   <div className="text py-5 px-2">
    <h1 className='text-[16px] capitalize font-semibold'>{data.name?data.name:"JohnDoe"}</h1>
    <p className='text-[14px] text-black/50'>{data?.Comment.slice(0,120)}</p>
   </div>
    </div>
  )
}

export default CommentCard