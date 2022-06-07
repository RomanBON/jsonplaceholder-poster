import { MiddlewareAPI, AnyAction, Dispatch } from "redux";

import { posts } from "~/redux/modules";

import getAllPostsMiddleware from "./getAll";
import getPostsMiddleware from "./get";
import addPostMiddleware from "./add";
import deletePostMiddleware from "./delete";

let paramsPerPage = {};

export default (store: MiddlewareAPI, next: Dispatch, action: AnyAction) => {
    if (action.type === posts.get.types.POSTS_GET__REQUEST) {
        paramsPerPage = action.payload;
    }

    const { getState } = store;
    const state = getState();

    const isPostsListEmpty = posts.getAll.selectors.isPostsListEmpty(state);

    switch (action.type) {
        case posts.get.types.POSTS_GET__REQUEST: {
            if (isPostsListEmpty) {
                return getAllPostsMiddleware(store, next, action);
            } else {
                return getPostsMiddleware(store, next, { ...action, ...{ paramsPerPage } });
            }
        }
        case posts.getAll.types.POSTS_GET_ALL__SUCCESS:
            return getPostsMiddleware(store, next, { ...action, ...{ paramsPerPage } });
        case posts.add.types.POST_ADD__REQUEST:
            return addPostMiddleware(store, next, action);
        case posts.deleteById.types.POST_DELETE__REQUEST:
            return deletePostMiddleware(store, next, action);
        default: {
            next(action);
        }
    }
};
