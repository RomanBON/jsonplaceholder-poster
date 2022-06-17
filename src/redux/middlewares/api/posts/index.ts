import { MiddlewareAPI, AnyAction, Dispatch } from "redux";

import { posts } from "~/redux/modules";

import addPostMiddleware from "./add";
import deleteByIdPostMiddleware from "./deleteById";

export default (store: MiddlewareAPI, next: Dispatch, action: AnyAction) => {
    switch (action.type) {
        case posts.slice.add.fulfilled.type:
            return addPostMiddleware(store, next, action);
        case posts.slice.deleteById.fulfilled.type:
            return deleteByIdPostMiddleware(store, next, action);

        default: {
            next(action);
        }
    }
};
