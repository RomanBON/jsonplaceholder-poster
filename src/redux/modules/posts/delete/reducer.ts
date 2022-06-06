import getReducer from "~/redux/modules/generic/reducer";

import {
    POST_DELETE__INIT,
    POST_DELETE__REQUEST,
    POST_DELETE__SUCCESS,
    POST_DELETE__FAIL,
} from "./types";

const initialState = {
    payload: {},
    error: null,
    type: POST_DELETE__INIT,
};

export default getReducer(initialState, [
    POST_DELETE__REQUEST,
    POST_DELETE__SUCCESS,
    POST_DELETE__FAIL,
]);
