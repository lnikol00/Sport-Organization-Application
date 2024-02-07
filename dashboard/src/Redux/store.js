import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { userCreateReducer, userListReducer, userLoginReducer } from "./Reducers/UserReducers";
import { productCreateReducer, productDeleteReducer, productEditReducer, productListReducer } from "./Reducers/ProductReducers";
import { newsCreateReducer, newsDeleteReducer, newsListReducer } from "./Reducers//NewsReducers";
import { photosDeleteReducer, photosCreateReducer, photosListReducer } from "./Reducers/PhotosReducers";


const reducer = combineReducers({
    userLogin: userLoginReducer,
    userList: userListReducer,
    userCreate: userCreateReducer,
    productList: productListReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productEdit: productEditReducer,
    newsList: newsListReducer,
    newsDelete: newsDeleteReducer,
    newsCreate: newsCreateReducer,
    photosList: photosListReducer,
    photosDelete: photosDeleteReducer,
    photosCreate: photosCreateReducer,
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