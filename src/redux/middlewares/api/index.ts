import { AnyAction, Dispatch, Middleware } from "redux";

import postsMiddleware from "./posts";
import { posts } from "~/redux/modules";

const API: Middleware = (store) => (next: Dispatch) => (action: AnyAction) => {
    switch (action.type) {
        case posts.get.slice.actions.request.type:
        case posts.getAll.slice.actions.success.type:
        case posts.add.slice.actions.request.type:
        case posts.deleteById.slice.actions.request.type:
            return postsMiddleware(store, next, action);

        default: {
            return next(action);
        }
    }
};

export default API;
