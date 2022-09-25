import React from 'react'
import profileImage from "../assets/Images/profile_image.svg"



export const Header = () => {
  return (
    <div className=" h-[10vh] w-full flex flex-row justify-evenly items-center text-slate-400 text-xl bg-white">
      <div className="flex flex-row gap-3 items-center">
        <img src={profileImage} alt="" />
        <span className="text-black font-semibold text-lg">Dev Mentor</span>
      </div>
      <div className="flex flex-row justify-evenly w-auto gap-10 px-15">
        <div>Courses</div>
        <div>Interview Experiences</div>
        <div>Youtube Guide</div>
        <div>Tech Guide</div>
      </div>
      <div className="flex flex-row gap-3 items-center ">
        <img src={profileImage} alt="" />
        <span className="text-black font-semibold text-2xl">John Doe</span>
      </div>
    </div>
  );
};
