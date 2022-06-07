import getReducer from "~/redux/modules/generic/reducer";

import {
    POSTS_GET_ALL__INIT,
    POSTS_GET_ALL__REQUEST,
    POSTS_GET_ALL__SUCCESS,
    POSTS_GET_ALL__FAIL,
} from "./types";

const initialState = {
    payload: [],
    error: null,
    type: POSTS_GET_ALL__INIT,
};

export default getReducer(initialState, [
    POSTS_GET_ALL__REQUEST,
    POSTS_GET_ALL__SUCCESS,
    POSTS_GET_ALL__FAIL,
]);
