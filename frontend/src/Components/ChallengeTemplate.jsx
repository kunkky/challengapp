import React from 'react'
import DashboardNav from './DashboardNav'
import ChallengePage from './ChallengePage'


const ChallengeTemplate = ({ pageName }) => {
    return (
        <>

            <div className="min-h-full">
                <DashboardNav />

                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">{pageName}</h1>
                    </div>
                </header>
                <main>
                    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                        <ChallengePage/>

                    </div>
                </main>
            </div>
        </>
    )
}

export default ChallengeTemplate