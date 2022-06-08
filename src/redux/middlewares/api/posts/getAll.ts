import { AnyAction, Dispatch, MiddlewareAPI } from "redux";

import { Posts } from "~/api";
import { posts } from "~/redux/modules";

export default ({ dispatch }: MiddlewareAPI, next: Dispatch, action: AnyAction) => {
    next(action);

    dispatch(posts.getAll.slice.actions.request());

    return Posts.getAll()
        .then(({ data }) => {
            dispatch(posts.getAll.slice.actions.success(data));
        })
        .catch((error) => {
            throw dispatch(posts.getAll.slice.actions.fail(error));
        });
};
