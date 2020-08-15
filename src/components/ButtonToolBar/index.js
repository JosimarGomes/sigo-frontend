import React from 'react';
import './index.css';

export default function ButtonToolBar({ children }) {
    return (
        <div className="button-tool-bar">
            { children }
        </div>
    )
}