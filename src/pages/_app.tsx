import themes from '@/styles/Theme';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themes.liah}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
