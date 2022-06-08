import React, { FC, ButtonHTMLAttributes } from "react";

import { StyledButton } from "./styles";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = (props) => {

    return (
        <StyledButton {...props} />
    );
};
