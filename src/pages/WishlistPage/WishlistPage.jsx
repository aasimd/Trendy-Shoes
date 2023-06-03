/** @format */
import "./WishlistPage.css";
import React, { useContext, useEffect } from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
import { PageContext } from "../../contexts/PageContext";
import {
	getWishlistData,
	removeItemFromWishlist
} from "../../FetchFunctions/FetchFunctions.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductCard } from "../../Components/ProductCard/ProductCard";
export const WishlistPage = () => {
	const { state, dispatch } = useContext(PageContext);
	useEffect(() => {
		getWishlistData(dispatch);
	}, []);

	return (
		<div>
			<ToastContainer />
			<nav>
				<NavBar />
			</nav>
			<h1>Your Wishlist</h1>
			<div>
				{state.wishlistData.length > 0 ? (
					<section className="products-list">
						<ul className="wishlist-list">
							{state.wishlistData.map((product) => (
								<ProductCard product={product} />
							))}
						</ul>
					</section>
				) : (
					<h1>Your wishlist is empty</h1>
				)}
			</div>
		</div>
	);
};
