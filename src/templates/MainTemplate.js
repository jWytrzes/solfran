import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';
import theme from '../theme/theme';
import TopBar from '../components/organisms/TopBar/TopBar';

const MainTemplate = ({ children }) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <TopBar />
        {children}
      </ThemeProvider>
    </div>
  );
};

export default MainTemplate;
