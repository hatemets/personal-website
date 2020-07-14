import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const loader = document.querySelector("#loader-container");
const hideLoader = _ => loader.classList.add("display-none");

setTimeout(_ => {
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App hideLoader={hideLoader} />
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById("root")
	);
}, 8000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
