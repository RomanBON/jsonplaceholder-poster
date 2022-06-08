import { AnyAction, Dispatch, MiddlewareAPI } from "redux";

import { Posts } from "~/api";
import { posts } from "~/redux/modules";

export default ({ getState, dispatch }: MiddlewareAPI, next: Dispatch, action: AnyAction) => {
    next(action);

    const { payload } = action;
    const { userId, title } = payload as PostAddType;

    return Posts.add({ userId, title })
        .then(({ data }) => {
            dispatch(posts.add.slice.actions.success(data));

            const state = getState();
            const allPosts = posts.getAll.slice.getPostsAll(state) as PostType[];
            const newAllPosts = [data].concat(allPosts);

            dispatch(posts.getAll.slice.actions.success(newAllPosts));
        })
        .catch((error) => {
            dispatch(posts.add.slice.actions.fail(error));
        });
};
