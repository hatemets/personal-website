import React from "react";
import { Transition } from "react-transition-group";

const defaultStyles = {
	transition: `opacity 300ms`,
	opacity: 0,
	zIndex: "-100",
	position: "absolute",
	top: "40%",
	boxShadow: "0 0 1px 1px #222",
	left: "calc(50% - 200px)",
	padding: "10px",
	fontSize: "1.3rem",
	color: "#fff",
	background: "#222",
	borderRadius: "5px",
	width: "400px",
	margin: "auto"
};

const transitionStyles = {
	entering: { opacity: 1, zIndex: "100" },
	entered: { opacity: 1, zIndex: "100" },
	exiting: { opacity: 0, zIndex: "100" },
	exited: { opacity: 0, zIndex: "-100" }
};

export const Popup = ({ in: inProps, text }) => (
	<Transition in={inProps} timeout={300}>
		{state => (
			<div id="popup" style={{ ...defaultStyles, ...transitionStyles[state] }}>
				<p style={{ textAlign: "center" }}>{text}</p>
			</div>
		)}
	</Transition>
);
