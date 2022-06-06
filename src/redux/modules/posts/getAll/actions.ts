import { POSTS_GET__REQUEST } from "./types";

export const getAllRequest = ({ number }: PageType) => ({
    type: POSTS_GET__REQUEST,
    payload: {
        number,
    },
});
