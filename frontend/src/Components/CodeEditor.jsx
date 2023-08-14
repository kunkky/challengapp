import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { EditorState, basicSetup } from '@codemirror/basic-setup';

const CodeEditor = () => {
    const [output, setOutput] = useState('');
    const [code, setCode] = useState(""); // Initial code

    const runCode = () => {
        try {
            const evaluatedOutput = eval(code); // Execute the code
            setOutput(evaluatedOutput.toString()); // Update the output state
        } catch (error) {
            setOutput(`Error: ${error.message}`); // Handle evaluation errors
        }
    };

    const handleCodeChange = (value) => {
        setCode(value); // Update the code state
    };

    return (
        <div>
            <CodeMirror
                value={code}
                height="200px"
                extensions={[javascript({ jsx: true })]}
                onChange={handleCodeChange}
                options={{
                    theme: 'material',
                    mode: 'jsx',
                    ...basicSetup,
                }}
            />
            <button onClick={runCode}>Run</button> {/* Run button */}
            <div>
                <h3>Output:</h3>
                <pre>{output}</pre>
            </div>
        </div>
    );
};

export default CodeEditor;
