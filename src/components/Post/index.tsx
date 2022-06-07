import React, { FC, useCallback } from "react";

import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import { posts } from "~/redux/modules";

import {
    StyledPost,
    StyledPostNumber,
    StyledPostTitle,
    StyledPostButton,
} from "./styles";

export type PostProps = PostType;

const Post: FC<PostProps> = ({ id, title }) => {
    const dispatch = useAppDispatch();

    const handleClick = useCallback(() => {
        dispatch(posts.deleteById.actions.deleteById({ id }));
    }, [id]);

    const isPending = useAppSelector(state => posts.deleteById.selectors.isPending(state));

    return (
        <StyledPost>
            <StyledPostNumber>{id}</StyledPostNumber>
            <StyledPostTitle>{title}</StyledPostTitle>

            <StyledPostButton disabled={isPending} onClick={handleClick}>
                Delete
            </StyledPostButton>
        </StyledPost>
    );
};

export default Post;
