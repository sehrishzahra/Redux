const initialState = {
    data: [],
};

const CommentReducers = (state = initialState, action) => {
    switch (action.type) {
        case "STORE_DATA":
            const d = action.payload;
            return {
                ...state, data: d
            };

        case "ADD_COMMENT":
            return {
                ...state,
                data: [...state.data, action.payload]
            };

        case "DELETE_COMMENT":
            return {
                data: [...state.data.filter(d => d.id !== action.payload )]
            }
        case "REMOVE_ALL_COMMENT" : 
        return{
            data: []
        }    
        default:
            return state;
    }
};

export default CommentReducers;
