import React from 'react'
import ToastMessage from './ToastMessage'
import HtmlLogo from '../assets/images/html.png'
import CssLogo from '../assets/images/css.png'
import JsLogo from '../assets/images/js.png'
import { NavLink } from 'react-router-dom'

const AdminDashboardPage = () => {
  return (
    <div>     
      <div className="w-full grid sm:grid-cols-3 sm:p-0 sm:px-10 px-5 gap-5 sm:gap-10 grid-cols-1 flex-row justify-between items-center">
        <div className="sm:p-5 bg-blue-100 shadow-sm rounded-md flex gap-2 items-center p-2 ">
          
          <div className="">
          <div className="text-3xl sm:text-4xl lg:text-6xl font-bold text-blue-800">Level</div>
          <div className=""> Beginner</div>
          </div>
        </div>
        <div className="sm:p-5 bg-red-50 shadow-sm rounded-md flex gap-2 items-center p-2 ">
          <div className=" bg-slate-50 flex justify-center items-center rounded-full w-auto h-auto p-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-code-slash text-red-400" viewBox="0 0 16 16">
              <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
            </svg>
          </div>
          <div className="">
          <div className="text-3xl sm:text-4xl lg:text-6xl font-bold text-red-800">Stack</div>
          <div className=""> Web Developer</div>
          </div>
        </div>
        <div className="sm:p-5 bg-green-100 shadow-sm rounded-md flex gap-2 items-center p-2 ">
          <div className=" bg-slate-50 flex justify-center items-center rounded-full w-auto h-auto p-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-trophy text-green-400" viewBox="0 0 16 16">
              <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z" />
            </svg>
          </div>
          <div className="">
            <div className="text-3xl sm:text-4xl lg:text-6xl font-bold text-green-800">9</div>
            <div className=""> Points</div>
          </div>
        </div>
        
        <h1 className='font-semibold text-xl sm:text-3xl mb-3'>Get Challenged!</h1>
        
      </div>
       


      <div className=" w-full grid sm:grid-cols-2 sm:p-0 sm:px-10 px-5 gap-5 sm:gap-10 grid-cols-1">
        

        <div className="bg-slate-50 p-10 rounded-lg flex justify-between items-center col-span-1 flex-row">
          <div className="">
            <img src={HtmlLogo} alt="" className='w-[150px]' />
          </div>
          <div className="">

            <NavLink to="/challenge/java script" className='bg-[#121212] p-3 rounded text-white border-0'>Take Challenge</NavLink>
          </div>
        </div>

        <div className="bg-slate-50 p-10 rounded-lg flex justify-between items-center col-span-1 flex-row">
          <div className="">
            <img src={JsLogo} alt="" className='w-[150px]' />
          </div>
          <div className="">

            <NavLink to="/challenge/java script" className='bg-[#121212] p-3 rounded text-white border-0'>Take Challenge</NavLink>
          </div>
        </div>

        <div className="bg-slate-50 p-10 rounded-lg flex justify-between items-center col-span-1 flex-row">
          <div className="">
            <img src={CssLogo} alt="" className='w-[150px]' />
          </div>
          <div className="">

            <NavLink to="/challenge/css" className='bg-[#121212] p-3 rounded text-white border-0'>Take Challenge</NavLink>
          </div>
        </div>



      </div>
        
          <ToastMessage/>
    </div>
  )
}

export default AdminDashboardPage