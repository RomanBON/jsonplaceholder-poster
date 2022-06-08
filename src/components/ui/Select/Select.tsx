import React from "react";

import { StyledSelect } from "./styles";

type Allowed = string | number;

interface BaseProps<Value> {
    value: Value;
    onChange: (newValue: Value) => void;
    options: readonly Value[];
    mapOptionToLabel?: (option: Value) => Allowed;
    mapOptionToValue?: (option: Value) => Allowed;
}

type Props<Value> = Value extends Allowed
    ? BaseProps<Value>
    : Required<BaseProps<Value>>;

const isAllowed = (v: any): v is Allowed =>
    typeof v === "string" || typeof v === "number";

export function Select<Value>({
    value,
    onChange,
    options,
    mapOptionToLabel,
    mapOptionToValue
}: Props<Value>) {
    const toLabel = (option: Value): Allowed => {
        if (mapOptionToLabel) {
            return mapOptionToLabel(option);
        }

        return isAllowed(option) ? option : String(option);
    };

    const toValue = (option: Value): Allowed => {
        if (mapOptionToValue) {
            return mapOptionToValue(option);
        }

        return isAllowed(option) ? option : String(option);
    };

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(options[e.target.selectedIndex]);
    };

    return (
        <StyledSelect value={toValue(value)} onChange={handleChange}>
            {options.map((value) => (
                <option value={toValue(value)} key={toValue(value)}>
                    {toLabel(value)}
                </option>
            ))}
        </StyledSelect>
    );
}
