import React, { useEffect , useState } from 'react'
import Card from '../components/Card';
import CustomLoading from '../components/CustomLoading';
import FilterComponent from '../components/FilterComponent'
import img from './Noresult.png'
import { useCourseContext } from '../context/CourseContext'
function Courses() {

  const data = useCourseContext();
  const [courses, setcourses] = useState(null);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    if(data.Courses.length > 0){
      setcourses(data.Courses)
      setloading(false)
    }
  }, [data]);

  return (
    <div className='w-full min-h-screen pb-10 bg-blue-50'>
    
    {loading ? <CustomLoading msg={"Requesting Courses"} /> : null}
    <div className="bg-img w-full  p-10 ">
         <div className="w-[75%] min-h-[40vh] text-white mx-auto grid grid-cols-[5fr_7fr]">
            <div className="col w-full h-full flex justify-start items-center">
            <h1 className='font-bold text-4xl'>Courses Review</h1>
            </div>

            <div className="col w-full h-full flex justify-end items-center text-left">
            <p className='text-2xl text-white/70'>Get a curated list of courses required to atain the mastery by taking courses which are choosen by developers for the developers ..</p>
          
            </div>

        </div>
    </div>

  <div className="w-[75%] z-50 mx-auto mt-[-10vh]">
   <FilterComponent setCourses={setcourses} setLoading={setloading} />
  </div>
   <div className="grid  w-full grid-cols-4 gap-2.5">
   
   </div>

   <div className="grid w-[75%] my-10 gap-10 mx-auto grid-cols-3">
    {
      courses?courses.map((ele)=>{
       return <Card data={ele} />
      }):null
    }
  
   </div>
   {
      courses?.length === 0 ?
     ( <div className="mx-auto w-full flex flex-col justify-center items-center">
        <img src={img}  alt="" />
        <h1 className='font-semibold'>No Results Found</h1>
      </div>) : null
    }
    </div>
  )
}

export default Courses
