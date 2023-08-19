import React, { useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { EditorState, basicSetup } from '@codemirror/basic-setup';
import { useParams } from 'react-router-dom'
import useFetchQuestionById from '../Hooks/useFetchQuestionById';
import { ThreeDots } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom';

const CodeEditor = () => {
    const [output, setOutput] = useState('');
    const [code, setCode] = useState(""); // Initial code
    

    const runCode = () => {
        try {
            //remove doc keyword
            const evaluatedOutput = eval(code); // Execute the code
            setOutput(evaluatedOutput.toString()); // Update the output state
        } catch (error) {
            setOutput(`Error: ${error.message}`); // Handle evaluation errors
        }
    };

    const handleCodeChange = (value) => {
        setCode(value); // Update the code state
    };

//fetch questions
    //use my sign in hook
    const params = useParams();
    const details= {_id:params.id};
    const { loading, challengeResponse } = useFetchQuestionById(details, 'getUserQuestionById'); // 
    
    const [question, setQuestion] = useState(null)
    useEffect(() => {
        if (challengeResponse) {
            setQuestion(challengeResponse.data)
        }

    }, [challengeResponse])

    //goback function
    const navigate = useNavigate();   
     const goBack=()=>{
         navigate(-1); 
    }
    
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        <div>
            <CodeMirror
                value={code}
                height="50vh"
                extensions={[javascript({ jsx: true })]}
                onChange={handleCodeChange}
                options={{
                    theme: 'material',
                    mode: 'jsx',
                    ...basicSetup,
                }}
            />
                <button onClick={runCode} className='bg-green-800 p-1 text-white rounded'>Run <i class="bi bi-play"></i></button> {/* Run button */}
            <div>
                <h3>Output: </h3>
                <pre>{output}</pre>
            </div>
        </div>
        <div className='flex justify-center items-center fixed bottom-0'>
                {
                    loading === true && <div>
                        <ThreeDots
                            height="100"
                            width="100"
                            radius="5"
                            color="#2d2d2e"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                        /></div> 
                }
            </div>
            <div className='h-[40vh] overflow-auto'>
                <div className="relative h-[20%]">
                                <button onClick={goBack} className="p-1  m-3 bg-red-800 rounded-sm text-white font-bold absolute bottom-0 lg:top-0 right-0">Go Back</button>
                </div>

                {

                    question && question.length > 0 ? question.map((questionItem, index) => (
                        <div className='p-5 overflow-auto h-[80%]' key={index}>
                            <div className="">{questionItem.question}</div>
                            <div className="">{questionItem.question}</div>
                            <div className="">{questionItem.question}</div>
                        </div>
                    )):<div>Question Preveiw</div>
                
                }
        </div>

    </div>

    );
};

export default CodeEditor;
