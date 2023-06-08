import React from "react";
export default function ResultTemplate(props) {
  let data = props.data;
  const confirmMessage = () => {
    let name = prompt("Please enter your Number");
    alert(name + " a confirmation message is send to your number.");
  };

  return (
    <>
      <div className="main-parent">
        <div className="main">
          <div className="left">
            <span>{data.source}</span>
            <div id="bar">l</div>
            <span>{data.destination}</span>
            <div>{data.name}</div>
          </div>
          <div className="right">
            <div>$500</div>
            <button id="btn" onClick={confirmMessage}>
              Accept
            </button>
          </div>
        </div>
      </div>

      {/* <div id="data">
        <span>{data.name}</span>
        <span>{data.source}</span>
        <span>{data.destination}</span>
        <button id="btn" onClick={confirmMessage}>
          Accept
        </button>
      </div> */}
    </>
  );
}
