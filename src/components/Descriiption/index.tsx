import {ReactNode} from "react";
import {Element} from "./index.styled";


export interface IDescriptionProps {
    children?: ReactNode,
    className?: string,
}

export function Description({className, children}: IDescriptionProps) {
    return <Element className={className}>{children}</Element>
}