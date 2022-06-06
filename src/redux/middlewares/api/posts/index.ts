import { MiddlewareAPI, AnyAction, Dispatch } from "redux";

import { posts } from "~/redux/modules";

import getWallMiddleware from "./getAll";
import addWallMiddleware from "./add";
import deleteWallMiddleware from "./delete";

export default (store: MiddlewareAPI, next: Dispatch, action: AnyAction) => {
    switch (action.type) {
        case posts.getAll.types.POSTS_GET__REQUEST:
            return getWallMiddleware(store, next, action);
        case posts.add.types.POST_ADD__REQUEST:
            return addWallMiddleware(store, next, action);
        case posts.deleteById.types.POST_DELETE__REQUEST:
            return deleteWallMiddleware(store, next, action);
        default: {
            next(action);
        }
    }
};
