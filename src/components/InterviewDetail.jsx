import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {ROOT_URL} from '../context/Actions'
import CustomLoading from './CustomLoading'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function InterviewDetail() {
  const {id} = useParams()
  const [interview, setinterview] = useState(null); 

  const [loading, setloading] = useState(true);
  const showToastMessage = (msg) => {
    
    toast.error(msg, {
        position: toast.POSITION.BOTTOM_RIGHT
    });
   };

   const [description , setdescription ] = useState(null);

  useEffect(() => {
    async function getInterview(){
      const data = await fetch(`${ROOT_URL}/user/interviewbyID?id=${id}`).then((ele,idx)=>{
        return ele.json();
      })
     
      if(data.data){
        setinterview(data.data);
        setloading(false)
       console.log(data.data)
    
      let platformUsed = data.data.description.platformUsed.split(',')
      let subjectLearned = data.data.description.subjectLearned
      let courses = data.data.description.courses.split(',')
      let aptitudePrep = data.data.description.aptitudePrep.split(',')
  
      setdescription({
        platformUsed,
        subjectLearned,
        courses,
        aptitudePrep
      })
        
      }else{
        showToastMessage("Error Occurred !! ")
         
        setloading(false)
      }
    
    }

    getInterview()
  }, []);

  return (
    <div className='w-full'>
      <ToastContainer/>
      {loading ? <CustomLoading/> : null}
      
          <div className="bg-int w-full ">
            <div className="w-[75%] text-white font-inter flex justify-between items-center min-h-[40vh] mx-auto">
              
            
<div className="info flex">
<div className="w-24 bg-white flex justify-center items-center h-24 rounded-full">
           <img alt='meta' className='w-12 object-contain h-12' src={interview?.companyLogo}/>       
           </div>

<div className="flex flex-col mx-10 justify-center">
<h1 className='font-medium text-lg '>Role -  <span className='font-medium text-white/70'>{interview?.role}</span></h1>
            <h1 className='font-medium text-lg '>Company -  <span className='font-medium text-white/70'>{interview?.company}</span></h1>
            <h1 className='font-medium text-lg '>Location -  <span className='font-medium text-white/70'>{interview?.location}</span></h1>

</div>             

</div>
            <div className="user">
            <h1 className="ctc my-2 font-semibold text-white"><i className='bx bx-money pr-2' ></i> CTC ~  {interview?.ctc} LPA</h1>
            <h1 className="ctc my-2 font-semibold text-white"><i className='bx bxs-user-badge pr-2'></i> Mode ~  {interview?.onCampus?"On Campus":"Off Campus"}</h1>
            <h1 className="ctc my-2 font-semibold text-white"><i className='bx bxs-badge-check pr-2'></i> Selected ~  {interview?.selected?"Yes ":"No"}</h1>
            <h1 className="ctc my-2 font-semibold text-white"><i className='bx bxs-calendar'></i> Date ~  {interview?.date}</h1>
        
            </div>
          
          <div className="user flex">
          <img src={"https://cdna.artstation.com/p/assets/images/images/034/457/398/large/shin-min-jeong-.jpg?1612345160"} className="w-12 h-12 rounded-full" alt="" />
           <div className="block mx-5">
            <h1>{interview?.name}</h1>


            <div className="flex justify-between items-center my-2 w-full">
            <a href={interview?.linkedinLink} rel="noreferrer" target="_blank"><i className='bx text-xl bxl-linkedin-square'></i></a>
            <a  href={interview?.githubLink} rel="noreferrer" target="_blank"><i className='bx text-xl bxl-github'></i></a>
            <a href={interview?.resumeLink} rel="noreferrer" target="_blank"><i className='bx bxs-file-doc text-xl'></i></a>

            </div>
           </div>
          </div>

            </div>

          </div>

          <div className="w-[75%] mx-auto my-10">
          <div className="description">
            <h1 className='text-xl font-semibold'>Description</h1>
            
            <div className=" my-5 items-center grid gap-y-5 grid-cols-[4fr_8fr]">
              <div className="col">
              <h1 className='font-medium'>
              Platforms Used For Preperation ~
              </h1>
              </div>
              <div className="links ">
   {
   description?.platformUsed.map((ele,idx)=>{
    return   <p key={idx} className='text-blue-500  mx-2' >{ele}</p> 

   })
   
   }</div>


              <div className="col">
              <h1 className='font-medium'>
              Subjects Learned ~
              </h1>
              </div>
              <div className="links flex ">
              {
   description?.subjectLearned.map((ele,idx)=>{
    return                <p key={idx} className='text-blue-500 rounded-md text-center  bg-blue-50 px-5 py-2  mx-2' >{ele}</p>  

   })}
             </div>


              <div className="col">
              <h1 className='font-medium'>
              Courses Which Helped Him ~
              </h1>
              </div>
              <div className="links flex ">
               {
                description?.courses.map((ele,idx)=>{
                  return <p key={idx} className='text-blue-500 mx-2'>{ele} ,  </p>
                })
               }
             </div>


              <div className="col">
              <h1 className='font-medium'>
              Aptitude Preperation ~
              </h1>
              </div>
              <div className="links flex ">
              {
                description?.aptitudePrep.map((ele,idx)=>{
                  return  <p key={idx} className='text-blue-500 rounded-md text-center  bg-blue-50 px-5 py-2  mx-2' >{ele}</p>  
                })
               }
               </div>

              
            </div>

          </div>

          <div className="proc">
          <h1 className='text-xl font-semibold'>Inteview Process</h1>
            <p className='text-sm text-slate-500 my-5'>
              {interview?.process}
            </p>
          </div>
          </div>

    </div>
  )
}

export default InterviewDetail