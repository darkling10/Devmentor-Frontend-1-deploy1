import React from 'react'
import { Link } from 'react-router-dom'
import { Formik } from "formik";
import * as Yup from "yup";
import { useAuthDispatch , useAuthState } from '../context/AuthContext';
 

function Login() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format"),
    password: Yup.string()
      .required("Password is a required field")
      .min(8, "Password must be at least 8 characters"),
  });

  const dispatch = useAuthDispatch() 

  
  return (
    <div className='w-full min-h-screen md:grid-cols-1 grid grid-cols-2'>

      <div className="col text-white  bg-primary flex justify-between items-start flex-col p-10 w-full min-h-screen">
    
      <div className="flex justify-start items-center">
      <i className='bx bxl-dev-to text-3xl'></i>
      <p> Mentor </p>
      </div>
      

      <div className="text">
        <h1 className='text-3xl font-bold'> Learn About New Courses and Interview Experiences </h1>
        <p className='text-white/70 my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit excepturi dicta tenetur quis modi quos aspernatur ab debitis aliquid?</p>
      </div>

      <div className="comment bg-dark-primary md:w-9/12 w-6/12 px-10 py-5 mx-auto rounded-md">
      <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, adipisci?</p>
        <div className="profile flex">
        <img src="https://media.sketchfab.com/models/7b9a05ad2bfc42eca59141d550a868e2/thumbnails/c0a545aba25e4fc1a27a040429227266/cd1f9baf456146ab948056ff64f83b51.jpeg" className='w-12 object-cover h-12 rounded-full' alt="profile" />
         <div className="txt">
         <h3 className='ml-5'>John Doe</h3>
         <h3 className='ml-5 text-white/70'>Software Engineer</h3>

         </div>
        </div>
      </div>

      </div>
      <div className="col w-full min-h-screen flex justify-center items-center ">
         <div className="w-[70%] mx-auto">
          <h1 className='font-bold text-4xl my-5 text-center'>Sign In</h1>

        <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(JSON.stringify(values))
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
          <div className="login">
            <div className="form">
           {/* Passing handleSubmit parameter tohtml form onSubmit property */}
              <form noValidate onSubmit={handleSubmit}>
                <p>Enter Your Email ID</p>
              {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email id / username"
                  className="bg-gray-50 border  border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 my-4"
                  id="email"
                />
                <p className="error text-red-500 mb-3">
                  {errors.email && touched.email && errors.email}
                </p>

                <p>Enter Your Password</p>

                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  className="bg-gray-50 border  border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 my-4"
                />
                 {/* If validation is not passed show errors */}
                 <p className="error text-red-500 mb-3">
                  {errors.password && touched.password && errors.password}
                </p>
                {/* Click on submit button to submit the form */}
                <button type="submit" className='w-full p-2.5 bg-primary text-white rounded-md hover:bg-dark-primary transition-all'>Login</button>
              </form>
              <p className='w-full text-center my-5'>Don't have an account ??? <Link to={'/signup'} className="text-primary">SignUp</Link> </p>

            </div>
          </div>
        )}
      </Formik>

 

         </div>
      </div>
    </div>
  )
}

export default Login