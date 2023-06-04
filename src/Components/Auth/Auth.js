/** @format */

import React, { useContext } from "react";
import { PageContext } from "../../contexts/PageContext";
import { Navigate, useLocation } from "react-router";
export const Auth = ({ children }) => {
	const { state } = useContext(PageContext);
	const location = useLocation();
	return (
		<div>
			{state.isLoggedIn ? (
				children
			) : (
				<Navigate to="/login" state={{ from: location }} />
			)}
		</div>
	);
};
