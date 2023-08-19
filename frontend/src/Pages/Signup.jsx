import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { ThreeDots } from 'react-loader-spinner';
import * as Yup from 'yup'; //for form validation
import useRegisteration from '../Hooks/useRegisteration';

import { useFormik } from 'formik'; //for processing forms 




const Signup = () => {
    const [apiresponse, setApiresponse] = useState(null)
    const [details, setDetails] = useState(
        {
            "email": "",
            "password": "",
            "type": ""
        })
    const navigate = useNavigate();

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const PassRegEx = /(?=.*[A-Z])^(?=.*[a-z])^(?=.*[0-9])/;
    //formic for validation 
    const formik = useFormik({
        initialValues: {
            password: '',
            email: '',
            fullname: '',
            stack: '',
            confirmPassword: '',
            phone: '',
            checkbox: false,
            
        },
        validationSchema: Yup.object({
            password: Yup.string().matches(PassRegEx, 'Password must include Uppercase, Lower Case and Special Character').required('Password is Required'),
            confirmPassword: Yup.string().required().oneOf([Yup.ref('password'), null], 'Passwords must match'),
            email: Yup.string().email('Invalid email address').required('Valid email is required'),
            fullname: Yup.string().required('Full Name is required'),
            stack: Yup.string().required('Please Select a Stack'),
            phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Valid Phone is needed"),
           checked: Yup.boolean().oneOf([true], 'Please accept'),

        }),
        onSubmit: values => {
            setDetails(values);
        },
    });

    //password toggle
    const [passwordType, setPasswordType] = useState("password")
    const togglePassword = () => {
        if (passwordType === 'password') {
            setPasswordType('text')
        }
        else {
            setPasswordType('password')

        }
    }

    //confirm Password toggle
    const [confirmPasswordType, setconfirmPasswordType] = useState("password")
    const toggleConfirm = () => {
        if (confirmPasswordType === 'password') {
            setconfirmPasswordType('text')
        }
        else {
            setconfirmPasswordType('password')
        }
    }

//user effect to load regsteration
    const { loading, regResponse } = useRegisteration(details, 'registeration', "user"); // 
    
    useEffect(() => {
        if (regResponse) {
            setApiresponse(regResponse.responseMessage)
        }

    }, [regResponse])

    //handle login logic
    if (regResponse && regResponse.responseCode === "00") {
        //user is available
        const userInfo = regResponse.data;
        const token = regResponse.token
        console.log(userInfo);
        sessionStorage.setItem("user", JSON.stringify(userInfo));
        sessionStorage.setItem("token", JSON.stringify(token));
        navigate("/dashboard", {
            state: {
                userInfo,
                message: `welcome ${details.fullname}`
            },
            replace: true,
        });

    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900 lg:h-[140svh] md:h-[105svh] pt-7">
            <div className="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Link to='/' className="flex items-center mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-[150px] mb-5" src={Logo} alt="logo" />
                </Link>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#" onSubmit={formik.handleSubmit}>
                            <div>
                                <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Full Name</label>
                                <input
                                    id="fullname"
                                    name="fullname"
                                    type="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.fullname}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required="" />
                                {formik.touched.fullname && formik.errors.fullname ? (
                                    <div className='text-red-600 text-sm'>{formik.errors.fullname}</div>
                                ) : null}
                            </div>
                            <div>
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Phone Number</label>
                                <input

                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.phone}

                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" placeholder='01234567891'/>
                                {formik.touched.phone && formik.errors.phone ? (
                                    <div className='text-red-600 text-sm'>{formik.errors.phone}</div>
                                ) : null}
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
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
 
                            <div >
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <div className="relative">
                                <input

                                    id="password"
                                    name="password"
                                    type={passwordType}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}

                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />

                                <div className="absolute right-0 top-0 p-2 flex items-center" onClick={togglePassword}>
                                    
                                    {passwordType === "text" ? <i className="bi bi-eye"></i> : <i className="bi bi-eye-slash"></i>}
                                </div>
                                </div>
                                {formik.touched.password && formik.errors.password ? (
                                    <div className='text-red-600 text-sm'>{formik.errors.password}</div>
                                ) : null}
                            </div>
                            <div>
                                <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                                <div className="relative">
                                <input

                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type={confirmPasswordType}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.confirmPassword}

                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    <div className="absolute right-0 top-0 p-2 flex items-center" onClick={toggleConfirm}>

                                    {confirmPasswordType === "text" ? <i className="bi bi-eye"></i> : <i className="bi bi-eye-slash"></i>}
                                </div>
                                </div>

                                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                    <div className='text-red-600 text-sm'>{formik.errors.confirmPassword}</div>
                                ) : null}


                            </div>

                            <div>
                                <label htmlFor="stack" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Stack</label>
                                <select
                                    id="stack"
                                    name="stack"
                                    type="select"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.stack}

                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                >
                                    <option value="">Select Stack</option>
                                    <option value="frontend">Front-End</option>
                                    <option value="backend">Back-End</option>
                                    <option value="fullstack">Full-Stack</option>
                                </select>
                                {formik.touched.stack && formik.errors.stack ? (
                                    <div className='text-red-600 text-sm'>{formik.errors.stack}</div>
                                ) : null}
                            </div>

                            <div>
                              <input

                                    id="checkbox"
                                    name="checkbox"
                                    type="checkbox"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.checkbox}

                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                <span htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <Link to="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500" >Terms and Conditions</Link></span>

                                {formik.touched.checkbox && formik.errors.checkbox ? (
                                    <div className='text-red-600 text-sm'>{formik.errors.checkbox}</div>
                                ) : null}
                            </div>
                        

                            {
                                loading === true ?
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
                                Already a member?
                                <Link to='/signin' className='cursor-pointer text-blue-600'> Login here  </Link>

                            </p>
                        </form>
                       
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup;