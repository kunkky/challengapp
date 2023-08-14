import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/mode/htmlmixed/htmlmixed'; // Use HTML mixed mode for better HTML editing
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

const HtmlCodeEditor = () => {
    const [output, setOutput] = useState('');
    const [code, setCode] = useState(''); // Initial code

    const runCode = () => {
        try {
            // Create a sandboxed iframe to execute the HTML code
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            document.body.appendChild(iframe);

            iframe.contentWindow.document.open();
            iframe.contentWindow.document.write(code);
            iframe.contentWindow.document.close();

            // Capture the output of the iframe
            const iframeOutput = iframe.contentWindow.document.body.innerHTML;
            setOutput(iframeOutput);

            // Remove the iframe
            document.body.removeChild(iframe);
        } catch (error) {
            setOutput(`Error: ${error.message}`); // Handle errors
        }
    };

    const handleCodeChange = (value) => {
        setCode(value); // Update the code state
    };

    return (
        <div>
            <CodeMirror
                value={code}
                height="300px"
                onChange={handleCodeChange}
                options={{
                    theme: 'material',
                    mode: 'htmlmixed', // Set mode to HTML mixed
                }}
            />
            <button onClick={runCode}>Run</button> {/* Run button */}
            <div>
                <h3>Output:</h3>
                <div dangerouslySetInnerHTML={{ __html: output }} /> {/* Render HTML output */}
            </div>
        </div>
    );
};

export default HtmlCodeEditor;
