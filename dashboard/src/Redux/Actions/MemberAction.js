import axios from "axios"
import { MEMBERS_CREATE_FAIL, MEMBERS_CREATE_REQUEST, MEMBERS_CREATE_SUCCESS, MEMBERS_LIST_FAIL, MEMBERS_LIST_REQUEST, MEMBERS_LIST_SUCCESS } from "../Constants/MemberConstants"
import { logout } from "./UserAction";

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

// CREATE MEMBER
export const createMember = (name, image, role) => async (dispatch, getState) => {
    try {
        dispatch({ type: MEMBERS_CREATE_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            }
        }

        const { data } = await axios.post(
            `/api/members`,
            { name, image, role },
            config
        );
        dispatch({ type: MEMBERS_CREATE_SUCCESS, payload: data })

    } catch (error) {
        const message =
            error.response && error.response.data.message ? error.response.data.message : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout())
        }

        dispatch({
            type: MEMBERS_CREATE_FAIL,
            payload: message
        });
    }
}