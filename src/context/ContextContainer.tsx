import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

export const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

export const ContextContainer = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <CacheProvider value={muiCache}>
      {children}
    </CacheProvider>
  );
};
