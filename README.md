
## Overview

  This is a simple website made with ReactJS which main goal is to present offer of the company. It also has Blog page which will be used to share some news and there is also a form for free valuation requests for clients. 
Project has only two branches: 

 - `master` is a production version of website and it is deployed [here]([https://www.solfranenergy.pl/](https://www.solfranenergy.pl/)). This version has currently no connections to backend so there are no blog or valuation form components.
 - `dev` is a WIP branch. It is deployed for test [here]([https://www.solfranenergy.pl/](https://www.solfranenergy.pl/)). There is access to [admin panel]([https://solfran-d9446.firebaseapp.com/admin](https://solfran-d9446.firebaseapp.com/admin)) with credentials:
	 - login: test@solfran.pl
	 - password: M0pjKc4#

Parts of website that use backend are connected with firestore. Valuation form is also using firebase function to
 validate reCaptcha. 

## Available Scripts

  
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In the project directory, you can run:

  

### `npm start`

  

Runs the app in the development mode.<br />

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

  

The page will reload if you make edits.<br />

You will also see any lint errors in the console.

  

### `npm test`

  

Launches the test runner in the interactive watch mode.<br />

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

  

### `npm run build`

  

Builds the app for production to the `build` folder.<br />

It correctly bundles React in production mode and optimizes the build for the best performance.

  

The build is minified and the filenames include the hashes.<br />

Your app is ready to be deployed!

  

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.