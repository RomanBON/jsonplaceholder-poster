import { AnyAction, Dispatch, MiddlewareAPI } from "redux";

import { posts } from "~/redux/modules";

export default ({ getState, dispatch }: MiddlewareAPI, next: Dispatch, action: AnyAction) => {
    next(action);

    const { paramsPerPage } = action;

    const { number, limit } = paramsPerPage as PageType;
    const state = getState();
    const allPosts = posts.getAll.slice.getPostsAll(state) as PostType[];
    const postsByPage = allPosts.slice((number - 1) * limit, number * limit);

    if (allPosts.length !== 0) {
        dispatch(posts.get.slice.actions.success(postsByPage));
    } else {
        throw dispatch(posts.get.slice.actions.fail("Posts list is empty"));
    }
};
