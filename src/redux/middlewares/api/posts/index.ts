import { MiddlewareAPI, AnyAction, Dispatch } from "redux";

import { posts } from "~/redux/modules";

import getAllPostsMiddleware from "./getAll";
import getPostsMiddleware from "./get";
import addPostMiddleware from "./add";
import deletePostMiddleware from "./delete";

let paramsPerPage = {};

export default (store: MiddlewareAPI, next: Dispatch, action: AnyAction) => {
    const { getState } = store;
    const state = getState();

    if (action.type === posts.get.slice.actions.request.type) {
        paramsPerPage = action.payload;
    }

    const allPostsLength = posts.getAll.slice.allPostsLength(state);

    switch (action.type) {
        case posts.get.slice.actions.request.type: {
            if (allPostsLength === 0) {
                return getAllPostsMiddleware(store, next, action);
            } else {
                return getPostsMiddleware(store, next, { ...action, ...{ paramsPerPage } });
            }
        }
        case posts.getAll.slice.actions.success.type:
            return getPostsMiddleware(store, next, { ...action, ...{ paramsPerPage } });
        case posts.add.slice.actions.request.type:
            return addPostMiddleware(store, next, action);
        case posts.deleteById.slice.actions.request.type:
            return deletePostMiddleware(store, next, action);
        default: {
            next(action);
        }
    }
};
