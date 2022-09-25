import React from 'react'
import PublicReview from '../components/PublicReview'

function CourseDetail() {
  return (
    <div className='w-full bg-blue-50 '>
       <div className="bg-img w-full p-10 min-h-[30vh] flex justify-center items-center">

        <h1 className='font-bold text-white text-5xl sm:text-2xl'>Zero To Mastery Bootcamp</h1>

       </div>
      <div className="w-[75%] mx-auto ">
      <div className="grid my-10 grid-cols-3 sm:grid-cols-1">
        <div className="col  flex justify-start items-center">
          <h1 className='font-semibold text-[16px] text-black'>Category - </h1>
          <p className='px-2 text-[16px] text-black/50'>Programming Fundamental</p>
        </div>
    
        <div className="col  flex justify-center items-center">
          <h1 className='font-semibold text-[16px] text-black'>Language - </h1>
          <p className='px-2 text-[16px] text-black/50'>Python </p>
        </div>
        <div className="col  flex justify-end items-center">
          <h1 className='font-semibold text-[16px] text-black'> Platform - </h1>
          <p className='px-2 text-[16px] text-black/50'>Udemy</p>
        </div>
    
       </div>

       <div className="text">
        <h1 className='font-semibold text-xl'>Description - </h1>
        <p className='py-5 text-sm text-black/50'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt magni in, odio, at, optio nostrum facere perferendis quis mollitia aut dolorem ducimus officia non. Soluta, quas molestias. Sequi officia, dolor distinctio eius accusamus quisquam odio non sed suscipit recusandae exercitationem iste laborum consectetur dolorum nesciunt officiis excepturi praesentium id voluptates nobis perferendis beatae repellendus soluta. Est facilis dolorum sit, quidem asperiores nisi error quia ratione quam totam harum id architecto adipisci optio, odit incidunt sunt rem perferendis quis illum ipsum aut quibusdam necessitatibus similique. Voluptates laudantium numquam nostrum suscipit, doloribus possimus, nobis quidem illum doloremque earum officia eligendi ea nemo, accusantium ipsa reprehenderit repellat? Dicta corrupti, hic quaerat distinctio sit dolorem odit similique quam odio tempore! Harum laudantium necessitatibus neque magni labore odio numquam animi magnam in, assumenda eum earum eveniet! Nobis vitae ut cum iure laboriosam? Eos quidem quis, tenetur unde doloribus soluta consectetur repellendus vitae neque sint, iusto quibusdam vel inventore quam, atque pariatur distinctio laudantium eligendi debitis ipsa voluptates quas culpa. Eum dolores architecto sapiente. Voluptate, ad? Quam minima dignissimos a natus ab suscipit, pariatur quis non nihil iure animi? Reiciendis neque voluptas necessitatibus! Aperiam ab magni est dicta quia amet. Placeat nisi est accusantium ex quaerat.
        </p>

        <div className="grid my-5 w-full grid-cols-2">
          <div className="col">
            <h1 className='font-semibold text-xl'>Pros</h1>
           <div className="pro text-black/50   p-2.5">
           <li className='mx-2.5 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non consequatur minima aliquid at rem, sit hic amet tempore numquam sint! </li>

           <li className='mx-2.5 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non consequatur minima aliquid at rem, sit hic amet tempore numquam sint! </li>
           
           <li className='mx-2.5 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non consequatur minima aliquid at rem, sit hic amet tempore numquam sint! </li>
           
           <li className='mx-2.5 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non consequatur minima aliquid at rem, sit hic amet tempore numquam sint! </li>
           
           </div>

          </div>
          <div className="col">
          <h1 className='font-semibold text-xl'>Cons</h1>
           <div className="pro text-black/50  p-2.5">
           <li className='mx-2.5 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non consequatur minima aliquid at rem, sit hic amet tempore numquam sint! </li>

           <li className='mx-2.5 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non consequatur minima aliquid at rem, sit hic amet tempore numquam sint! </li>
           
           <li className='mx-2.5 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non consequatur minima aliquid at rem, sit hic amet tempore numquam sint! </li>
           
           <li className='mx-2.5 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non consequatur minima aliquid at rem, sit hic amet tempore numquam sint! </li>
           
           </div>


          </div>

        </div>
        
        <h1 className='font-semibold my-5 text-xl'>

          Should you take this course
        </h1>
       <div className="w-full bg-red-500 h-4 my-5 rounded-md">
             <div className="w-8/12 bg-green-500 rounded-md h-4"></div>
       </div>

       <div className="flex w-full justify-between">
        <h1  className='font-semibold '>Yes - <span className='text-black/50'>75%</span></h1>
      
        <h1  className='font-semibold '>No - <span className='text-black/50'>25%</span></h1>
  
       </div>

       <PublicReview />
       
       </div>
      </div>
    </div>
  )
}

export default CourseDetail