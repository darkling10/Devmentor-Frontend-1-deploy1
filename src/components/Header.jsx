import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from '../context/AuthContext';
import {logout} from '../context/Actions'

export const Header = () => {
  const {user} = useAuthState()

  
const navigate = useNavigate()
  return (
 <div className='w-full bg-white'>
     <div className=" min-h-[10vh] py-5 w-[75%] mx-auto flex flex-row justify-between items-center text-slate-400 text-xl bg-white">
      <div className="flex flex-row items-center">
      <i className='bx bxl-dev-to text-3xl text-black'></i>
        <span className="text-black font-semibold text-lg">Mentor</span>
      </div>
      <div className="flex sm:hidden cursor-pointer flex-row justify-evenly w-auto gap-10 px-15">
        <Link to={'/Courses'} className='text-sm hover:text-black' >Courses</Link >
        <Link to={'/Interview_experiences'} className='text-sm hover:text-black' >Interview Experiences</Link >
        <Link to={'/YoutubeGuide'} className='text-sm hover:text-black' >Youtube Guide</Link >
        <Link to={'/TechGuide'} className='text-sm hover:text-black' >Tech Guide</Link>
      </div>
      <div className="flex sm:hidden flex-row gap-3 items-center ">
        <img src={"https://cdna.artstation.com/p/assets/images/images/034/457/398/large/shin-min-jeong-.jpg?1612345160"} className="w-12 h-12 rounded-full" alt="" />
       <span className="text-black font-medium capitalize text-xl">{user.name?user.name:"No User"}</span>
       <div className="mx-5 text-black" onClick={()=>{
        logout()
        navigate('/')
       }}>
       <i class='bx bx-log-in-circle text-xl cursor-pointer' ></i>
       </div>
      
      </div>
      <div className="text-black sm:block hidden">
       <i class='bx  text-xl bx-menu'></i>
       </div>
    </div>
 </div>
  );
};
