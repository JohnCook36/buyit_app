import React, {PropsWithChildren} from 'react';
import { css, Global } from '@emotion/react';

import OpenSansRegular from './OpenSans/OpenSans-Regular.ttf';
import OpenSansSemiBold from './OpenSans/OpenSans-SemiBold.ttf';
import OpenSansBold from './OpenSans/OpenSans-Bold.ttf';

export let fontStyles = css`
  @font-face {
    font-family: 'Open Sans';
    font-weight: 400;
    font-style: normal;
    src: url(${OpenSansRegular}) format('truetype');
  }

  @font-face {
    font-family: 'Open Sans';
    font-weight: 600;
    font-style: normal;
    src: url(${OpenSansSemiBold}) format('truetype');
  }

  @font-face {
    font-family: 'Open Sans';
    font-weight: 700;
    font-style: normal;
    src: url(${OpenSansBold}) format('truetype');
  }

  :root {
    --font-family: 'Open Sans', sans-serif;
  }
`;

export function FontProvider({ children }: PropsWithChildren) {
    return (
        <>
            <Global styles={fontStyles} />
            {children}
        </>
    );
}