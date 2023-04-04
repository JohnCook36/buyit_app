import React, {ReactNode} from "react";
import {StyledButton} from './index.styles'


export type ButtonColorType = 'primary' | 'secondary'
export type ButtonSizeType = 'small' | 'medium'
export type ButtonType = 'button' | 'reset' | 'submit'

export interface IButtonProps {
    color?: ButtonColorType;
    size?: ButtonSizeType;
    children?: ReactNode;
    type?: ButtonType;
    className?: string;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;

}

export function Button({color, disabled, children, type, className, onClick,}: IButtonProps)
    {

    return (
        <StyledButton
            isPrimary={color === 'primary'}
            onClick={onClick}
            disabled={disabled}
            className={className}
            type={type}
        >{children}
        </StyledButton>
    )

    }