import {
    MEMBERS_LIST_REQUEST,
    MEMBERS_LIST_SUCCESS,
    MEMBERS_LIST_FAIL,
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