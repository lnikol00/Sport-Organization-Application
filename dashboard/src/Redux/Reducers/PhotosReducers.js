import {
    PHOTOS_LIST_REQUEST,
    PHOTOS_LIST_SUCCESS,
    PHOTOS_LIST_FAIL,
    PHOTOS_CREATE_REQUEST,
    PHOTOS_CREATE_SUCCESS,
    PHOTOS_CREATE_FAIL,
    PHOTOS_CREATE_RESET,
    PHOTOS_DELETE_REQUEST,
    PHOTOS_DELETE_SUCCESS,
    PHOTOS_DELETE_FAIL
} from "../Constants/PhotosConstants";

//PHOTOS LIST
export const photosListReducer = (state = { photos: [] }, action) => {
    switch (action.type) {
        case PHOTOS_LIST_REQUEST:
            return { loading: true, photos: [] };
        case PHOTOS_LIST_SUCCESS:
            return { loading: false, photos: action.payload };
        case PHOTOS_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

// DELETE PHOTO
export const photosDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case PHOTOS_DELETE_REQUEST:
            return { loading: true };
        case PHOTOS_DELETE_SUCCESS:
            return { loading: false, success: true };
        case PHOTOS_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}


// CREATE PHOTO
export const photosCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PHOTOS_CREATE_REQUEST:
            return { loading: true };
        case PHOTOS_CREATE_SUCCESS:
            return { loading: false, success: true, photo: action.payload };
        case PHOTOS_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case PHOTOS_CREATE_RESET:
            return {};
        default:
            return state;
    }
}