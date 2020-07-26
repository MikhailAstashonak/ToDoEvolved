const addElement = (payload) => {
    return {
        type: 'ADD_ELEMENT',
        payload
    }
};

const removeElement = (payload) => {
    return {
        type: 'REMOVE_ELEMENT',
        payload
    }
}

const editElement = (payload) => {
    return {
        type: 'ELEMENT_EDITTED',
        payload
    }
}

export {
    addElement,
    removeElement,
    editElement
};