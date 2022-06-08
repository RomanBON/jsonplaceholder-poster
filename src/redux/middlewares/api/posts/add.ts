import { AnyAction, Dispatch, MiddlewareAPI } from "redux";

import { Posts } from "~/api";
import { generateId } from "~/utils/generateId";
import { posts } from "~/redux/modules";

export default ({ getState, dispatch }: MiddlewareAPI, next: Dispatch, action: AnyAction) => {
    next(action);

    const { payload } = action;
    const { userId, title } = payload as PostAddType;

    return Posts.add({ userId, title })
        .then(({ data }) => {
            // id obtained from the response is always the same, so in this case we generate our own
            const updatedData = { ...data, id: generateId() };
            dispatch(posts.add.slice.actions.success(updatedData));

            const state = getState();
            const allPosts = posts.getAll.slice.getPostsAll(state) as PostType[];
            const newAllPosts = [updatedData].concat(allPosts);

            dispatch(posts.getAll.slice.actions.success(newAllPosts));
        })
        .catch((error) => {
            throw dispatch(posts.add.slice.actions.fail(error));
        });
};
