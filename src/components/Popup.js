import React from "react";
import { Transition } from "react-transition-group";

const defaultStyles = {
	transition: `opacity 300ms`,
	opacity: 0,
	zIndex: "-100",
	position: "absolute",
	top: "40%",
	left: "calc(50% - 200px)",
	padding: "20px",
	fontSize: "1.2rem",
	color: "#fff",
	background: "#222",
	borderRadius: "5px",
	width: "400px",
	margin: "auto",
	transform: "scale(1.2)"
};

const transitionStyles = {
	entering: { opacity: 1, zIndex: "100" },
	entered: { opacity: 1, zIndex: "100" },
	exiting: { opacity: 0, zIndex: "100" },
	exited: { opacity: 0, zIndex: "-100" }
};
