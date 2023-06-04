/** @format */
import "./NavBar2.css";
import React from "react";
import { useContext } from "react";
import { PageContext } from "../../contexts/PageContext";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
export const NavBar2 = () => {
	const { state, dispatch } = useContext(PageContext);
	const genderClickHandler = (event) => {
		dispatch({ type: "setGenderFilters", payload: [event.target.value] });
		navigate("/products");
	};
	return (
		<div>
			<button value="Men" onClick={(event) => genderClickHandler(event)}>
				Men
			</button>
			<button value="Women" onClick={(event) => genderClickHandler(event)}>
				Women
			</button>
			<input
				type="text"
				placeholder=" Search shoes"
				value={state.userInput.trim()}
				onChange={(event) => {
					dispatch({ type: "setUserInput", payload: event.target.value });
					dispatch({ type: "setShowSearchResults", payload: true });
				}}
			/>
		</div>
	);
};
