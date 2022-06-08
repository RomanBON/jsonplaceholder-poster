import React, { FC, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import { posts } from "~/redux/modules";
import { Pagination, useModal } from "~/components/ui";
import { Post, AddPost } from "~/components";

import {
    StyledMain,
    StyledMainHead,
    StyledMainHeading,
    StyledMainButtonAddPost,
} from "./styles";

const DEFAULT_PAGE_NUMBER = 1;
const DEFAULT_PAGE_ITEM_LIMIT = 20;
const NAME_OF_PAGE_NUMBER_PARAM = "page";

export const Main: FC = () => {
    const dispatch = useAppDispatch();
    const { isShowing, toggle } = useModal();
    const [searchParams] = useSearchParams();
    const pageNumberParam =
        searchParams.get(NAME_OF_PAGE_NUMBER_PARAM) || DEFAULT_PAGE_NUMBER.toString();
    const pageNumber = parseInt(pageNumberParam, 10) || DEFAULT_PAGE_NUMBER;

    useEffect(() => {
        dispatch(posts.get.slice.actions.request({
            number: pageNumber,
            limit: DEFAULT_PAGE_ITEM_LIMIT,
        }));
    }, [pageNumber]);

    const postsByPage = useAppSelector(state => posts.get.slice.getPosts(state)) as PostType[];
    const allPostsLength = useAppSelector(state => posts.getAll.slice.getPostsAll(state)).length;

    return (
        <StyledMain>
            <StyledMainHead>
                <StyledMainHeading>
                    Total posts: {allPostsLength}
                </StyledMainHeading>

                <StyledMainButtonAddPost onClick={toggle}>
                    Add new post
                </StyledMainButtonAddPost>

                <AddPost
                    isShowing={isShowing}
                    onHide={toggle}
                />
            </StyledMainHead>

            {postsByPage.map(({ id, ...restProps }) => (
                <Post key={id} id={id} {...restProps} />
            ))}

            <Pagination
                defaultStartPageNumber={DEFAULT_PAGE_NUMBER}
                pageSize={DEFAULT_PAGE_ITEM_LIMIT}
                total={allPostsLength}
            />
        </StyledMain>
    );
};
