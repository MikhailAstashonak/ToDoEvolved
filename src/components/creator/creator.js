import React from 'react';
import './creator.css';

const Creator = ({addElement}) => {
    return (
        <section className='creator-box'>
            <input type='text' 
                placeholder='Type here new task' 
                className='creator-input' 
                id = 'creator-input'  
                onKeyDown={ () => {} }/>
            <button className='add-task' 
                onClick={ () => { 
                            addElement(document.getElementById('creator-input').value || 'Something unknown');
                            document.getElementById('creator-input').value = ''
                        }
                    }
                >Add Task</button>
        </section>
    )
};

export default Creator;
