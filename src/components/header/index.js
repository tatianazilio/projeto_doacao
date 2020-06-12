import React from 'react';
import './style.css'

export default function Header() {
    const listaDeLinks = ["home", "contato", "doações"];
    return (
        <header>
            <div className="row">
                <div className="col-3">
                <h3>LOGO</h3>
                </div>
                <div className="col-9">
                    <ul className="d-flex justify-content-around">
                        {listaDeLinks.map(link => {
                            return <li>{link}</li>
                        })}
                    </ul>
                </div>
                
            </div>
        </header>
    )
}