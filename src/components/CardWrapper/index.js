import React from 'react';
import './index.css';

export default function CardWrapper({ children, title }) {
    return (
        <div className="card-wrapper">
            <h3 className="card-wrapper-h3">{ title }</h3>
            <div className="card-wrapper-container">
                { children }
            </div>
        </div>
    )
}