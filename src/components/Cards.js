import React from "react";
import './Cards.css'

const Card = props => (
    <>
        <div className="Cards">
            <a href={props.path}>
                <button class={props.cor}>  
                    <h2>{props.text}</h2>
                    <img src={props.img} />
                </button>
            </a>
        </div>
    </>
)

export default Card