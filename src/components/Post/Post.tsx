import React, { FC } from "react";

import {
    StyledPost,
    StyledPostNumber,
    StyledPostTitle,
    StyledPostButton,
} from "./styles";

export type PostProps = {
    onDelete: ({ id }: Pick<PostType, "id">) => void;
} & PostType;

const Post: FC<PostProps> = ({ id, title, onDelete }) => {
    const handleClick = () => {
        onDelete({ id });
    };

    return (
        <StyledPost>
            <StyledPostNumber>{id}</StyledPostNumber>
            <StyledPostTitle>{title}</StyledPostTitle>
            <StyledPostButton onClick={handleClick}>Delete</StyledPostButton>
        </StyledPost>
    );
};

export default Post;
