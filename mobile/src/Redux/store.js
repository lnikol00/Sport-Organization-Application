import { createStore, combineReducers, applyMiddleware } from "redux"
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { newsListReducer } from "./Reducers/NewsReducers";

const reducer = combineReducers({
    newsList: newsListReducer,
})

const middleware = [thunk]

const initialState = {

}

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store