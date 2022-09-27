import React, { useContext, useEffect , useState} from 'react'
import { ROOT_URL } from './Actions';
const InterviewStateContext = React.createContext();

function InterviewContext({children}) {
    const [Interviews, setInterviews] = useState([]);
  useEffect(() => {
    async function getInterviews(){
     try {
        const data = await fetch(`${ROOT_URL}/user/interview`).then((ele)=>{
            return ele.json();
          })
       
          if(data?.data){
            setInterviews(data.data)
          }
          
     } catch (error) {
     }
    }
    getInterviews()
}, [setInterviews]);


  return (
    <InterviewStateContext.Provider
    value={
      Interviews
   }
    >
    {children}
  </InterviewStateContext.Provider>
  )
}

export function useInterviewContext(){
  return useContext(InterviewStateContext)
}

export default InterviewContext