import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import { apiMiddleware } from "./middlewares";
import { posts } from "~/redux/modules";

const middlewares = [
    thunk,
    apiMiddleware,
];

const store = configureStore(
    {
        reducer: {
            posts: posts.reducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
    }
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export default store;
