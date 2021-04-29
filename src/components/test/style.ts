import { css } from '@emotion/react';

export const testing = css`
  color: red;
`;

export const testing2 = css`
  ${testing}

  font-family: monospace;
  font-size: 100px;
`;
