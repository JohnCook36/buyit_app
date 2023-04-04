import styled from "@emotion/styled";
import { css } from '@emotion/react';

export let SecondaryStyles = css`
  color: var(--color-bic-main-gray-8);
  background: var(--color-bic-secondary-default);
  border: 1px solid var(--color-bic-gray-3);

  :hover {
    background: var(--color-bic-secondary-hover);
    border: 1px solid var(--color-bic-gray-4);
  }
  :active {
    background: var(--color-bic-secondary-click);
    border: 1px solid var(--color-bic-gray-5);
  }
`;

export let PrimaryStyles = css`
  color: var(--color-bic-secondary-default);
  background: var(--color-bic-green-6);
  border: none;

  :hover {
    background: var(--color-bic-green-7);
  }
  :active {
    background: var(--color-bic-green-8);
  }
`;

export let StyledButton = styled.button<{ isPrimary?: boolean }>`
  padding: 12px 0;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;
  border-radius: 8px;
  cursor: pointer;
  ${({isPrimary}) => (isPrimary ? PrimaryStyles : SecondaryStyles)}
`;