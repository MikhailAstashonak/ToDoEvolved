// Remove Item using it's id
const removeItem = (list, id) => {
    const clone = list.map( i => i);
    const itemIdx = list.findIndex( (i) => {
        return i.id === id;
    });
    return [ ...list.splice(0, itemIdx), ...clone.splice(itemIdx + 1) ];
};

// Creating new item with defined pattern
const itemPattern = (content, id) => {
    return {
        content,
        id,
        done      : false,
        important : false
    }
};

// Gives opportunity to unite two action.types
const markItem = (list, payload) => {

    const {id, specific} = payload;
    const item    = list.find((i) => i.id === id);
    const itemIdx = list.findIndex((i) => i.id === id);
    const clone = list.map( i => i);
    if (specific === 'important') {
        item.important = !item.important;
    }

    if (specific === 'done') {
        item.done = !item.done;
    }

    return [
        ...list.splice(0, itemIdx),
        item,
        ...clone.splice(itemIdx + 1)
    ]

};

let idCounter = 0;

const ItemList = (state, action) => {

    switch (action.type) {
        // If we add an element, we get it's content and create a new list-item
        case 'ADD_ELEMENT':
            state.itemList.push(itemPattern(action.payload, idCounter));
            idCounter += 1;
            return [ ...state.itemList];

        // If we remove item, we get it's id
        case 'REMOVE_ELEMENT':
            return removeItem(state.itemList, action.payload)

        case 'ELEMENT_EDITTED':
            return markItem(state.itemList, action.payload)

        default:
            return state.itemList ? state.itemList: [];
    }
}

export default ItemList