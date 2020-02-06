import { createGlobalStyle } from 'styled-components';
import shape2 from '../assets/pictures/shape2.svg';
import shape3 from '../assets/pictures/shape3.svg';

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

		::before, ::after {
			position: absolute;
			/* width: 100%;
			height: 100%; */
			top: 0;
			right: 0;
			background-repeat: no-repeat;
			z-index: -1;
		}

		::before {
			content: '';
			background-image: url(${shape2});
			background-position: 220px -144px;
			background-size: 580px auto;
			width: 580px;
			height: 602px;
		}

		::after {
			content: '';
			background-image: url(${shape3});
			background-position: 202px -279px;
			background-size: 450px auto;
			width: 450px;
			height: 380px;
		}
	}

	*, *::before, *::after {
		box-sizing: border-box;
	}
`;

export default GlobalStyle;
