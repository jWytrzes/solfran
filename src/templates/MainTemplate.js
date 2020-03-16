import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';
import theme from '../theme/theme';
import TopBar from '../components/organisms/TopBar/TopBar';
import ContactSection from '../sections/ContactSection/ContactSection';

const MainTemplate = ({ children }) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <TopBar />
        {children}
        <ContactSection />
      </ThemeProvider>
    </div>
  );
};

export default MainTemplate;
