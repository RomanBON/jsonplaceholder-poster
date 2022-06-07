import React, { useEffect } from "react";

import {convertQueryStringToQueryObject} from "~/utils/queryString";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import { posts } from "~/redux/modules";

const DEFAULT_PAGE_NUMBER = 1;
const DEFAULT_PAGE_ITEM_LIMIT = 20;

const Todo = () => {
    const hasWindow = typeof window !== "undefined";
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!hasWindow) {
            return;
        }

        const { page } = convertQueryStringToQueryObject(location.search);
        const pageNumber = parseInt(page, 10) | DEFAULT_PAGE_NUMBER;

        dispatch(posts.get.actions.request({ number: pageNumber, limit: DEFAULT_PAGE_ITEM_LIMIT }));
    }, [hasWindow]);

    const postsByPage = useAppSelector(state => posts.get.selectors.posts(state)) as PostType[];
    const allPosts = useAppSelector(state => posts.getAll.selectors.allPosts(state)) as PostType[];

    return (
        <>
            <div>
                <h1>postsByPage</h1>
                {postsByPage.map(({ id, userId }) => (<div key={id}>{userId}</div>))}

                <h1>allPosts</h1>
                {allPosts.map(({ id, userId }) => (<div key={id}>{userId}</div>))}
                <br/>
            </div>
        </>

    );
};

export default Todo;
