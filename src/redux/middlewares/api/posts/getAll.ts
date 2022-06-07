import { AnyAction, Dispatch, MiddlewareAPI } from "redux";

import { Posts } from "~/api";
import { generic, posts } from "~/redux/modules";

export default ({ dispatch }: MiddlewareAPI, next: Dispatch, action: AnyAction) => {
    next(action);

    return Posts.getAll()
        .then(({ data }) => {
            dispatch(generic.actions.onSuccess({
                type: posts.getAll.types.POSTS_GET_ALL__SUCCESS,
                payload: data,
            }));
        })
        .catch((error) => {
            throw dispatch(generic.actions.onFail({
                type: posts.getAll.types.POSTS_GET_ALL__FAIL,
                error: error.toString(),
            }));
        });
};
