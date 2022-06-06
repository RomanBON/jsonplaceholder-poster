import { POST_ADD__REQUEST, POST_ADD__SUCCESS, POST_ADD__FAIL } from "./types";

export const add = (data: PostAddType) => ({
    type: POST_ADD__REQUEST,
    asyncActions: [POST_ADD__SUCCESS, POST_ADD__FAIL],
    payload: data,
});
