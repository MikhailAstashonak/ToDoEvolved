const filtering = (filt, payload) => {
    if (filt === payload === ('important' || 'done')) {
        return 'all'
    } else {
        return payload;
    }
};

const Filter = (state, action) => {
    switch(action.type) {
        case 'ADD_FILTER': 
            return filtering(state.filter, action.payload) ;

        default:
            return 'all'
    }
}

export default Filter;