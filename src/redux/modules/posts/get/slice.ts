import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "~/redux/store";

const initialState: StateType<PostType[]> = {
    payload: [],
    error: false,
};

const postsSlice = createSlice({
    name: "getPostsByPage",
    initialState,
    reducers: {
        request: (state, action) => {
            state.type = action.type;
        },
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
export const actions = postsSlice.actions;

// Selectors
export const getPosts = (state: RootState) => state.posts.get.payload;

// Reducer
export default postsSlice.reducer;
