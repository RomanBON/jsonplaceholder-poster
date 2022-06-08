import { AnyAction, Dispatch, Middleware } from "redux";

import { posts, users } from "~/redux/modules";

import postsMiddleware from "./posts";
import usersMiddleware from "./users";

const API: Middleware = (store) => (next: Dispatch) => (action: AnyAction) => {
    switch (action.type) {
        case posts.get.slice.actions.request.type:
        case posts.getAll.slice.actions.success.type:
        case posts.add.slice.actions.request.type:
        case posts.deleteById.slice.actions.request.type:
            return postsMiddleware(store, next, action);

        case users.get.slice.actions.request.type:
            return usersMiddleware(store, next, action);

        default: {
            return next(action);
        }
    }
};

export default API;
