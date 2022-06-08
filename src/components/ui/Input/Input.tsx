import React, { FC, InputHTMLAttributes } from "react";

import { StyledInput } from "./styles";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<InputProps> = (props) => {

    return (
        <StyledInput {...props} />
    );
};
