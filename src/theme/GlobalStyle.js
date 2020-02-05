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
		font-size: 14px;
		font-size: 1.4rem; 
		line-height: 1.5;
		color: #18516C;

		@media(min-width: 992px) {
			font-size: 1.6rem; 
			font-size: 16px;
			padding-top: 0;
		}
	}

	*, *::before, *::after {
		box-sizing: border-box;
	}
`;

export default GlobalStyle;
