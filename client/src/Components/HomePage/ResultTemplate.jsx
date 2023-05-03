import React from "react";
// import "./";
export default function ResultTemplate(props) {
  let data = props.data;
  const confirmMessage = () => {
    let name = prompt("Please enter your Number");
    alert(name+" a confirmation message is send to your number.");
  };

  return (
    <div id="data">
      <span>{data.name}</span>
      <span>{data.source}</span>
      <span>{data.destination}</span>
      <button id="btn" onClick={confirmMessage}>
        Accept
      </button>
    </div>
  );
}
