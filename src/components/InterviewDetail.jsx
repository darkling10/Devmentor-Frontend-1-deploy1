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
  useEffect(() => {
    async function getInterview(){
      const data = await fetch(`${ROOT_URL}/user/interviewbyID?id=${id}`).then((ele)=>{
        return ele.json();
      })
    
      if(data.data){
        setinterview(data.data);
        setloading(false)
       
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
              
            <div className="w-24 bg-white flex justify-center items-center h-24 rounded-full">
           <img alt='meta' className='w-12 object-contain h-12' src={interview?.companyLogo}/>       
           </div>
            
            <h1 className='font-medium text-2xl'>Role - <span className='font-medium text-white/70'>{interview?.role}</span></h1>

            <div className="user">
                      
            </div>


            </div>

          </div>

    </div>
  )
}

export default InterviewDetail