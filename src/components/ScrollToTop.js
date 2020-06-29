import { useEffect } from "react";
import { withRouter } from "react-router-dom";

const ScrollToTop = ({ history }) => {
	useEffect(() => {
		const reset = history.listen(_ => window.scrollTo(0, 0));
		return _ => reset();
	}, []);

	return null;
};

export default withRouter(ScrollToTop);
