import styled from "styled-components";

import { StyledButton } from "~/components/ui";

export const StyledPost = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    padding: 10px;
    border: #000000;
    
    background-color: #ffffff;
    box-shadow: 0 4px 12px 0 #0d234308;
`;

export const StyledPostContent = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
`;

export const StyledPostHead = styled.div`
    display: flex;
    margin-bottom: 10px;
    width: 100%;
    font-size: 18px;
`;

export const StyledPostUserName = styled.div`
`;

export const StyledPostNumber = styled.div`
    flex: 0 0 20px;
    margin-right: 8px;
`;

export const StyledPostTitle = styled.p`
    margin: 0;
    font-size: 14px;
`;

export const StyledPostButton = styled(StyledButton)`
    background-color: #ee4d4e;
    
    &:disabled {
        opacity: 0.8;
    }
`;
