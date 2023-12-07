import axios from "axios"
import { NEWS_CREATE_FAIL, NEWS_CREATE_REQUEST, NEWS_CREATE_SUCCESS, NEWS_DELETE_FAIL, NEWS_DELETE_REQUEST, NEWS_DELETE_SUCCESS, NEWS_LIST_FAIL, NEWS_LIST_REQUEST, NEWS_LIST_SUCCESS } from "../Constants/NewsConstants"
import { logout } from "./UserAction";

// NEWS LIST
export const listNews = () => async (dispatch) => {
    try {
        dispatch({ type: NEWS_LIST_REQUEST })
        const { data } = await axios.get("/api/news");
        dispatch({ type: NEWS_LIST_SUCCESS, payload: data })

    } catch (error) {
        dispatch({
            type: NEWS_LIST_FAIL,
            payload:
                error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
}

// DELETE NEWS
export const deleteNews = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: NEWS_DELETE_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            }
        }

        await axios.delete(`/api/news/${id}`, config);
        dispatch({ type: NEWS_DELETE_SUCCESS })

    } catch (error) {
        const message =
            error.response && error.response.data.message ? error.response.data.message : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout())
        }

        dispatch({
            type: NEWS_DELETE_FAIL,
            payload: message
        });
    }
}

// CREATE NEWS
export const createNews = (title, image, description, body) => async (dispatch, getState) => {
    try {
        dispatch({ type: NEWS_CREATE_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            }
        }

        const { data } = await axios.post(
            `/api/news`,
            { title, image, description, body },
            config
        );
        dispatch({ type: NEWS_CREATE_SUCCESS, payload: data })

    } catch (error) {
        const message =
            error.response && error.response.data.message ? error.response.data.message : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout())
        }

        dispatch({
            type: NEWS_CREATE_FAIL,
            payload: message
        });
    }
}