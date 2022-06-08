import React, { FC, useCallback } from "react";

import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import { posts, users } from "~/redux/modules";

import {
    StyledPost,
    StyledPostContent,
    StyledPostHead,
    StyledPostUserName,
    StyledPostNumber,
    StyledPostTitle,
    StyledPostButton,
} from "./styles";

export type PostProps = PostType;

export const Post: FC<PostProps> = ({ id, title, userId }) => {
    const dispatch = useAppDispatch();

    const handleClick = useCallback(() => {
        dispatch(posts.deleteById.slice.actions.request({ id }));
    }, [id]);

    const isPending = useAppSelector(state => posts.deleteById.slice.isPending(state));
    const user = useAppSelector(state => users.get.slice.getUserById(state, userId));

    return (
        <StyledPost>
            <StyledPostContent>
                <StyledPostHead>
                    <StyledPostNumber>{id}</StyledPostNumber>
                    {user && (
                        <StyledPostUserName>{user.name}</StyledPostUserName>
                    )}
                </StyledPostHead>
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
