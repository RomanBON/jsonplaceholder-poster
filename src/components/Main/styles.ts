import styled from "styled-components";

import { StyledButton } from "~/components/ui";

export const StyledMain = styled.div`
    background-color: #f3f3f2;
`;

export const StyledMainHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledMainHeading = styled.h1`
    padding: 0;
`;

export const StyledMainButtonAddPost = styled(StyledButton)`
    background: #2296f3;
`;
