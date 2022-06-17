import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { Users } from "~/api";
import { RootState } from "~/redux/store";

export const get = createAsyncThunk(
    "users/get",
    async () => {
        return await Users.get().then(({ data }) => {
            return data;
        })
            .catch((error) => {
                throw error;
            });
    }
);

const initialState: GenericState<UserType[]> = {
    entities: [],
    loading: "users/idle",
    error: null,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: {
        [get.pending.type]: (state, action) => {
            state.loading = action.type;
        },
        [get.fulfilled.type]: (state, action: PayloadAction<UserType[]>) => {
            state.loading = action.type;
            state.entities = action.payload;
        },
        [get.rejected.type]: (state, action: PayloadAction<ErrorType>) => {
            state.loading = action.type;
            state.error = action.payload;
        },
    },
});

// Selectors
export const getUsers = () => (state: RootState) => state.users.entities;
export const getUserById = (userId: number) => (state: RootState) =>
    state.users.entities.find((user) => user.id === userId);

// Reducer
export default usersSlice.reducer;
