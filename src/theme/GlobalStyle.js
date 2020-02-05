import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,900&display=swap&subset=latin-ext');

	html, body {
		margin: 0;
		padding: 0;
	}

	html {
		font-size: 62.5%;
	}

	body {
		font-family: 'Montserrat', sans-serif;
		font-size: 16px;
		font-size: 1.6rem; 
		line-height: 1.5; 
		background-color: #FBFBFB;
	}

	*, *::before, *::after {
		box-sizing: border-box;
	}
`;

export default GlobalStyle;
