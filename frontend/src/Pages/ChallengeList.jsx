import React from 'react'
import { useParams } from 'react-router-dom'

const ChallengeList = () => {
    const location = useParams();
    console.log(location);
  return (
      <div>java script</div>
  )
}

export default ChallengeList