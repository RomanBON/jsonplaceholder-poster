import React, { FC, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import { posts } from "~/redux/modules";
import { Pagination } from "~/components/ui";
import Post from "~/components/Post";

const DEFAULT_PAGE_NUMBER = 1;
const DEFAULT_PAGE_ITEM_LIMIT = 20;
const NAME_OF_PAGE_NUMBER_PARAM = "page";

const Main: FC = () => {
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();
    const pageNumberParam =
        searchParams.get(NAME_OF_PAGE_NUMBER_PARAM) || DEFAULT_PAGE_NUMBER.toString();
    const pageNumber = parseInt(pageNumberParam, 10) || DEFAULT_PAGE_NUMBER;

    useEffect(() => {
        dispatch(posts.get.actions.request({ number: pageNumber, limit: DEFAULT_PAGE_ITEM_LIMIT }));
    }, [pageNumber]);

    const postsByPage = useAppSelector(state => posts.get.selectors.posts(state)) as PostType[];
    const allPostsLength = useAppSelector(state => posts.getAll.selectors.allPostsLength(state));

    return (
        <>
            <div>
                <h1>Total posts: {allPostsLength}</h1>

                {postsByPage.map(({ id, ...restProps }) => (
                    <Post key={id} id={id} {...restProps} />
                ))}

                <Pagination
                    defaultStartPageNumber={DEFAULT_PAGE_NUMBER}
                    pageSize={DEFAULT_PAGE_ITEM_LIMIT}
                    total={allPostsLength}
                />
            </div>
        </>

    );
};

export default Main;
