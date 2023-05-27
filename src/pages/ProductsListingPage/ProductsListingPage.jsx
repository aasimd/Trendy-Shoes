/** @format */
import "./ProductListingPage.css";
import React, { useState } from "react";
import { useContext } from "react";
import { PageContext } from "../../contexts/PageContext";
import { NavBar } from "../../Components/NavBar/NavBar";
import { Filters } from "../../Components/Filters/Filters.jsx";
import { ProductCard } from "../../Components/ProductCard/ProductCard";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ProductsListingPage = () => {
	const notify = () => toast("Wow so easy!");
	const { state, dispatch, displayData } = useContext(PageContext);
	const { isLoading } = state;
	
	return (
		<div>
			{isLoading ? (
				<>Loading...</>
			) : (
				<div className="products-listing-page">
					<main>
						<nav className="nav-container">
							<NavBar />
						</nav>
						<aside className="filters-container">
							<Filters />
						</aside>
						ProductsListingPage <br />
						total products:
						{displayData.length} <br />
						<section className="products-list">
							<ul>
								{displayData.map((product) => (
									<ProductCard product={product} />
								))}
							</ul>
						</section>
					</main>
				</div>
			)}
			<div>
				<button onClick={notify}>Notify!</button>
				<ToastContainer />
			</div>
		</div>
	);
};
