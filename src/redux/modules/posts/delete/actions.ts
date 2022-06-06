import { POST_DELETE__REQUEST, POST_DELETE__SUCCESS, POST_DELETE__FAIL } from "./types";

export const deleteById = (data: PostDeleteType) => ({
    type: POST_DELETE__REQUEST,
    asyncActions: [POST_DELETE__SUCCESS, POST_DELETE__FAIL],
    payload: data,
});
