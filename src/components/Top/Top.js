import React from "react";
import "./Top.css";


const Top = (props) => (
    <div className="container">
         <nav className="navbar fixed-top navy" >
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <span className="nav-link active" >Clicky Game</span>
                </li>
                <li className="nav-item">
                    <span className="nav-link" >Score: {props.score} </span>
                </li>
                <li className="nav-item">
                    <span className="nav-link disabled" >Top Score: {props.topScore}</span>
                </li>
                <li className="nav-item">
                    <p className="nav-link disabled" >{props.text}</p>
                </li>
            </ul>
        </nav>
        <div className="jumbotron aboutGame">
            <h1 className="blue">Ready for a game??</h1>
            <p className="lead blue">Don't click the same picture more than one, get the points!!</p>
        </div>
    </div>

);

export default Top;