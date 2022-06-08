import React, { FC, useCallback } from "react";

import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import { posts } from "~/redux/modules";

import {
    StyledPost,
    StyledPostContent,
    StyledPostNumber,
    StyledPostTitle,
    StyledPostButton,
} from "./styles";

export type PostProps = PostType;

export const Post: FC<PostProps> = ({ id, title }) => {
    const dispatch = useAppDispatch();

    const handleClick = useCallback(() => {
        dispatch(posts.deleteById.slice.actions.request({ id }));
    }, [id]);

    const isPending = useAppSelector(state => posts.deleteById.slice.isPending(state));

    return (
        <StyledPost>
            <StyledPostContent>
                <StyledPostNumber>{id}</StyledPostNumber>
                <StyledPostTitle>{title}</StyledPostTitle>
            </StyledPostContent>

            <StyledPostButton
                onClick={handleClick}
                disabled={isPending}
            >
                Delete
            </StyledPostButton>
        </StyledPost>
    );
};
