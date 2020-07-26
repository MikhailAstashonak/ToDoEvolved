import React from 'react'
import ListItem from '../list-item';
import './list.css';

const List = ({removeElement, editElement, itemList}) => {
    const elements = itemList.map( (item) => {
        return <ListItem 
            removeElement={removeElement}
            editElement  ={editElement}
            item         ={item} 
            id           ={item.id}/>
    })

    return (
        <div className='list'>
            { elements }
        </div>
    )
};

export default List;