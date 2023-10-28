import CommentReducers from "./commentReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
   DataReducer : CommentReducers
})

export default rootReducer