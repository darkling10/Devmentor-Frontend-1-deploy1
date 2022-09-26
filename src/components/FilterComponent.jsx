import React from 'react'
import { Field, Form, Formik } from 'formik';
import {ROOT_URL} from '../context/Actions'


function FilterComponent({setCourses}) {

  const categories = ["Web", "Android", "AI", "Data", "Language"]
  const languages  = ["cplusplus", "java", "javascript", "python", "go"]
    return (
    <div className="filter  w-full p-10 rounded-md bg-white min-h-[20vh] ">
            
            <Formik

       initialValues={{ 
        language : languages[0],
        category : categories[0]
        }}
      
       onSubmit={async(values) => {
        console.log(values)
        const payload = {
        filterBy:{  language : values.language,
          category:values.category}
        }
        const requestOptions = {
          method: 'POST',
          mode:"cors",
          headers: { 'Content-Type': 'application/json'   , "Access-Control-Allow-Origin":"*"},
          body: JSON.stringify(payload),
        };
      
        const data = await fetch(`${ROOT_URL}/user/coursebycategory `,requestOptions)
         const res = await data.json();
         console.log(res.data) 
         
         setCourses(res.data)
      }}

     >

       {({values , errors }) => (

         <Form className='w-full grid grid-cols-3  gap-5 justify-between items-betwee'>

         
           <Field  as="select" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " name="language">
           {
            languages.map((ele)=>{
              return   <option value={ele}> 
              {ele}</option>
            })
           }

           </Field>

           <Field  as="select" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " name="category">
           {
            categories.map((ele)=>{
              return   <option value={ele}> 
              {ele}</option>
            })
           }
           </Field>
         
         <button type='submit' className='w-full bg-primary rounded-md text-white p-2.5'>
          Filter Courses
         </button>
         </Form>

       )}

     </Formik>
    </div>
  )
}

export default FilterComponent