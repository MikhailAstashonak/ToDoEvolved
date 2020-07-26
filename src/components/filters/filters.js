import React from 'react'
import './filters.css';

const Filters = ({filterAction}) => {
    return(
        <section className='filters'>
            <label>
                All
                <input type='radio' name='filter' className='filter-checkbox'/>
                <div className='checkbox' onClick={ () => filterAction('all')}></div>
            </label>
            <label>
                Important
                <input type='radio' name='filter' className='filter-checkbox'/>
                <div className='checkbox' onClick={ () => filterAction('important')}></div>
            </label>
            <label>
                Done
                <input type='radio' name='filter' className='filter-checkbox'/>
                <div className='checkbox' onClick={ () => filterAction('done')}></div>
            </label>
        </section>
    )
}

export default Filters;