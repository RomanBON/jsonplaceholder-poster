import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "~/redux/store";

const initialState: StateType<UserType[]> = {
    payload: [],
    error: false,
};

const usersSlice = createSlice({
    name: "getUsers",
    initialState,
    reducers: {
        request: () => {},
        success: (state, action: PayloadAction<UserType[]>) => {
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
export const actions = usersSlice.actions;

// Selectors
export const getUsers = (state: RootState) => state.users.get.payload;
export const getUserById = (state: RootState, userId: number) =>
    state.users.get.payload.find((user) => user.id === userId);

// Reducer
export default usersSlice.reducer;
