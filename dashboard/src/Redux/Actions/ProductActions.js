import axios from "axios";
import {
    PRODUCT_CREATE_FAIL,
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_DELETE_FAIL,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS
} from "../Constants/ProductConstants"
import { logout } from "./UserAction";

// PRODUCT LIST
export const listProducts = () => async (dispatch, getState) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            }
        }

        const { data } = await axios.get("/api/products", config);
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })

    } catch (error) {
        const message =
            error.response && error.response.data.message ? error.response.data.message : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout())
        }

        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: message
        });
    }
}

// DELETE PRODUCT
export const deleteProduct = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: PRODUCT_DELETE_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            }
        }

        await axios.delete(`/api/products/${id}`, config);
        dispatch({ type: PRODUCT_DELETE_SUCCESS })

    } catch (error) {
        const message =
            error.response && error.response.data.message ? error.response.data.message : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout())
        }

        dispatch({
            type: PRODUCT_DELETE_FAIL,
            payload: message
        });
    }
}

// CREATE PRODUCT
export const createProduct = (title, image, description, price) => async (dispatch, getState) => {
    try {
        dispatch({ type: PRODUCT_CREATE_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            }
        }

        const { data } = await axios.post(
            `/api/products`,
            { title, image, description, price },
            config
        );
        dispatch({ type: PRODUCT_CREATE_SUCCESS, payload: data })

    } catch (error) {
        const message =
            error.response && error.response.data.message ? error.response.data.message : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout())
        }

        dispatch({
            type: PRODUCT_CREATE_FAIL,
            payload: message
        });
    }
}