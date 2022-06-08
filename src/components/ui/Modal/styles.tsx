import styled from "styled-components";
import {StyledButton} from "~/components/ui";

export const StyledModal = styled.div`
`;

export const StyledModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: #000000;
    opacity: .5;
`;

export const StyledModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
`;

export const StyledModalContent = styled.div`
    z-index: 100;
    background: white;
    position: relative;
    margin: 50px auto;
    border-radius: 3px;
    max-width: 500px;
    padding: 20px;
`;

export const StyledModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
`;

export const StyledModalHead = styled.h3`
    margin: 0;
`;

export const StyledModalButton = styled(StyledButton)`
    width: 30px;
    height: 30px;
    padding: 0;
    border: none;
    color: #000;
    font-size: 22px;
`;
