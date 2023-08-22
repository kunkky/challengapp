import React, { useEffect, useState } from 'react'
import useFetchAllChallenges from '../Hooks/useFetchAllChallenges';
import PaginatedList from '../Components/PaginatedList'
const QuestionsList = () => {
  const [data, setData] = useState(null)
  //use in hook
  const { loading, challengeResponse } = useFetchAllChallenges('getAllQuestions'); // 
useEffect(() => {
  if (challengeResponse && challengeResponse.responseCode==="00"){
    setData(challengeResponse.data)
  }
  else{
    setData(null)
  }
}, [challengeResponse.responseCode])


  
  return (
    <div>
      {
        loading ===true? <>Loading</> :null
      }
      {
        data !== null && data.length > 0 ? <PaginatedList itemsPerPage={5} items={data}/>:<div>No Questions</div>  
      }
    </div>
  )
}

export default QuestionsList