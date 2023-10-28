
export const StoreData = (data) => {
    return {
        type: "STORE_DATA",
        payload: data
    }
}

export const addComment = (data) => {
    return {
        type: "ADD_COMMENT",
        payload: {
            id: new Date().getTime().toString(),
            name:data
        }
        
    }
}

export const DelComment = (itemId) => {
    return {
        type: "DELETE_COMMENT",
        payload: itemId
    }
}

export const clearComment = () => {
    return {
        type: "REMOVE_ALL_COMMENT"
    }
}