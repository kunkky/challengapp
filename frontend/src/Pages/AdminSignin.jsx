import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.png' 
import { useFormik } from 'formik'; //for processing forms 
import * as Yup from 'yup'; //for form validation



const AdminSignin = () => {


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
            alert(JSON.stringify(values, null, 2));
        },
    });

  return (
      <section className="bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <Link to='/'>
                  <img className="w-[160px] mb-6 mr-2" src={Logo} alt="logo" />
              </Link>
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                          Admin Sign In 
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
                          
                          
                          <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>
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

export default AdminSignin