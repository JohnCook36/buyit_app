import React, { ReactNode } from 'react';
import { css, Global } from '@emotion/react';

export interface IThemeProviderProps {
    children: ReactNode;
}

let colorStyles = css`
  :root {
    --color-bic-secondary-default: #ffffff;
    --color-bic-secondary-hover: #f7f7f7;
    --color-bic-secondary-click: #f0f0f0;
    --color-bic-background-modal: rgba(0, 0, 0, 0.7);

    --color-bic-violet-0: #f3f0ff;
    --color-bic-violet-1: #e5dbff;
    --color-bic-violet-2: #d0bfff;
    --color-bic-violet-3: #b197fc;
    --color-bic-violet-4: #9775fa;
    --color-bic-violet-5: #845ef7;
    --color-bic-violet-6: #7950f2;
    --color-bic-violet-7: #7048e8;
    --color-bic-violet-8: #6741d9;
    --color-bic-violet-9: #5f3dc4;

    --color-bic-indigo-0: #dbe4ff;
    --color-bic-indigo-1: #bac8ff;
    --color-bic-indigo-3: #91a7ff;
    --color-bic-indigo-4: #748ffc;
    --color-bic-indigo-5: #5c7cfa;
    --color-bic-indigo-6: #4c6ef5;
    --color-bic-indigo-7: #4263eb;
    --color-bic-indigo-8: #3b5bdb;
    --color-bic-indigo-9: #364fc7;

    --color-bic-pink-0: #fff0f6;
    --color-bic-pink-1: #ffdeeb;
    --color-bic-pink-2: #fcc2d7;
    --color-bic-pink-3: #faa2c1;
    --color-bic-pink-4: #f783ac;
    --color-bic-pink-5: #f06595;
    --color-bic-pink-6: #e64980;
    --color-bic-pink-7: #d6336c;
    --color-bic-pink-8: #c2255c;
    --color-bic-pink-9: #a61e4d;

    --color-bic-grape-0: #f8f0fc;
    --color-bic-grape-1: #f3d9fa;
    --color-bic-grape-2: #eebefa;
    --color-bic-grape-3: #e599f7;
    --color-bic-grape-4: #da77f2;
    --color-bic-grape-5: #cc5de8;
    --color-bic-grape-6: #be4bdb;
    --color-bic-grape-7: #ae3ec9;
    --color-bic-grape-8: #9c36b5;
    --color-bic-grape-9: #862e9c;

    --color-bic-cyan-0: #e3fafc;
    --color-bic-cyan-1: #c5f6fa;
    --color-bic-cyan-2: #99e9f2;
    --color-bic-cyan-3: #66d9e8;
    --color-bic-cian-4: #3bc9db;
    --color-bic-cian-5: #22b8cf;
    --color-bic-cian-6: #15aabf;
    --color-bic-cian-7: #1098ad;
    --color-bic-cian-8: #0c8599;
    --color-bic-cian-9: #0b7285;

    --color-bic-teal-0: #e6fcf5;
    --color-bic-teal-1: #c3fae8;
    --color-bic-teal-2: #96f2d7;
    --color-bic-teal-3: #63e6be;
    --color-bic-teal-4: #38d9a9;
    --color-bic-teal-5: #20c997;
    --color-bic-teal-6: #12b886;
    --color-bic-teal-7: #0ca678;
    --color-bic-teal-8: #099268;
    --color-bic-teal-9: #087f5b;

    --color-bic-green-0: #ebfbee;
    --color-bic-green-1: #d3f9d8;
    --color-bic-green-2: #b2f2bb;
    --color-bic-green-3: #8ce99a;
    --color-bic-green-4: #69db7c;
    --color-bic-green-5: #51cf66;
    --color-bic-green-6: #40c057;
    --color-bic-green-7: #37b24d;
    --color-bic-green-8: #2f9e44;
    --color-bic-green-9: #2b8a3e;

    --color-bic-lime-0: #f4fce3;
    --color-bic-lime-1: #e9fac8;
    --color-bic-lime-2: #d8f5a2;
    --color-bic-lime-3: #c0eb75;
    --color-bic-lime-4: #a9e34b;
    --color-bic-lime-5: #94d82d;
    --color-bic-lime-6: #82c91e;
    --color-bic-lime-7: #74b816;
    --color-bic-lime-8: #66a80f;
    --color-bic-lime-9: #5c940d;

    --color-bic-yellow-0: #fff9db;
    --color-bic-yellow-1: #fff3bf;
    --color-bic-yellow-2: #ffec99;
    --color-bic-yellow-3: #ffe066;
    --color-bic-yellow-4: #ffd43b;
    --color-bic-yellow-5: #fcc419;
    --color-bic-yellow-6: #fab005;
    --color-bic-yellow-7: #f59f00;
    --color-bic-yellow-8: #f08c00;
    --color-bic-yellow-9: #e67700;

    --color-bic-orange-0: #fff4e6;
    --color-bic-orange-1: #ffe8cc;
    --color-bic-orange-2: #ffd8a8;
    --color-bic-orange-3: #ffc078;
    --color-bic-orange-4: #ffa94d;
    --color-bic-orange-5: #ff922b;
    --color-bic-orange-6: #fd7e14;
    --color-bic-orange-7: #f76707;
    --color-bic-orange-8: #e8590c;
    --color-bic-orange-9: #d9480f;

    --color-bic-gray-0: #f8f9fa;
    --color-bic-gray-1: #f1f3f5;
    --color-bic-gray-2: #e9ecef;
    --color-bic-gray-3: #dee2e6;
    --color-bic-gray-4: #ced4da;
    --color-bic-gray-5: #adb5bd;
    --color-bic-gray-6: #868e96;
    --color-bic-gray-7: #495057;
    --color-bic-gray-8: #343a40;
    --color-bic-gray-9: #212529;

    --color-bic-red-0: #fff5f5;
    --color-bic-red-1: #ffe3e3;
    --color-bic-red-2: #ffc9c9;
    --color-bic-red-3: #ffa8a8;
    --color-bic-red-4: #ff8787;
    --color-bic-red-5: #ff6b6b;
    --color-bic-red-6: #fa5252;
    --color-bic-red-7: #f03e3e;
    --color-bic-red-8: #e03131;
    --color-bic-red-9: #c92a2a;

    --color-bic-blue-0: #e7f5ff;
    --color-bic-blue-1: #d0ebff;
    --color-bic-blue-2: #a5d8ff;
    --color-bic-blue-3: #74c0fc;
    --color-bic-blue-4: #4dabf7;
    --color-bic-blue-5: #339af0;
    --color-bic-blue-6: #228be6;
    --color-bic-blue-7: #1c7ed6;
    --color-bic-blue-8: #1971c2;
    --color-bic-blue-9: #1864ab;
  }

  * {
    margin: 0;
  }
`;

export function ThemeProvider({ children }: IThemeProviderProps) {
    return (
        <>
            <Global styles={colorStyles} />
            {children}
        </>
    );
}