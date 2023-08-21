import React, { useState } from 'react'
import ToastMessage from './ToastMessage'
import CssLogo from '../assets/images/css.png'
import JsLogo from '../assets/images/js.png'
import { NavLink } from 'react-router-dom'
import AddModal from './AddModal'
import useGetLevel from '../Hooks/useGetLevel'
import useGetType from '../Hooks/useGetType'
import AddQuestion from './AddQuestion'


const customModalStyles = {
    content: {
        width: '50%',
        height: 'auto',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
};


const AdminDashboardPage = () => {

//modal

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('')
    const openModal = (title) => {
        setModalIsOpen(true);
        setModalTitle(title)
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
  //getLevels
  const { LevelResponse, levelLoading } = useGetLevel("getAllLevels");
  const { typeResponse, typeLoading } = useGetType("getAllTypes")

  console.log(LevelResponse);
  console.log(typeResponse);
  return (
    <div>     
          <AddModal modalIsOpen={modalIsOpen} closeModal={closeModal} customModalStyles={customModalStyles} modalTitle={modalTitle} />
      <div className="w-full grid sm:grid-cols-4 sm:p-0 sm:px-10 px-5 gap-5 sm:gap-10 grid-cols-1 flex-row justify-between items-center">
        <div className="sm:p-5 bg-blue-100 shadow-sm rounded-md flex flex-col gap-2 p-2 ">
          <div className="font-bold">Level</div>
          <div className="flex grid-cols gap-3">
                      <button className="rounded-lg bg-blue-800 p-2 text-blue-50 hover:bg-blue-600">View Levels</button>
                      <button className="rounded-lg bg-slate-800 p-2 text-slate-50 hover:bg-slate-600" onClick={() => openModal("Add new level")}>Add Levels</button>
          </div>
        </div>
        <div className="sm:p-5 bg-red-50 shadow-sm rounded-md flex flex-col gap-2 p-2 ">
                  <div className="font-bold">User Stacks</div>
                  <div className="flex grid-cols gap-3">
                      <button className="rounded-lg bg-red-800 p-2 text-blue-50 hover:bg-red-600">View Stacks</button>
                      <button className="rounded-lg bg-slate-800 p-2 text-slate-50 hover:bg-slate-600" onClick={() => openModal("Add new stack")}>Add Stacks</button>
                  </div>

        </div>
              <div className="sm:p-5 bg-green-100 shadow-sm rounded-md flex flex-col gap-2 p-2 ">
                  <div className="font-bold">Question Types</div>
                  <div className="flex grid-cols gap-3">
                      <button className="rounded-lg bg-green-800 p-2 text-blue-50 hover:bg-green-600">View Types</button>
                      <button className="rounded-lg bg-slate-800 p-2 text-slate-50 hover:bg-slate-600" onClick={() => openModal("Add new question type")}>Add Type</button>
                  </div>

              </div>
              <div className="sm:p-5 bg-pink-100 shadow-sm rounded-md flex flex-col gap-2 p-2 ">
                  <div className="font-bold">Users</div>
                  <div className="flex grid-cols gap-3">
                      <button className="rounded-lg bg-pink-800 p-2 text-pink-50 hover:bg-pink-600">View Users</button>
                  </div>

              </div>
        
        <h1 className='font-semibold text-xl sm:text-2xl mb-3'>Challenge Operations</h1>
        
      </div>
       


      <div className=" w-full grid sm:grid-cols-2 sm:p-0 sm:px-10 px-5 gap-5 sm:gap-10 grid-cols-1">
        

        <div className="bg-slate-50 p-10 rounded-lg flex justify-between items-center col-span-1 flex-row">
          <div className="w-full">
            <AddQuestion levelResponse={LevelResponse} typeResponse={typeResponse} />
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