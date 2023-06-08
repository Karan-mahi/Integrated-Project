import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/HomePage/Home";
import {Route, Routes} from 'react-router-dom';
import Publish from "./Components/HomePage/Publish";
import Login from "./Components/HomePage/Login";
import Result from "./Components/HomePage/Result";
import Footer from "./Components/HomePage/Footer";


const App = () => {
  console.log(process.env.REACT_APP_BASE_URL); 
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path="/searchResult" element={ <Result /> } />
        <Route path="/" element={ <Footer />} />
        </Route>
        <Route path="/publishpage" element={ <Publish/> }></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
     
    </>
  );
};

export default App;
