import React, { useState } from 'react'
import ToastMessage from './ToastMessage'
import {Link} from 'react-router-dom'
const ChallengePage = ({ challenges }) => { 
    const  questions = challenges.data
    return (
        <div className='gap-5 grid grid-cols'>
            {
                questions && questions.length  > 0 ? questions.map((question, index)=>(
                    <div className='bg-slate-100 w-full p-5 rounded-lg flex-col gap-5 flex mb-5' key={index}>
                        <div dangerouslySetInnerHTML={{ __html: question.question }} />
                       <div className='flex flex-row'> 
                            <div className="font-bold uppercase">{question.questionType} |  </div>
                            <div className="capitalize"> {question.questionLevel}</div>
                        </div>
                        <div className="">
                        <Link to={`../../selectedChallenge/${question._id}`} className="p-3 bg-green-800 rounded-sm text-white font-bold">Take Challenge</Link>
                        </div>
                </div>
                ))
                
                
                :<div>
                    <h1 className='text-3xl'>No Challenges In this Category</h1>
                        <div className="text-red-600">{questions && questions.responseMessage}</div>
                </div>  

            
            }

            <ToastMessage/>
        </div>
    )
}

export default ChallengePage