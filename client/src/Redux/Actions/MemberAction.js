import axios from "axios"
import { MEMBERS_LIST_FAIL, MEMBERS_LIST_REQUEST, MEMBERS_LIST_SUCCESS } from "../Constants/MemberConstants"

// MEMBERS LIST
export const listMembers = () => async (dispatch) => {
    try {
        dispatch({ type: MEMBERS_LIST_REQUEST })
        const { data } = await axios.get("/api/members");
        dispatch({ type: MEMBERS_LIST_SUCCESS, payload: data })

    } catch (error) {
        dispatch({
            type: MEMBERS_LIST_FAIL,
            payload:
                error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
}