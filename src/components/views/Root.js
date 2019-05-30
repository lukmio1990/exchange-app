import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import MainTemplate from 'templates/MainTemplate';

const Root = () => {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <MainTemplate />
        </>
      </ThemeProvider>
    </div>
  );
};

export default Root;
