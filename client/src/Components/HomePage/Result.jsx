import React from "react";
import "./Result.css";
import ResultTemplate from "./ResultTemplate";
import { useLocation } from 'react-router-dom';
export default function Result() {
  const location = useLocation();
  const arr = location.state.data;
  return (
    <>
      <div id="main">
        <div>
          <span>Name</span>
          <span>Pickup</span>
          <span>Drop</span>
          <button id="btn1">Submit</button>
        </div>
        {arr.map((e,i) => {
          return <ResultTemplate data={e} key={i}/>;
        })}
      </div>
    </>
  );
}
