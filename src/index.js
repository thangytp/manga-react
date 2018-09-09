import React, { Componet } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';

import App from "./js/components/App";
// import FormContainer from "./js/components/container/FormContainer";

ReactDOM.render((
	<BrowserRouter>
		<App />
	</BrowserRouter>
	), document.getElementById('root'));