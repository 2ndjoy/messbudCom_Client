import React from "react";

function StickyButton(props) {
  const handleClick = () => {
    // Do something when the button is clicked
  };

  return (
    <button
      style={{ backgroundColor: "#FEA601" }}
      className="fixed lg:bottom-40 lg:right-40 bottom-20 right-20 px-4 py-2 text-white rounded hover:bg-yellow-600"
      onClick={handleClick}
    >
      {props.children}
    </button>
  );
}

export default StickyButton;
