import React, { useEffect, useState } from 'react'
import DashboardNav from './DashboardNav'
import ChallengePage from './ChallengePage'
import { useParams } from 'react-router-dom'
import useFetchChallenges from '../Hooks/useFetchChallenges'
import { ThreeDots } from 'react-loader-spinner'


const ChallengeTemplate = ({ pageName }) => {
    //get user info
    const userInfo = JSON.parse(sessionStorage.getItem("user"));
    const params = useParams();
    //fetch javascript questions
    const [apiresponse, setApiresponse] = useState(null)

    
    const details={
        type: params.id,
        level: userInfo.level
    }
    //use my sign in hook
    const { loading, challengeResponse } = useFetchChallenges(details, 'getAllUserQuestions'); // 
    
    return (
        <>

            <div className="min-h-full">
                <DashboardNav />

                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 capitalize">{params.id !== "default" ? params.id+" "+pageName : pageName}</h1>
                    </div>
                </header>
                <main>
                    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                        {
                            loading === true ? <div>
                            <ThreeDots
                                height="100"
                                width="100"
                                radius="5"
                                    color="#2d2d2e"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true}
                                /></div> : <ChallengePage challenges={challengeResponse}/>
                        }
                        

                    </div>
                </main>
            </div>
        </>
    )
}

export default ChallengeTemplate