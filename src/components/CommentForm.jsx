import React from 'react'
import { Formik} from "formik";
import * as yup from "yup";


function CommentForm() {
    const schema = yup.object().shape({
        comment: yup.string().min(200).required(),
      });

  return (
    <div className='w-full bg-white p-5  rounded-xl'>

    <div className="flex justify-start items-center ">
        <img className='w-16 h-16 rounded-full' src="https://cdna.artstation.com/p/assets/images/images/034/457/398/large/shin-min-jeong-.jpg?1612345160" alt="" />
        <div className="text p-5">
            <h1 className='font-semibold'>Vinit Khollam</h1>
        </div>

       
     </div>
    
     
     <div className="w-full">
     <Formik
        validationSchema={schema}
        initialValues={{ comment: ""}}
        onSubmit={async(values) => {
          console.log(values)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          
            <form noValidate onSubmit={handleSubmit}>
            <p>Enter Your Email ID</p>
            <textarea
             name="comment"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.comment}
             placeholder="Enter comment id / username"
             className="bg-gray-50 border min-h-[20vh]  border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 my-4"
    
            >
                
            </textarea>
            <p className="error text-red-500 mb-3">
              {errors.comment && touched.comment && errors.comment}
            </p>
     <button type="submit" className='w-full p-2.5 bg-primary text-white  rounded-md hover:bg-dark-primary transition-all'>Add Comment <i class='bx bxs-comment align-bottom px-3'></i></button>
       </form> 
           
           )}
      </Formik>

     </div>
    </div>
  )
}

export default CommentForm