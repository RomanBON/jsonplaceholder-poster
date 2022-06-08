import styled from "styled-components";

import { StyledButton } from "~/components/ui";

export const StyledMain = styled.div`
    margin: 0 auto;
    padding: 16px;
    max-width: 1024px;
    background-color: #fbfbfb;
`;

export const StyledMainHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
`;

export const StyledMainHeading = styled.h1`
    padding: 0;
`;

export const StyledMainButtonAddPost = styled(StyledButton)`
    background: #2296f3;
`;
