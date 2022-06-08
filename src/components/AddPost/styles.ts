import styled from "styled-components";

import { StyledButton } from "~/components/ui";

export const StyledAddPostForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const StyledAddPostButton = styled(StyledButton)`
    background: #2296f3;
    
    &:disabled {
        opacity: 0.8;
    }
`;
