import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

	html, body {
		margin: 0;
		padding: 0;
		overflow-x: hidden;
	}

	html {
		font-size: 62.5%;
		/* scroll-behavior: smooth; */
	}

	body {
		position: relative;
		font-family: 'Montserrat', sans-serif;
		font-size: 14px;
		font-size: 1.4rem; 
		line-height: 1.5;
		color: #18516C;
		overflow-x: hidden;
		min-height: 100vh;

		@media(min-width: 992px) {
			font-size: 16px;
			font-size: 1.6rem; 
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

	.ql-editor {
		min-height: 350px;
	}

	#postShortContent .ql-editor {
		min-height: 150px;
	}

	#root .ql-container {
		font-family: inherit;
		font-size: inherit;
	}

	#root > div {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	blockquote {
		background-color: ${({ theme }) => theme.greyBcg};
		padding: 15px;
		border-radius: 5px;
	}

	.customHeroImageTransform {
		display: flex;
		margin-top: auto;

		@media (min-width: 768px) {
			max-width: 75%;
			margin: auto 12.5% 0;
		}

		@media (min-width: 1150px) {
			position: absolute;
			width: 60%;
			right: -10%;
			margin: 0;
		}

		@media (min-width: 1600px) {
			max-width: 850px;
		}
	}

	.rr-zIndex {
		position: relative;
		z-index: 99;
	}
`;

export default GlobalStyle;
