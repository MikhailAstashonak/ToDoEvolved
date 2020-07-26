import React from 'react';
import './stats.css';

const Stats = ({all, important, done}) => {
    return (
        <p className='stats'>
            All - {all}, Important - {important}, Done - {done }
        </p>
    )
};

export default Stats;