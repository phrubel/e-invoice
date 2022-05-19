import React from "react";
// import headerImage from "./../../image/header-image.jpg"
import image1 from "../../image/header-image.jpg";
import LogIn from "../LogIn/LogIn";
import "./Home.css";

const Home = () => {
  return (
    <div className="container pt-5 pb-5">
      <div className="main-header row justify-content-start ">
        <div className="header col-md-7">
          <img className="col-xs-12 col-sm-12" src={image1} alt="head"></img>
          <div className="text">Welcome To E-Invoice</div>
        </div>
        <div className="header col-md-5">
          <LogIn />
        </div>
      </div>
    </div>
  );
};

export default Home;
