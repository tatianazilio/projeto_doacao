import React from 'react';
import './style.css'

export default function Depoimento (props) {
    return <div className="card depoimento">
        <h5>{props.titulo}</h5>
        <p>{props.depoimento}</p>
        <p>{props.autor}</p>
    </div>
}