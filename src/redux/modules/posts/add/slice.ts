import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "~/redux/store";

const initialState: StateType<PostType[]> = {
    payload: [],
    error: false,
};

const addPostSlice = createSlice({
    name: "add",
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
export const actions = addPostSlice.actions;

// Selectors
export const isPending = (state: RootState) => state.posts.add.type === actions.request.type;

// Reducer
export default addPostSlice.reducer;
