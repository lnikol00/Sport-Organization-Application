import axios from "axios"
import { PHOTOS_LIST_FAIL, PHOTOS_LIST_REQUEST, PHOTOS_LIST_SUCCESS } from "../Constants/PhotosConstants"

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