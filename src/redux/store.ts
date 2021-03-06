import { configureStore } from "@reduxjs/toolkit";

import { posts, users } from "~/redux/modules";

import { apiMiddleware } from "./middlewares";

const middlewares = [
    apiMiddleware,
];

const store = configureStore(
    {
        reducer: {
            posts: posts.reducer,
            users: users.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(middlewares),
    }
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
