import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/images/logo.png' 
import { useFormik } from 'formik'; //for processing forms 
import * as Yup from 'yup'; //for form validation
import useLogin from '../Hooks/useLogin';
import { ThreeDots } from 'react-loader-spinner'



const Signin = () => {

    const navigate = useNavigate()

    //check if user already is logged in 
    useLayoutEffect(() => {
        document.title = "Login | Tech Challenge Game"
        if (sessionStorage.getItem("user")) {
            window.location.href = "/dashboard"
        }
    }, [])



    //state for login response
    const [details, setDetails] = useState(
        {
            "email": "",
            "password": "",
            "type": ""
        })
    const formik = useFormik({
        initialValues: {
            password: '',
            email: '',
        },
        validationSchema: Yup.object({
            password: Yup.string().required('Password is Required'),
            email: Yup.string().email('Invalid email address').required('Valid email is required'),
        }),
        onSubmit: values => {
            setDetails(values);
           
        },
    });
    //set error message 
    const [apiresponse, setApiresponse] = useState(null)
    //use my sign in hook
    const {  loading, loginResponse } = useLogin(details, 'login', "user"); // 
    useEffect(() => {
        if (loginResponse) {
            setApiresponse(loginResponse.responseMessage)
        }

    }, [loginResponse])
    
    //handle login logic
    if (loginResponse && loginResponse.responseCode==="00"){
        //user is available
        const userInfo = loginResponse.data;
        sessionStorage.setItem("user", JSON.stringify(userInfo));
        navigate("/dashboard", {
            state: {
                userInfo,
                message: `welcome`
            },
            replace: true,
        });

    }
  return (
      <section className="bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <Link to='/'>
                  <img className="w-[160px] mb-6 mr-2" src={Logo} alt="logo" />
              </Link>
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                          Sign In 
                      </h1>
                      <form className="space-y-4 md:space-y-6" action="#" onSubmit={formik.handleSubmit}>
                          <div>
                              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                              <input
                                  id="email"
                                  name="email"
                                  type="email"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.email}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                              {formik.touched.email && formik.errors.email ? (
                                  <div className='text-red-600 text-sm'>{formik.errors.email}</div>
                              ) : null}
                            </div>
                          <div>
                              <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                              <input 
                              
                                  id="password"
                                  name="password"
                                  type="password"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.password}
                              
                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                              {formik.touched.password && formik.errors.password ? (
                                  <div className='text-red-600 text-sm'>{formik.errors.password}</div>
                              ) : null}
                          </div>
                       
                          {
                          loading===true ? 
                                  <button disabled className="flex justify-center items-center w-full text-white bg-blue-400 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                      <ThreeDots
                                          height="25"
                                          width="25"
                                          radius="5"
                                          color="#ffffff"
                                          ariaLabel="three-dots-loading"
                                          wrapperStyle={{}}
                                          wrapperClassName=""
                                          visible={true}
                                      /></button> :
                          <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                      Log In</button>
                          }
                          {
                              apiresponse !== "" &&
                              <div className='text-red-600 text-sm mt-0'>
                                  {apiresponse}
                              </div>

                          }
                          
                          <p className="text-sm font-light text-gray-500 dark:text-gray-400">

                            <Link to='/signup'>  New user sign Up? </Link> 

                              Already have an account? <Link to='/signin' className='cursor-pointer text-blue-600'> Login here </Link>

                          </p>
                      </form>
                  </div>
              </div>
          </div>
      </section>

  )
}

export default Signin