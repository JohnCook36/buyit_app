import React, {ChangeEventHandler, ReactNode} from 'react';
import {StyledError, StyledInput, StyledTitle, StyledWrapper} from "./index.styles";

export interface IInputProps {
    id?: string
    type?: string
    name?: string
    className?: string
    onChange?: ChangeEventHandler
    onBlur?: (event: any) => void
    value?: string
    error?: string
    placeholder?: string
    title?: string | ReactNode
}

export function Input({id, type, className, onChange, value, error, placeholder, name, title, onBlur,}: IInputProps) {
    return (
        <StyledWrapper hasError={Boolean(error)}>
            {title && <StyledTitle>{title}</StyledTitle>}
            <StyledInput
                onBlur={onBlur}
                name={name}
                placeholder={placeholder}
                id={id}
                type={type}
                className={className}
                onChange={onChange}
                value={value}
            />
            {error && <StyledError>{error}</StyledError>}
        </StyledWrapper>
    )
}