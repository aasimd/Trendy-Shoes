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
	const { state, dispatch, displayData } = useContext(PageContext);
	const { isLoading } = state;

	return (
		<div>
			{isLoading ? (
				<>Loading...</>
			) : (
				<div className="products-listing-page">
					<ToastContainer />
					<nav className="nav-container">
						<NavBar />
					</nav>
					<main>
						<aside className="filters-container">
							<Filters />
						</aside>
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
		</div>
	);
};
