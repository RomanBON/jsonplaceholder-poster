import { AnyAction, Dispatch, MiddlewareAPI } from "redux";

import {generic, posts} from "~/redux/modules";

export default ({ getState, dispatch }: MiddlewareAPI, next: Dispatch, action: AnyAction) => {
    next(action);

    const { paramsPerPage } = action;

    const { number, limit } = paramsPerPage as PageType;
    const state = getState();
    const allPosts = posts.getAll.selectors.allPosts(state) as PostType[];
    const postsByPage = allPosts.slice((number - 1) * limit, number * limit);

    // console.log(postsByPage, number, limit);

    if (allPosts.length !== 0) {
        dispatch(generic.actions.onSuccess({
            type: posts.get.types.POSTS_GET__SUCCESS,
            payload: postsByPage,
        }));
    } else {
        dispatch(generic.actions.onFail({
            type: posts.get.types.POSTS_GET__FAIL,
            error: "Posts list is empty",
        }));
    }
};
