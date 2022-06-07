import {
    POSTS_GET_ALL__REQUEST,
    POSTS_GET_ALL__SUCCESS,
    POSTS_GET_ALL__FAIL,
} from "./types";

export const requestAll = (data: PageType) => ({
    type: POSTS_GET_ALL__REQUEST,
    asyncActions: [POSTS_GET_ALL__SUCCESS, POSTS_GET_ALL__FAIL],
    payload: data,
});
