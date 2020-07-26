import React from 'react';
import './list-item.css';

const ListItem = ({item, removeElement, editElement}) => {
    const {content, id, done, important} = item;
    let name = 'list-item';
    name += done ? ' done': '';
    name += important ? ' important': '';
    return (
        <div className={name} id={id} >
            <div className='content-part'>
                <label>
                    <div className='important-checkbox checkbox' onClick={() => editElement({id, specific: 'important'})}></div>
                    <input type='checkbox'/>
                </label>
                <p onClick={() => editElement({id, specific: 'done'})}>{content}</p>
            </div>
 
            <button id='remove-btn' onClick={ () => { removeElement(item.id)}}>
                <i class="fas fa-ban"></i>
            </button>
        </div>
    )
}

export default ListItem;