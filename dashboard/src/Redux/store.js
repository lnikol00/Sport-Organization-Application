import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { userListReducer, userLoginReducer } from "./Reducers/UserReducers";
import { productDeleteReducer, productListReducer } from "./Reducers/ProductReducers";
import { newsListReducer } from "./Reducers//NewsReducers";
import { photosListReducer } from "./Reducers/PhotosReducers";
import { membersListReducer } from "./Reducers/MemberReducers";


const reducer = combineReducers({
    userLogin: userLoginReducer,
    userList: userListReducer,
    productList: productListReducer,
    productDelete: productDeleteReducer,
    newsList: newsListReducer,
    photosList: photosListReducer,
    membersList: membersListReducer,
});

// Login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

const initialState = {
    userLogin: {
        userInfo: userInfoFromLocalStorage,
    }
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store