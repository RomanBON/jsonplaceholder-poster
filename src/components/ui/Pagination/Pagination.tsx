import React from "react";

import { Link } from "~/components/ui";

import {
    StyledPaginationUl,
    StyledPaginationLi,
} from "./styles";

export type PaginationProps = {
    defaultStartPageNumber: number;
    pageSize: number;
    total: number;
};

export const Pagination = ({ defaultStartPageNumber, total, pageSize }: PaginationProps) => {
    const totalPageCount = Math.ceil(total / pageSize);

    const range = (start: number, end: number) => {
        const length = end - start + 1;

        return Array.from({ length }, (_, idx) => idx + start);
    };

    const pageRange = range(defaultStartPageNumber, totalPageCount);

    return (
        <StyledPaginationUl>
            {pageRange.map(page => (
                <StyledPaginationLi key={page}>
                    <Link to={`/?page=${page}`}>
                        {page}
                    </Link>
                </StyledPaginationLi>
            ))}
        </StyledPaginationUl>
    );
};
