import axios from "axios"
import { NEWS_LIST_FAIL, NEWS_LIST_REQUEST, NEWS_LIST_SUCCESS } from "../Constants/NewsConstants"

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