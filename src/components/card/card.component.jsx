import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className="card-container">
        <h1> {props.user.name} </h1>
        <h3> {props.user.email} </h3>
    </div>
)