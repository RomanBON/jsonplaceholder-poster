import { AnyAction, Dispatch, Middleware } from "redux";

import { posts } from "~/redux/modules";

import postsMiddleware from "./posts";

const API: Middleware = (store) => (next: Dispatch) => (action: AnyAction) => {
    switch (action.type) {
        case posts.slice.add.fulfilled.type:
        case posts.slice.deleteById.fulfilled.type:
            return postsMiddleware(store, next, action);

        default: {
            return next(action);
        }
    }
};

export default API;
