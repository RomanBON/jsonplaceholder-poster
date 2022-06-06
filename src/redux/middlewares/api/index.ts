import { AnyAction, Dispatch, Middleware } from "redux";

import postsMiddleware from "./posts";
import { posts } from "~/redux/modules";

const API: Middleware = (store) => (next: Dispatch) => (action: AnyAction) => {
    switch (action.type) {
        case posts.getAll.types.POSTS_GET__REQUEST:
        case posts.add.types.POST_ADD__REQUEST:
        case posts.deleteById.types.POST_DELETE__REQUEST:
            return postsMiddleware(store, next, action);

        default: {
            return next(action);
        }
    }
};

export default API;
