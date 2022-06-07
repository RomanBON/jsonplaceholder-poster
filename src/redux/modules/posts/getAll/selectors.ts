import { createSelector } from "reselect";

import { RootState } from "~/redux/store";

import { POSTS_GET_ALL__INIT, POSTS_GET_ALL__REQUEST } from "./types";

export const state = (state: RootState) => state.posts.getAll;

export const isPending = createSelector(
    state,
    (state) =>
        state.type === POSTS_GET_ALL__INIT || state.type === POSTS_GET_ALL__REQUEST
);

export const allPosts = createSelector(state, (state) => state.payload as PostType[]);

export const allPostsLength = createSelector(allPosts, (state) => state.length);

export const isPostsListEmpty = createSelector(state, (state) => {
    const posts = state.payload as PostType[];

    return posts.length === 0;
});
