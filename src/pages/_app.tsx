/** @format */

import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { createTheme } from '@mui/material/styles';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    letter-spacing: -1px;
    font-size: 15px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  .txt-c {
    text-align: center;
  }
  .txt-r {
    text-align: right;
  }
  .txt-l {
    text-align: left;
  }
  p {
    margin: 0;
  }
`;


const theme = createTheme({
  typography: {
    body2: {
      color: 'white'
    },
    h5: {
      fontWeight: "bold"
    }
  },
  breakpoints: {
    values: {
      xs: 300, // phone
      sm: 600, // tablets
      md: 900, // small laptop
      lg: 1200, // desktop
      xl: 1536 // large screens
    }
  }
});

export default function App(props: AppProps) {
	const { Component, pageProps } = props;
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<CssBaseline />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
