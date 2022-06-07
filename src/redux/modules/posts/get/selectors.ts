import { createSelector } from "reselect";

import { RootState } from "~/redux/store";

import { POSTS_GET__INIT, POSTS_GET__REQUEST } from "./types";

export const state = (state: RootState) => state.posts.get;

export const isPending = createSelector(
    state,
    (state) =>
        state.type === POSTS_GET__INIT || state.type === POSTS_GET__REQUEST
);

export const posts = createSelector(state, (state) => state.payload);
