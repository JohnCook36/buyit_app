import {ReactNode, useMemo} from "react";
import styled from '@emotion/styled';


export interface ITitleProps {
    size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children?: ReactNode;
    className?: string;
}

export function Title({ size = 'h1', children, className}: ITitleProps) {

    let Element = useMemo(
        () => styled[size]`
          color: var(--color-bic-main-grey-9);
          font-family: var(--font-family);
          font-weight: 700;
          line-height: 1.3;
        `,
        [size],
    );

    return <Element className={className}>{children}</Element>
}