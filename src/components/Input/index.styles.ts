import styled from '@emotion/styled';

export let StyledInput = styled.input`
  font-family: var(--font-family);
  font-weight: 600;
  line-height: 1.25;
  padding: 12px;
  border-radius: 8px;
  margin-top: 6px;
  background: var(--color-bic-secondary-default);
  width: 100%;
  box-sizing: border-box;

  :hover {
    opacity: 0.8;
  }
`;

export let StyledTitle = styled.div`
  font-family: var(--font-family);
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export let StyledError = styled(StyledTitle)`
  font-weight: normal;
  margin-top: 6px;
`;

export let StyledWrapper = styled.div<{ hasError?: boolean }>`
  input {
    border: 1px solid
      ${({ hasError }) =>
    hasError ? 'var(--color-bic-red-6)' : 'var(--color-bic-gray-3)'};
    color: ${({ hasError }) =>
    hasError ? 'var(--color-bic-red-6)' : 'var(--color-bic-gray-9)'};
  }

  div {
    color: ${({ hasError }) =>
    hasError ? 'var(--color-bic-red-6)' : 'var(--color-bic-gray-6)'};
  }
`;