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
        {arr.map((e,i) => {
          return <ResultTemplate data={e} key={i}/>;
        })}
      </div>
    </>
  );
}
