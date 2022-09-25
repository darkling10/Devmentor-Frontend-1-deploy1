import React from 'react'
import { useAuthState } from '../context/AuthContext';



export const Header = () => {
  const user = useAuthState()
  const userDetail = user?.userDetails;

  
  
  return (
    <div className=" h-[10vh] py-5 w-full flex flex-row justify-evenly items-center text-slate-400 text-xl bg-white">
      <div className="flex flex-row gap-3 items-center">
      <i className='bx bxl-dev-to text-3xl text-black'></i>
        <span className="text-black font-semibold text-lg">Mentor</span>
      </div>
      <div className="flex cursor-pointer flex-row justify-evenly w-auto gap-10 px-15">
        <p className='text-sm hover:text-black' >Courses</p >
        <p className='text-sm hover:text-black' >Interview Experiences</p >
        <p className='text-sm hover:text-black' >Youtube Guide</p >
        <p className='text-sm hover:text-black' >Tech Guide</p>
      </div>
      <div className="flex flex-row gap-3 items-center ">
        <img src={"https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/06fbe298931623.5ee79b6a90221.jpg"} className="w-12 h-12 rounded-full" alt="" />
       <span className="text-black font-medium capitalize text-xl">{userDetail.name?userDetail.name:"No User"}</span>
       <div className="mx-5 text-black">
       <i class='bx bx-log-in-circle text-xl cursor-pointer' ></i>
       </div>
      </div>
    </div>
  );
};
