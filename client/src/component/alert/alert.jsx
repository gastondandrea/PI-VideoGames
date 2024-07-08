import React from 'react';
import './alert.css';

function Alert({ message, onClose }) {
    return (
        <div className="alert-container">
            <div className="alert-box">
                <div className="alert-content">
                    <p className="alert-message">{message}</p>
                    <button className="alert-close-btn" onClick={onClose}>OK</button>
                </div>
            </div>
        </div>
    );
}

export default Alert;