import React, {useEffect} from 'react';
import List from '../../components/list';
import { connect } from 'react-redux';

import {
    removeElement,
    editElement
} from '../../actions';

const filtering = (list, filter) => {
    switch ( filter ) {
        case 'all':
            return list;

        case 'important':
            return list.filter( item => item.important === true);

        case 'done':
            return list.filter( item => item.done === true);
    }

};

let array = [];
const ListContainer = ({removeElement, editElement, itemList, filter}) => {
        
        return (
        <List 
            removeElement ={removeElement} 
            editElement   ={editElement} 
            itemList      ={filtering(itemList, filter)}/>
    )
};

const mapStateToProps = state => {
    // Destructure
    const {itemList, filter} = state;

    return {
        itemList,
        filter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeElement: (payload) => dispatch(removeElement(payload)),
        editElement:   (payload) => dispatch(editElement(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);