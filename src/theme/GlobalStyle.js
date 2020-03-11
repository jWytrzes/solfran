import { createGlobalStyle } from 'styled-components';
import shape2 from '../assets/pictures/shape2.svg';
import shape3 from '../assets/pictures/shape3.svg';

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

		@media(min-width: 992px) {
			font-size: 1.6rem; 
			font-size: 16px;
			padding-top: 0;
		}

		@media(min-width: 1150px) {
			::before {
				width: 1000px;
				height: 1038px;
				background-size: cover;
				background-position: unset;
				top: -280px;
				right: -300px;
			}

			::after {
				background-position: unset;
				background-size: cover;
				width: 360px;
				height: 312px;
				top: 0;
				right: 0;
				transform: translate(25%, -40%);
			}
		}

		@media(min-width: 1440px) {
			::before {
				width: 1192px;
				height: 1210px;
				top: 0;
				right: 0;
				transform: translate(14.3%, -20%);
				z-index: 0;
			}

			::after {
				z-index: 0;
				width: 600px;
				height: 505px;
			}
		}

		@media(min-width: 1600px) {
			::before {
				width: 1400px;
				height: 1450px;
				top: 0;
				right: 0;
				transform: translate(12.5%, -24.5%);
				z-index: 0;
			}

			::after {
				z-index: 0;
				width: 600px;
				height: 505px;
			}
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
