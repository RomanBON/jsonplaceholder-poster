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
        dispatch(posts.slice.deleteById({ id }));
    }, [id]);

    const isPending = useAppSelector(posts.slice.isPendingDeletePost());
    const user = useAppSelector(users.slice.getUserById(userId));

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
