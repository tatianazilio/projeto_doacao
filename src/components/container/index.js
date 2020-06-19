import React from 'react';
import './style.css';

export default function Container(props) {
    return <section className='section-ps'>
        {props.children}
    </section>
}