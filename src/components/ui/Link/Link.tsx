import React, { FC } from "react";
import { NavLinkProps, useLocation, useResolvedPath } from "react-router-dom";

import { StyledLink } from "./styles";

export type LinkProps = NavLinkProps

export const Link: FC<LinkProps> = ({ to, ...restProps }) => {
    const { pathname: currentPathname, search: currentSearch } = useLocation();
    const currentFullPath = currentPathname + currentSearch;

    const resolved = useResolvedPath(to);
    const { pathname: resolvedPathname, search: resolvedSearch } = resolved;
    const resolvedFullPath = resolvedPathname + resolvedSearch;

    return (
        <StyledLink
            to={to}
            active={+(currentFullPath === resolvedFullPath)}
            {...restProps}
        />
    );
};
