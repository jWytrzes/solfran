import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';
import theme from '../theme/theme';
import TopBar from '../components/organisms/TopBar/TopBar';

const MainTemplate = ({ children }) => {
	return (
		<div>
			<GlobalStyle />
			<ThemeProvider theme={theme}> 
				<TopBar />
				{children} 
			</ThemeProvider>
		</div>
	);
};

export default MainTemplate;
