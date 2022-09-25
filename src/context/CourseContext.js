import React, { useEffect } from 'react'
import { ROOT_URL } from './Actions';
const CourseStateContext = React.createContext();

function CourseContext({children}) {
    // const [Courses, setCourses] = useState([]);
  useEffect(() => {
    async function getCourses(){
        const token = localStorage.getItem('token')
        const config = {
            headers: {
                 'Authentication': 'Bearer Token',
                'x-access-token': `Bearer ${token}` }
        };

      const data = await   fetch(`${ROOT_URL}/admin/course`, config) 
         console.log(data)
    }
    getCourses()
}, []);


  return (
    <CourseStateContext.Provider
    value={{
      // Courses
    }}
    >
    {children}
  </CourseStateContext.Provider>
  )
}

export default CourseContext