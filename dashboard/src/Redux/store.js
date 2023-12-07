import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { userListReducer, userLoginReducer } from "./Reducers/UserReducers";
import { productCreateReducer, productDeleteReducer, productListReducer } from "./Reducers/ProductReducers";
import { newsCreateReducer, newsDeleteReducer, newsListReducer } from "./Reducers//NewsReducers";
import { photosDeleteReducer, photosCreateReducer, photosListReducer } from "./Reducers/PhotosReducers";
import { membersListReducer } from "./Reducers/MemberReducers";


const reducer = combineReducers({
    userLogin: userLoginReducer,
    userList: userListReducer,
    productList: productListReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    newsList: newsListReducer,
    newsDelete: newsDeleteReducer,
    newsCreate: newsCreateReducer,
    photosList: photosListReducer,
    photosDelete: photosDeleteReducer,
    photosCreate: photosCreateReducer,
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