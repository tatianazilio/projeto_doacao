import React from 'react';
import './style.css'
import Button from '../button'
import Proptypes from 'prop-types';

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-body">
                <h3>{props.titulo}</h3>
                <p>{props.descricao}</p>
                <Button texto="Eu quero"></Button>
            </div>
        </div>
    )
}

Card.propTypes = {
    titulo: Proptypes.string,
    descricao: Proptypes.string,
};