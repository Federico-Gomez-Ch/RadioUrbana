import React from "react";
import './Person.css'
const Person = (props) => {
    return(
        <div className="container-card divInline" >
            <div className="card" >
        <img src={props.img} alt=""/>
        <div className="contenido-card">
        <h2>{props.name}</h2>
        <h3 className="hora">{props.hora}</h3>
        </div>
        </div>
        </div>

 
    )
}

export default Person

