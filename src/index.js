import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux' // providing gets store, store calls the reducer and then gives the store to the app

import store from './store'
import "./index.css";

import App from "./App";

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>
	, document.getElementById( 'root' )
);
