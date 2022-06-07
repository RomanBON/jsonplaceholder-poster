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
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
    ` : `
        color: #007bff;
        background-color: #ffffff;
        border-color: #dee2e6;
    `)};
`;
