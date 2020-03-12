import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

	html, body {
		margin: 0;
		padding: 0;
		overflow-x: hidden;
	}

	html {
		font-size: 62.5%;
		scroll-behavior: smooth;
	}

	body {
		position: relative;
		font-family: 'Montserrat', sans-serif;
		font-size: 14px;
		font-size: 1.4rem; 
		line-height: 1.5;
		color: #18516C;
		overflow-x: hidden;

		@media(min-width: 992px) {
			font-size: 1.6rem; 
			font-size: 16px;
			padding-top: 0;
		}
	}

	*, *::before, *::after {
		box-sizing: border-box;
	}

	* {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	button, input, select, textarea {
		font-family: inherit;
		color: inherit;
	}
`;

export default GlobalStyle;
