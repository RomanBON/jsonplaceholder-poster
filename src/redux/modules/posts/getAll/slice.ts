import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "~/redux/store";

const initialState: StateType<PostType[]> = {
    payload: [],
    error: false,
};

const postsAllSlice = createSlice({
    name: "getAllPosts",
    initialState,
    reducers: {
        request: () => {},
        success: (state, action: PayloadAction<PostType[]>) => {
            state.payload = action.payload;
            state.type = action.type;
        },
        fail: (state, action) => {
            state.error = action.payload;
            state.type = action.type;
        },
    }
});

// Actions
export const actions = postsAllSlice.actions;

// Selectors
export const getPostsAll = (state: RootState) => state.posts.getAll.payload;
export const isEmpty = (state: RootState) => state.posts.getAll.payload.length === 0;

// Reducer
export default postsAllSlice.reducer;
