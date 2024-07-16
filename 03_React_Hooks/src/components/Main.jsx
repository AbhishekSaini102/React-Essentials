/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback, useRef } from 'react';

function Main() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [includeChars, setIncludeChars] = useState(true);
  const [lowercase, setLowercase] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipText, setTooltipText] = useState('Copy');


  const passRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = '';
    let str = '';

    if (includeChars) {
      str += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    } else {
      if (lowercase) str += 'abcdefghijklmnopqrstuvwxyz';
      if (uppercase) str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    if (includeNumbers) str += '0123456789';
    if (includeSymbols) str += '!@#$%^&*()_+[]{}|;:,.<>?';

    if (str.length === 0) {
      setPassword(''); // or set an error message
      return;
    }

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }

    setPassword(pass);
  }, [
    length,
    includeNumbers,
    includeSymbols,
    includeChars,
    lowercase,
    uppercase,
    setPassword,
  ]);

  useEffect(() => {
    generatePassword();
  }, [
    length,
    includeNumbers,
    includeSymbols,
    includeChars,
    lowercase,
    uppercase,
    generatePassword,
  ]);

  // const copyToClipboard = () => {
  //   navigator.clipboard.writeText(password);
  //   setShowTooltip(true);
  //   setTooltipText('Copied!');
  //   setTimeout(() => {
  //     setShowTooltip(false);
  //     setTooltipText('Copy');
  //   }, 2000);
  // };

  const copyToClipboard = useCallback(() => {
    passRef.current?.select();
    // passRef.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password);
    setShowTooltip(true);
    setTooltipText('Copied!');
    setTimeout(() => {
      setShowTooltip(false);
      setTooltipText('Copy');
    }, 2000);
  
  },[password]);

  const handleIncludeCharsChange = () => {
    setIncludeChars((prev) => !prev);
    if (!includeChars) {
      setLowercase(false);
      setUppercase(false);
    }
  };

  const handleLowercaseChange = () => {
    setLowercase((prev) => !prev);
    if (!lowercase) {
      setIncludeChars(false);
      setUppercase(false);
    }
  };

  const handleUppercaseChange = () => {
    setUppercase((prev) => !prev);
    if (!uppercase) {
      setIncludeChars(false);
      setLowercase(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Password Generator
          </h2>
          <div className="mb-4 relative">
            <input
              type="text"
              value={password}
              readOnly
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Generated password"
              ref={passRef}
            />
            <button
              onClick={copyToClipboard}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() =>
                !tooltipText.includes('Copied') && setShowTooltip(false)
              }
              className="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors"
            >
              Copy
            </button>
            {showTooltip && (
              <div className="absolute right-9 transform translate-x-1/2 top-[-2.4rem] mt-2 px-2 py-1 bg-black text-white text-xs rounded shadow transition-all duration-200">
                {tooltipText}
              </div>
            )}
          </div>
          <div className="mb-6">
            <button
              onClick={generatePassword}
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
            >
              Generate New Password
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password Length: {length}
              </label>
              <input
                type="range"
                min="8"
                max="50"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={includeNumbers}
                  onChange={() => setIncludeNumbers((prev) => !prev)}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="text-gray-700">Include Numbers</span>
              </label>
            </div>
            <div>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={includeSymbols}
                  onChange={() => setIncludeSymbols((prev) => !prev)}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="text-gray-700">Include Symbols</span>
              </label>
            </div>
            <div>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={includeChars}
                  onChange={handleIncludeCharsChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="text-gray-700">Include Characters</span>
              </label>
            </div>
            <div>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={lowercase}
                  onChange={handleLowercaseChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="text-gray-700">Lowercase Only</span>
              </label>
            </div>
            <div>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={uppercase}
                  onChange={handleUppercaseChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="text-gray-700">Uppercase Only</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
