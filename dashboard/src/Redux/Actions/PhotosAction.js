import axios from "axios"
import { PHOTOS_CREATE_FAIL, PHOTOS_CREATE_REQUEST, PHOTOS_CREATE_SUCCESS, PHOTOS_DELETE_FAIL, PHOTOS_DELETE_REQUEST, PHOTOS_DELETE_SUCCESS, PHOTOS_LIST_FAIL, PHOTOS_LIST_REQUEST, PHOTOS_LIST_SUCCESS } from "../Constants/PhotosConstants"
import { logout } from "./UserAction";

// PHOTOS LIST
export const listPhotos = () => async (dispatch) => {
    try {
        dispatch({ type: PHOTOS_LIST_REQUEST })
        const { data } = await axios.get("/api/photos");
        dispatch({ type: PHOTOS_LIST_SUCCESS, payload: data })

    } catch (error) {
        dispatch({
            type: PHOTOS_LIST_FAIL,
            payload:
                error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
}

// DELETE PHOTO
export const deletePhoto = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: PHOTOS_DELETE_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            }
        }

        await axios.delete(`/api/photos/${id}`, config);
        dispatch({ type: PHOTOS_DELETE_SUCCESS })

    } catch (error) {
        const message =
            error.response && error.response.data.message ? error.response.data.message : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout())
        }

        dispatch({
            type: PHOTOS_DELETE_FAIL,
            payload: message
        });
    }
}

// CREATE PHOTO
export const createPhotos = (image) => async (dispatch, getState) => {
    try {
        dispatch({ type: PHOTOS_CREATE_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            }
        }

        const { data } = await axios.post(
            `/api/photos`,
            { image },
            config
        );
        dispatch({ type: PHOTOS_CREATE_SUCCESS, payload: data })

    } catch (error) {
        const message =
            error.response && error.response.data.message ? error.response.data.message : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout())
        }

        dispatch({
            type: PHOTOS_CREATE_FAIL,
            payload: message
        });
    }
}