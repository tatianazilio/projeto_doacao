import React from 'react';
import './style.css'
import imgAlimentos from "../../assets/img/alimentos-760x450.webp"


export default function Card() {
    return (
            <div className="card">
                <div className="card-body">
                    <img src= {imgAlimentos} className="card-img-top" alt=""></img>
                    <h4 className="card-title">Doação de alimentos</h4>
                    <p className="card-text">Estou doando para ajudar quem precisa</p>
                    <button className="btn btn-success">Quero ajudar!</button>
            </div>
        </div>
    )
}