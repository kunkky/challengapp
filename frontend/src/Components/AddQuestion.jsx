import React, { useState } from 'react'
import { useFormik } from 'formik'; //for processing forms 
import * as Yup from 'yup'; //for form validation
import { ThreeDots } from 'react-loader-spinner'
import BaseUrl from './../BaseUrl';
import Token from './../Token';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddQuestion = ({ levelResponse, typeResponse }) => {

    let url = null;
    //state for Api response
    const [loading, setLoading] = useState(false);
    const [apiresponse, setApiResponse] = useState(false)
    const [apiData, setApiData] = useState(null)

    const formik = useFormik({
        initialValues: {
            questionLevel: '',
            questionType: '',
            solution: '',
            question: '',
            answer: '',
        },
        validationSchema: Yup.object({
            questionLevel: Yup.string().min(3).required('Level is Required'),
            questionType: Yup.string().min(3).required('Type is Required'),
            solution: Yup.string().min(3).required('Solution is Required'),
            question: Yup.string().min(3).required('Question is Required'),
            answer: Yup.string().min(1).required('Answer is Required'),
        }),
        onSubmit: async values => {
            //desctruct values
            console.log(values);
            setApiData({ ...values, author : "Group 7"})
            console.log(apiData);
            setLoading(true);
            try {
                const response = await fetch(BaseUrl + "createQuestions", {
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
    console.log(Token);
  return (
    <div>
          <form className="space-y-4 md:space-y-6" action="#" onSubmit={formik.handleSubmit}>
              <div>
                  <label for="question" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">Add Question </label>
                  <ReactQuill theme="snow"
                  
                      id="question"
                      name="question"
                      type="text"
                      onChange={(content) => formik.setFieldValue('question', content)}
                      onBlur={() => formik.setFieldTouched('question', true)} 
                      value={formik.values.question}
                      
                       required="" 
                       className="mb-2 h-[150] block"
                   
                    />
                 
                  {formik.touched.question && formik.errors.question ? (
                      <div className='text-red-600 text-sm'>{formik.errors.question}</div>
                  ) : null}
              </div>

              <div>
                  <label for="question" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">Add Solution </label>
                  <ReactQuill theme="snow"

                      id="solution"
                      name="solution"
                      type="text"
                      onChange={(content) => formik.setFieldValue('solution', content)}
                      onBlur={() => formik.setFieldTouched('solution', true)}

                      value={formik.values.solution}

                      required=""
                      className="mb-2 h-[150] block"

                  />

                  {formik.touched.solution && formik.errors.solution ? (
                      <div className='text-red-600 text-sm'>{formik.errors.solution}</div>
                  ) : null}
              </div>

              <div>
                  <label htmlFor="questionType" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
                  <select
                      id="questionType"
                      name="questionType"
                      type="select"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.questionType}

                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                  >
                      <option value="" >Select Question Type</option>
                      {
                          typeResponse !== null && typeResponse.data.length > 0 ? typeResponse.data.map((value, indexNum) => (
                              <option value={value.questionType} key={indexNum}>{value.questionType}</option>
                          )) : null
                      }
                  </select>
                  {formik.touched.questionType && formik.errors.questionType ? (
                      <div className='text-red-600 text-sm'>{formik.errors.questionType}</div>
                  ) : null}
              </div>
              <div>
                  <label htmlFor="stack" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Answer</label>
                  <input
                      id="answer"
                      name="answer"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.answer}

                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                  />
                  {formik.touched.answer && formik.errors.answer ? (
                      <div className='text-red-600 text-sm'>{formik.errors.answer}</div>
                  ) : null}
              </div>
              <div>
                  <label htmlFor="questionLevel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Level</label>
                  <select
                      id="questionLevel"
                      name="questionLevel"
                      type="select"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.questionLevel}

                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                  >
                      <option value="">Select Level</option>
                      {
                          levelResponse !== null && levelResponse.data.length > 0 ? levelResponse.data.map((value, indexNum) => (
                              <option value={value.questionLevel} key={indexNum}>{value.questionLevel}</option>
                          )) : null
                      }
                  </select>
                  {formik.touched.questionLevel && formik.errors.questionLevel ? (
                      <div className='text-red-600 text-sm'>{formik.errors.questionLevel}</div>
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