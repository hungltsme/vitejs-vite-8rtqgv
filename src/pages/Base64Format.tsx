import { useState } from 'react';
import { Base64 } from 'js-base64';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Base64Format() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [mode, setMode] = useState('encode');

  const transferText = () => {
    let text = '';
    if (mode === 'encode') {
      text = Base64.encode(inputText);
    } else {
      text = Base64.decode(inputText);
    }
    setOutputText(text);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleOnPaste = () => {
    navigator.clipboard.readText().then((cliptext) => setInputText(cliptext));
  };

  const handleGetSample = () => {
    let sample;
    if (mode === 'encode') {
      sample = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry';
    } else {
      sample = 'TG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeQ==';
    }
    setInputText(sample);
  };

  const handleSetMode = (e) => {
    setMode(e.target.value);
  };

  const handleClear = () => {
    setInputText('');
    setOutputText('');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText);
    toast('Copied to clipboard!');
  };

  return (
    <div className="flex min-h-screen flex-col gap-2 p-4">
      <div className="flex h-[calc(50vh-4rem)] w-full flex-col gap-2 border-b-2 pb-4">
        <div className="flex items-center justify-between gap-2">
          <div className="flex gap-2">
            Input:
            <button
              className="text-md rounded border border-gray-400 px-3 text-sm font-medium hover:bg-gray-300"
              onClick={handleOnPaste}
            >
              Clipboard
            </button>
            <button
              className="text-md rounded border border-gray-400 px-3 text-sm font-medium hover:bg-gray-300"
              onClick={() => handleGetSample()}
            >
              Sample
            </button>
            <button
              className="text-md rounded border border-gray-400 px-3 text-sm font-medium hover:bg-gray-300"
              onClick={() => handleClear()}
            >
              Clear
            </button>
            <button
              className="text-md rounded border bg-blue-600 px-3 text-sm font-medium uppercase text-white hover:bg-blue-500"
              onClick={transferText}
            >
              {mode}
            </button>
          </div>
          <div className="flex">
            <div className="me-4 flex items-center">
              <input
                id="inline-radio"
                type="radio"
                value="encode"
                className="h-4 w-4 border-gray-300 text-blue-600"
                checked={mode === 'encode'}
                onChange={handleSetMode}
              />
              <label htmlFor="inline-radio" className="ms-2 text-sm font-medium">
                Encode
              </label>
            </div>
            <div className="me-4 flex items-center">
              <input
                id="inline-2-radio"
                type="radio"
                value="decode"
                className="h-4 w-4 border-gray-300 text-blue-600"
                checked={mode !== 'encode'}
                onChange={handleSetMode}
              />
              <label htmlFor="inline-2-radio" className="ms-2 text-sm font-medium">
                Decode
              </label>
            </div>
          </div>
        </div>
        <textarea
          value={inputText}
          onChange={handleInputChange}
          className="h-full w-full rounded-md border p-2 focus:outline-none"
          placeholder="Type (or paste) here..."
        />
      </div>
      <div className="h-[calc(50vh-4rem)] w-full">
        <div className="flex justify-between">
          <span>Output:</span>
          <div className="flex flex-row gap-2">
            <button
              className="text-md rounded border border-gray-400 px-3 hover:bg-gray-300 focus:outline-none"
              onClick={handleCopy}
            >
              Copy
            </button>
          </div>
        </div>
        <pre className="mt-2 h-full w-full whitespace-pre-wrap rounded-md bg-white p-2">{outputText}</pre>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Base64Format;
