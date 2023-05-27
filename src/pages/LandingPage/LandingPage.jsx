/** @format */

import React from "react";
import { useNavigate } from "react-router";
import { useContext } from "react";

import { NavBar } from "../../Components/NavBar/NavBar";
import { PageContext } from "../../contexts/PageContext";
import { fetchSelectedCategory } from "../../FetchFunctions/FetchFunctions";
import "./LandingPage.css";
export const LandingPage = () => {
	const { state, dispatch } = useContext(PageContext);
	const navigate = useNavigate();
	const categoryClickHandler = (id) => {
		navigate("/products");
		fetchSelectedCategory(id, dispatch);
	};
	const viewAllClickHandler = () => {
		dispatch({ type: "setFilteredByCategory", payload: false });
		navigate("/products");
	};
	return (
		<div className="landing-page">
			<nav>
				<NavBar />
			</nav>
			<div className="view-all-banner">
				<img
					onClick={viewAllClickHandler}
					src="https://hips.hearstapps.com/hmg-prod/images/cushioned-shoes-15408-1632754154.jpg"
					alt="view-all-banner"
				/>
				<h1>View All Products</h1>
			</div>
			<div className="categories">
				<h1>Categories</h1>
				<ul>
					{state.categories.map((category) => {
						const { image, categoryName, _id, description } = category;
						return (
							<li key={_id} onClick={() => categoryClickHandler(_id)}>
								<img src={image} />
								<h2>{categoryName}</h2>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};
