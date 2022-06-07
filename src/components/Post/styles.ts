import styled from "styled-components";

import { StyledButton } from "~/components/ui";

export const StyledPost = styled.div`
    display: flex;
    width: 100%;
    background-color: #c4c4c4;
    border: #000000;
`;

export const StyledPostNumber = styled.div`
    background-color: #f2f2f2;
`;

export const StyledPostTitle = styled.div`
    background-color: #b5b5b5;
`;

export const StyledPostButton = styled(StyledButton)`
    width: 100px;
`;
