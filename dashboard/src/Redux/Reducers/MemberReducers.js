import {
    MEMBERS_LIST_REQUEST,
    MEMBERS_LIST_SUCCESS,
    MEMBERS_LIST_FAIL,
    MEMBERS_CREATE_REQUEST,
    MEMBERS_CREATE_SUCCESS,
    MEMBERS_CREATE_FAIL,
    MEMBERS_CREATE_RESET,
} from "../Constants/MemberConstants";

//MEMBERS LIST
export const membersListReducer = (state = { members: [] }, action) => {
    switch (action.type) {
        case MEMBERS_LIST_REQUEST:
            return { loading: true, members: [] };
        case MEMBERS_LIST_SUCCESS:
            return { loading: false, members: action.payload };
        case MEMBERS_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

// CREATE MEMBER
export const memberCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case MEMBERS_CREATE_REQUEST:
            return { loading: true };
        case MEMBERS_CREATE_SUCCESS:
            return { loading: false, success: true, member: action.payload };
        case MEMBERS_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case MEMBERS_CREATE_RESET:
            return {};
        default:
            return state;
    }
}