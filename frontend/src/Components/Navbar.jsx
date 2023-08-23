import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = (props) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav
      className={
        (props.transparent
          ? "top-0 absolute z-50 w-full"
          : "relative shadow-lg bg-white") +
        " flex flex-wrap items-center justify-between px-2 py-3 "
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            className={
              (props.transparent ? "text-white" : "text-gray-800") +
              " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            }
            to="/"
          >
            Tech Challenge App
          </Link>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i
              className={
                (props.transparent ? "text-white" : "text-gray-800") +
                " fas fa-bars"
              }
            ></i>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
            (navbarOpen ? " block rounded shadow-lg" : " hidden")
          }
          id="example-navbar-warning"
        >
        
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
          


            <li className="flex items-center">
              
              <Link to="/signin"
                className={
                  (props.transparent
                    ? "bg-white text-gray-800 hover:bg-gray-800 hover:text-white active:bg-gray-100"
                    : "bg-pink-500 text-whit hover:bg-white hover:text-pink-500 active:bg-pink-600") +
                  " text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                }
                
                style={{ transition: "all .15s ease" }}
              >
                <i className="fas fa-arrow-alt-circle-down"></i> Log In
              </Link>
            </li>

            <li className="flex items-center">

              <Link to="/signup"
                className={
                  (props.transparent
                    ? "bg-white text-gray-800 hover:bg-gray-800 hover:text-white active:bg-gray-100"
                    : "bg-pink-500 text-white hover:bg-white hover:text-pink-500 active:bg-pink-600") +
                  " text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                }

                style={{ transition: "all .15s ease" }}
              >
                <i className="fas fa-arrow-alt-circle-down"></i>Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>


    )
}

export default Navbar