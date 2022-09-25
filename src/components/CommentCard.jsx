import React from 'react'

function CommentCard() {
  return (
    <div className='w-full bg-white  rounded-xl  grid grid-cols-[4fr_8fr]'>
   <div className="profile px-2 flex justify-center items-center py-5">
    <img className='w-16 h-16 rounded-full' src="https://cdnb.artstation.com/p/assets/images/images/034/457/411/large/shin-min-jeong-.jpg?1612345193" alt="" />
   </div>
  
   <div className="text py-5 px-2">
    <h1 className='text-[16px] font-semibold'>Vinit Khollam</h1>
    <p className='text-[14px] text-black/50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corrupti impedit asperiores iusto tempore similique!</p>
   </div>
    </div>
  )
}

export default CommentCard