import React, { useState } from 'react'
import { useFormik } from 'formik'; //for processing forms 
import * as Yup from 'yup'; //for form validation
import { ThreeDots } from 'react-loader-spinner'
import BaseUrl from './../BaseUrl';
import Token from './../Token';

const AddQuestion = () => {
    let url = null;
    //state for Api response
    const [loading, setLoading] = useState(false);
    const [apiresponse, setApiResponse] = useState(false)
    const [apiData, setApiData] = useState(null)

    const formik = useFormik({
        initialValues: {
            item: '',
        },
        validationSchema: Yup.object({
            item: Yup.string().min(3).required('This is Required'),
        }),
        onSubmit: async values => {
            //desctruct values
            setApiData(values)
            console.log(apiData);
            setLoading(true);
            try {
                console.log(url);
                const response = await fetch(BaseUrl + url, {
                    method: 'POST',
                    body: JSON.stringify(apiData),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': Token,
                    },
                });
                const data = await response.json();
                console.log(data);
                setLoading(false);
                setApiResponse(data.responseMessage)

            } catch (error) {
                setLoading(false);
                setApiResponse(error.responseMessage)

            }
        },
    });

  return (
    <div>
          <form className="space-y-4 md:space-y-6" action="#" onSubmit={formik.handleSubmit}>
              <div>
                  <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">Add Question </label>
                  <input

                      id="item"
                      name="item"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.item}

                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  {formik.touched.item && formik.errors.item ? (
                      <div className='text-red-600 text-sm'>{formik.errors.item}</div>
                  ) : null}
              </div>
              <div>
                  <label htmlFor="stack" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
                  <select
                      id="type"
                      name="type"
                      type="select"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.type}

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
                  <label htmlFor="stack" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Level</label>
                  <select
                      id="level"
                      name="level"
                      type="select"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.level}

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
              {
                  loading === true ?
                      <button disabled className="capitalize flex justify-center items-center w-full text-white bg-blue-400 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
                      <button type="submit" className="capitalize w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Add Question</button>
              }
              {
                  apiresponse !== "" &&
                  <div className='text-red-600 text-sm mt-0'>
                      {apiresponse}
                  </div>

              }



          </form>
    
    </div>
  )
}

export default AddQuestion