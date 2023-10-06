import React from "react";
import "./Shirtsec.css";

function Shirtsec() {
  return (
    <div className="main">
      <div className="shirtsec box">
        <h1> Oversized Qyalited parka</h1>
        <h3> Burnt Orange/White/black</h3>
        <h1> $129</h1>
      </div>
      <div className="searchsrc box ">
        <input type="text" placeholder="Search" className="textsearch"></input>
        Reset filter
      </div>
      <div className="chatsec box">
        <h3>
          New Groups <span> view all</span>
        </h3>
        <hr></hr>
        <h2> HOBIES AND ACTIVITIES </h2>
        <br></br>
        <p>0 Members</p>
        <h2> TOY AND GAMES</h2>
        <br></br>
        <p>0 Members</p>
        <h2> fashion and impliment </h2>
        <br></br>
        <p>0 Members</p>
      </div>
      <div className="camera">
        <img src="camera.jpg" alt="loading.."></img>
        <p>
          {" "}
          Sony-50mm optical<br></br> Lens for sony
        </p>
        <h4> Shop now </h4>
      </div>{" "}
      
    </div>
  );
}

export default Shirtsec;
