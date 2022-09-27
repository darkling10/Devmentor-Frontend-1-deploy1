import React, { useEffect, useState } from 'react'
import { Field, Form, Formik } from 'formik';
import {ROOT_URL} from '../context/Actions'
import { useInterviewContext } from '../context/InterviewContext';


function InterviewFilter({setInteview,setFilter}) {
  const companies = [
    "Microsoft",
    "Amazon",
    "Google",
    "Apple",
    "Adobe",
    "Attlassin",
    "Uber",
    "American Express",
    "Barclays",
  ];
  const data = useInterviewContext()
  const Reset = ()=>{
    setFilter(true)
    setInteview(data)
  }
  




    return (
    <div className="filter mx-auto mt-[-10vh] w-[75%] p-10 rounded-md bg-white min-h-[20vh] ">

    
     
            <Formik

       initialValues={{ 
        company : companies[0],
        role : "SDE Intern",
        ctc:100000
        }}
      
       onSubmit={async(values) => {

        console.log(values)
       const payload = {
        filterBy:{
          company : values.company,
          role : values.role,
        }

       }

       try {
        const requestOptions = {
          method: 'POST',
          mode:"cors",
          headers: { 'Content-Type': 'application/json'   , "Access-Control-Allow-Origin":"*"},
          body: JSON.stringify(payload),
        };
       const data =await fetch(`${ROOT_URL}/user/interview-filter`,requestOptions).then((res)=>{
      
        return res.json();
       })
       
       setInteview(data.data) 
       setFilter(true)

       } catch (error) {
        console.log(error)
       }
   
      }}

     >

      
         <Form className='w-full grid grid-cols-4  gap-5 justify-between items-betwee'>

      
            
         <Field as="select" className="bg-gray-50 border h-[max-content] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " name="company">
           {
            companies.map((ele,idx)=>{
              return   <option key={idx} value={ele}> 
                           {ele.toLocaleUpperCase()}</option>

            })
           }

           </Field>

           <Field as="select" className="bg-gray-50 border h-[max-content] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " name="role">
           <option value="SDE Intern">SDE Intern</option>
                <option value="SDE-1">SDE-1</option>
                <option value="SDE-2">SDE-2</option>
                <option value="FrontEnd Developer">FrontEnd Developer</option>
                <option value="BackEnd Developer">BackEnd Developer</option>
                <option value="FullStack Developer">FullStack Developer</option>
                <option value="DevOps Engineer">DevOps Engineer</option>
                <option value="Other">Other</option>

           </Field>

           <button type='submit' className='w-full bg-primary rounded-md text-white p-2.5'>
          Filter Interviews
         </button>
   
         <button type='button' onClick={()=>Reset()} className='w-full bg-primary rounded-md text-white p-2.5'>
          Reset To Default
         </button>
   
         </Form>

     

     </Formik>
    </div>
  )
}

export default InterviewFilter