import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function Header(props) {
    const listaDeLinks = ["home", "contato", "doações"];
    return (
        <header className="header">
            <div className="row">
                <div className="col-3">
                <h3>LOGO</h3>
                </div>
                <div className="col-9">
                    <ul className="d-flex justify-content-around">
                        {listaDeLinks.map((link, index) => {
                            return <li key='{index}'>{link}</li>
                        })}
                        <li className="nav-item">
                            <Link to="/contato">Contato</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}