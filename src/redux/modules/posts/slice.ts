import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "~/redux/store";
import { Posts } from "~/api";
import { generateId } from "~/utils/generateId";

const initialState: GenericState<PostType[]> = {
    entities: [],
    loading: "posts/idle",
    error: null,
};

export const get = createAsyncThunk(
    "posts/get",
    async () => {
        return await Posts.get()
            .then(({ data }) => data)
            .catch((error) => error.toString());
    }
);

export const add = createAsyncThunk(
    "posts/add",
    async (data: PostAddType) => {
        return await Posts.add(data)
            .then(({ data }) => data)
            .catch((error) => error.toString());
    }
);

export const deleteById = createAsyncThunk(
    "posts/deleteById",
    async (data: PostDeleteType) => {
        return await Posts.deleteById(data)
            .then(({ data }) => data)
            .catch((error) => error.toString());
    }
);

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: {
        [get.pending.type]: (state, action) => {
            state.loading = action.type;
        },
        [get.fulfilled.type]: (state, action: PayloadAction<PostType[]>) => {
            state.loading = action.type;
            state.entities = action.payload;
        },
        [get.rejected.type]: (state, action: PayloadAction<ErrorType>) => {
            state.loading = action.type;
            state.error = action.payload;
        },
        [add.pending.type]: (state, action) => {
            state.loading = action.type;
        },
        [add.fulfilled.type]: (state, action: PayloadAction<PostType>) => {
            state.loading = action.type;
            // id obtained from the response is always the same, so in this case we generate our own
            const updatedData = { ...action.payload, id: generateId() };
            state.entities.unshift(updatedData);
        },
        [add.rejected.type]: (state, action: PayloadAction<ErrorType>) => {
            state.loading = action.type;
            state.error = action.payload;
        },
        [deleteById.pending.type]: (state, action) => {
            state.loading = action.type;
        },
        [deleteById.fulfilled.type]: (
            state, action: PayloadAction<PostType, string, { arg: { id: number } }>
        ) => {
            const { meta: { arg: { id } } } = action;
            state.loading = action.type;
            state.entities = state.entities.filter(post => post.id !== id);
        },
        [deleteById.rejected.type]: (state, action: PayloadAction<ErrorType>) => {
            state.loading = action.type;
            state.error = action.payload;
        },
    },
});

// Selectors
export const getAllPosts = (state: RootState) => state.posts.entities;
export const getPostsByPage = ({ number, limit }: PageType) => (state: RootState) => {
    const entities = state.posts.entities as PostType[];

    return entities.slice((number - 1) * limit, number * limit);
};
export const isPendingAddPost = () => (state: RootState) =>
    state.posts.loading === add.pending.type;
export const isSuccessAddPost = () => (state: RootState) =>
    state.posts.loading === add.fulfilled.type;
export const isPendingDeletePost = () => (state: RootState) =>
    state.posts.loading === deleteById.pending.type;

// Reducer
export default postsSlice.reducer;
