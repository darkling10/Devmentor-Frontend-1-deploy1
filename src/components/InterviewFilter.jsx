import React, { useState } from 'react'
import { Field, Form, Formik } from 'formik';
import {ROOT_URL} from '../context/Actions'
import { useInterviewContext } from '../context/InterviewContext';


function InterviewFilter() {
  const companies = ["Microsoft", "Amazon", "Google", "Apple", "Adobe","Attlassin","Uber","American Express","Barclays"]
  const roles  = [
   " SDE INTERN", 
"STE INTERN",
"SDE 1",
"SDE 2",
"Frontend",
"Backend",
'Fullstack',
"Devops",
"AI/ML"
  ]

  const data = useInterviewContext();
 
  console.log(data)
    return (
    <div className="filter mx-auto mt-[-10vh] w-[75%] p-10 rounded-md bg-white min-h-[20vh] ">

    
     
            <Formik

       initialValues={{ 
        company : companies[0],
        role : roles[0],
        ctc:100000
        }}
      
       onSubmit={async(values) => {
       const payload = {
        filerBy:{
          company : values.company,
        role : values.role,
        }
       }
       console.log(payload)
      }}

     >

      
         <Form className='w-full grid grid-cols-4  gap-5 justify-between items-betwee'>

      
            
         <Field as="select" className="bg-gray-50 border h-[max-content] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " name="company">
           {
            companies.map((ele)=>{
              return   <option value={ele}> 
                           {ele.toLocaleUpperCase()}</option>

            })
           }

           </Field>

           <Field as="select" className="bg-gray-50 border h-[max-content] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " name="company">
           {
           roles.map((ele)=>{
              return   <option value={ele}> 
                           {ele.toLocaleUpperCase()}</option>

            })
           }

           </Field>

           <button type='submit' className='w-full bg-primary rounded-md text-white p-2.5'>
          Filter Interviews
         </button>
   
         <button type='button' className='w-full bg-primary rounded-md text-white p-2.5'>
          Reset To Default
         </button>
   
         </Form>

     

     </Formik>
    </div>
  )
}

export default InterviewFilter