export const pageAnimation = {
	variants: {
		initial: {
			scale: 0,
		},
		in: {
			scale: 1,
		},
		out: {
			scale: 0,
		}
	},
	transition: {
		duration: 0.15,
		style: "spring",
		stiffness: 100
	}
}

export const popupAnimation = {
	variants: {
		initial: {
			y: "-100vh",
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		}
	},
	transition: {
		type: "spring",
		stiffness: 55,
	}
}