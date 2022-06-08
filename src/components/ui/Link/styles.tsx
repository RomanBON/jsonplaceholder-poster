import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)<{ active: number }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    border-width: 1px;
    border-style: solid;
    
    ${props => (props.active ? `
        color: #ffffff;
        background-color: #2296f3;
        border-color: #2296f3;
    ` : `
        color: #2296f3;
        background-color: #ffffff;
        border-color: #dee2e6;
    `)};
`;
