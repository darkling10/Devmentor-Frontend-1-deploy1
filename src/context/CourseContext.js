import React, { useContext, useEffect , useState} from 'react'
import { ROOT_URL } from './Actions';
const CourseStateContext = React.createContext();

function CourseContext({children}) {
    const [Courses, setCourses] = useState([]);
  useEffect(() => {
    async function getCourses(){
      const data = await fetch(`${ROOT_URL}/user/course`).then((ele)=>{
        return ele.json();
      })
 
      if(data?.data){
        setCourses(data.data)
      }
      
    }
    getCourses()
}, [setCourses]);


  return (
    <CourseStateContext.Provider
    value={{
      Courses
    }}
    >
    {children}
  </CourseStateContext.Provider>
  )
}

export function useCourseContext(){
  return useContext(CourseStateContext)
}

export default CourseContext