import ItemList from './itemList';
import Filter from './filter';

const reducer = (state = {}, action) => {
    return {
        // Work with all tasks array
        itemList: ItemList(state, action),

        // Stores filter information
        filter: Filter(state, action),
    }
}

export { reducer };