import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Logo from '../assets/images/logo.png';
import viewicon from "../assets/images/view.png";
import hideicon from '../assets/images/hide.png'
import { ThreeDots } from 'react-loader-spinner';

const Signup = () => {
    const [formData, setFormData] = useState({
        stack: '',
        level: 'intermediate',
        fullname: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        acceptTerms: false,
    });

    const [passwordMatch, setPasswordMatch] = useState(true);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === 'phone' && isNaN(value)) {
            return; // If the value is not a number, then return nothing
        }

        if (name === 'password' || name === 'confirmPassword') {
            if (name === 'password') {
                setFormData((prevData) => ({
                    ...prevData,
                    [name]: value,
                }));
            } else if (name === 'confirmPassword') {
                setFormData((prevData) => ({
                    ...prevData,
                    [name]: value,
                }));
                setPasswordMatch(value === formData.password);
            }
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleCheckboxChange = (e) => {
        const { checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            acceptTerms: checked,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.acceptTerms) {
            alert("Please accept terms and conditions");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        if (formData.stack === '') {
            alert('Please select a stack.');
            return;
        }

        try {
            setIsLoading(true); //Set the loading state
            const response = await axios.post('http://localhost:2994/api/v1/registeration', formData); // Make the API POST request

            if (response.status === 201) {
                console.log('User registered successfully.');
                // Handle success, redirect user or show a success message
            } else {
                console.error('Registration failed.');
                // Handle registration failure, show an error message
            }
        } catch (error) {
            console.error('An error occurred:', error);
            // Handle any other errors, show an error message
        } finally {
            setIsLoading(false); // Reset to hide the loading indicator
        }
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900 lg:h-[140svh] md:h-[105svh] pt-7">
            <div className="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Link to='/' className="flex items-center mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-[150px] mb-5" src={Logo} alt="logo" />
                </Link>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create and account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Full Name</label>
                                <input type="text" name="fullname" id="fullname" value={formData.fullname} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="E.g John Doe" required />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Phone Number</label>
                                <input type="tel" name="phone" id="phoneNum" value={formData.phone} onChange={handleInputChange} maxLength={11} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="E.g 2349 826 7282" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                                <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                            </div>
                            <div className=' relative'>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type={passwordVisible ? "text" : "password"} name="password" id="password" value={formData.password} onChange={handleInputChange} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                <button type='button' onClick={() => setPasswordVisible(!passwordVisible)} className="absolute right-3 top-2/3 transform -translate-y-1/2 cursor-pointer">
                                    <img src={passwordVisible ? hideicon : viewicon} alt={passwordVisible ? 'Hide Password' : 'Show Password'} className="w-5 h-5" />
                                </button>
                            </div>
                            <div>
                                <div className=' relative'>
                                    <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                    <input
                                        type={confirmPasswordVisible ? 'text' : 'password'}
                                        name="confirmPassword"
                                        id="confirm-password"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        className={`bg-gray-50 border ${passwordMatch ? 'border-gray-300' : 'border-red-500'
                                            } text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 ${passwordMatch ? 'dark:border-gray-600' : 'dark:border-red-500'
                                            } dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 ${passwordMatch ? 'dark:focus:border-blue-500' : 'dark:focus:border-red-500'
                                            }`}
                                        placeholder="••••••••"
                                        required=""
                                    />
                                    <button type='button' onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)} className="absolute right-3 top-2/3 transform -translate-y-1/2 cursor-pointer">
                                        <img src={confirmPasswordVisible ? hideicon : viewicon} alt={confirmPasswordVisible ? 'Hide Confirm Password' : 'Show Confirm Password'} className=' w-5 h-5' />
                                    </button>
                                </div>
                                {!passwordMatch && (
                                    <p className="text-red-500 text-sm">
                                        Passwords do not match.
                                    </p>
                                )}
                            </div>
                            <div>
                                <label htmlFor="stack" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Stack</label>
                                <select
                                    name="stack"
                                    id="stack"
                                    value={formData.stack}
                                    onChange={handleInputChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                >
                                    <option value="">Select Stack</option>
                                    <option value="frontend">Front-End</option>
                                    <option value="backend">Back-End</option>
                                </select>
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" onChange={handleCheckboxChange} checked={formData.acceptTerms} />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <Link to="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500" >Terms and Conditions</Link></label>
                                </div>
                            </div>
                            {
                                isLoading ? <button disabled className="flex justify-center items-center w-full text-white bg-blue-400 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
                                <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create an account</button>
                            }
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <Link to="/signin" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Login here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup;