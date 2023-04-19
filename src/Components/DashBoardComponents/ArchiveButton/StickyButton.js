import React from "react";

function StickyButton(props) {
  const handleClick = () => {
    // Do something when the button is clicked
  };

  return (
    <button
      className="fixed lg:bottom-40 lg:right-40 bottom-20 right-20 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      onClick={handleClick}
    >
      {props.children}
    </button>
  );
}

export default StickyButton;
