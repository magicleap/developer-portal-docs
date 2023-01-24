import React from 'react';
import { theme as mlTheme } from '../ml-theme';
import { createTheme, ThemeProvider } from '@material-ui/core';

const theme = createTheme(mlTheme);

// Provide the common MagicLeap theme to all content that can use
// it, including not only the footer but also documentation pages
function Root({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Root;
