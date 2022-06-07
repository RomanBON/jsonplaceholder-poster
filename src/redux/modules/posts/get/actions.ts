import { POSTS_GET__REQUEST, POSTS_GET__SUCCESS, POSTS_GET__FAIL } from "./types";

export const request = (data: PageType) => ({
    type: POSTS_GET__REQUEST,
    asyncActions: [POSTS_GET__SUCCESS, POSTS_GET__FAIL],
    payload: data,
});
