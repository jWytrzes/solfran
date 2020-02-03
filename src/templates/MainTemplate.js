import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';
import theme from '../theme/theme';

const MainTemplate = ({ children }) => {
	return (
		<div>
			<GlobalStyle />
			<ThemeProvider theme={theme}> {children} </ThemeProvider>
		</div>
	);
};

export default MainTemplate;
