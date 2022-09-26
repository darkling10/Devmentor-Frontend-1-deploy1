import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import Card from '../components/Card'
import { useCourseContext } from "../context/CourseContext";

function Dashboard() {
  
  const data = useCourseContext();
  const [TopCourses, setTopCourses] = useState([]);
  useEffect(() => {
    if(data?.Courses){

      if(data?.Courses.length > 3){
        const arr = data.Courses.slice(0, 3);
        setTopCourses(arr)
        
      }else{
        setTopCourses(data.Courses)
      }
    }
  }, [data]);
  
  
  return (
    <div className="bg-blue-50 w-full min-h-screen">
      <Header />
     <div className="w-[75%] mx-auto">
      
     <h1 className="font-inter my-5 font-semibold text-2xl">Top Technical Courses </h1>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10 grid-cols-3">
     {
     TopCourses.length> 0 ? 
     TopCourses.map((ele)=>{
      return (
      <Card key={ele._id} data={ele} />
      )
     })
     : null
     }

      </div>

     </div>
    </div>
  );
}

export default Dashboard;
