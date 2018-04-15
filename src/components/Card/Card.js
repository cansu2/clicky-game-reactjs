import React from "react";
import "./Card.css";


const Card = (props) => (
    <div>
    <div className="container">
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} onClick={() => props.handleClicked(props.id)}/>
        </div>
    </div>
    </div>
    </div>
  
)

export default Card;