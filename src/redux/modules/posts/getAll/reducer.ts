import getReducer from "~/redux/modules/generic/reducer";

import {
    POSTS_GET__INIT,
    POSTS_GET__REQUEST,
    POSTS_GET__SUCCESS,
    POSTS_GET__FAIL,
} from "./types";

const initialState = {
    payload: [],
    error: null,
    type: POSTS_GET__INIT,
};

export default getReducer(initialState, [
    POSTS_GET__REQUEST,
    POSTS_GET__SUCCESS,
    POSTS_GET__FAIL,
]);
