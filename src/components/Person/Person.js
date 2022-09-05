import React from "react";
import './Person.css'
const Person = (props) => {
    return(
        <div className="container-card divInline" >
            <div className="card" >
            
        <img src={props.img} alt=""/>
        <div className="contenido-card">
        <h3>{props.name}</h3>
        <h4 className="hora">{props.hora}</h4>
        </div>
        </div>
        </div>

 
    )
}

export default Person

