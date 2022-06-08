import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "~/redux/store";

const initialState: StateType<PostType[]> = {
    payload: [],
    error: false,
};

const deletePostSlice = createSlice({
    name: "deletePostById",
    initialState,
    reducers: {
        request: (state, action) => {
            state.type = action.type;
        },
        success: (state, action) => {
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
export const actions = deletePostSlice.actions;

// Selectors
export const isPending = (state: RootState) => state.posts.deleteById.type === actions.request.type;

// Reducer
export default deletePostSlice.reducer;
