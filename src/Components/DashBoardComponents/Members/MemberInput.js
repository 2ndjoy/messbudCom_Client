import React, { useState } from "react";

function MemberInput() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDeleteClick = () => {
    setInputValue("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the input value
    console.log("Submitted value:", inputValue);
  };

  const handleInputKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleSubmit(event);
    }
  };

  return (
    <div className="m-5">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between">
          <label htmlFor="input" className="sr-only">
            Input
          </label>
          <div className="relative flex-1">
            <input
              type="text"
              id="input"
              placeholder="Enter member name"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
              className="p-2 rounded border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
              list="options"
            />
            {inputValue.length > 0 && (
              <button
                type="button"
                className="absolute top-0 right-10 h-full px-2 rounded-r border-l-0 border-t-0 border-b-0 text-gray-600 focus:outline-none hover:text-gray-800"
                onClick={handleDeleteClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>
          <button
            type="submit"
            className="ml-2 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Send Invite
          </button>
        </div>
        <datalist id="options">
          <option value="Option 1" />
          <option value="Option 2" />
          <option value="Option 3" />
          <option value="Option 4" />
        </datalist>
      </form>
    </div>
  );
}

export default MemberInput;
