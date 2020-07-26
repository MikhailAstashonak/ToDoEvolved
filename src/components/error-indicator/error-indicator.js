import React from 'react';
import './error-indicator.css'

const ErrorIndicator = () => {
    return (
        <div className='error-indicator'>
            <p className='error-indicator-symb'>!</p>
            <span>Something goes wrong</span>
        </div>
    )
}

export default ErrorIndicator;