import { createSelector } from "reselect";

import { RootState } from "~/redux/store";

import { POST_DELETE__REQUEST } from "./types";

export const state = (state: RootState) => state.posts.get;

export const isPending = createSelector(
    state,
    (state) => state.type === POST_DELETE__REQUEST
);
