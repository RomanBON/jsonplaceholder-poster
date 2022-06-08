import { AnyAction, Dispatch, MiddlewareAPI } from "redux";

import { Posts } from "~/api";
import { posts } from "~/redux/modules";

export default ({ getState, dispatch }: MiddlewareAPI, next: Dispatch, action: AnyAction) => {
    next(action);

    const { payload } = action;

    const { id } = payload as PostDeleteType;

    return Posts.deleteById({ id })
        .then(({ data }) => {
            dispatch(posts.deleteById.slice.actions.success(data));

            const state = getState();
            const allPosts = posts.getAll.slice.getPostsAll(state) as PostType[];
            const filteredPosts = allPosts.filter(post => post.id !== id);
            dispatch(posts.getAll.slice.actions.success(filteredPosts));
        })
        .catch((error) => {
            dispatch(posts.deleteById.slice.actions.fail(error));
        });
};
