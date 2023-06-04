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
import { NavLink } from "react-router-dom";
import logo from "../../images/emptyWishlis.svg";
import { FooterCard } from "../../Components/FooterCard/FooterCard.jsx";
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
					<div className="empty-wishlist">
						<div>
							<h1>
								Your wishlist is empty <br />
								<span>
									Add Products to wishlist from{" "}
									<NavLink to="/products" title="Explore products">
										Explore
									</NavLink>
								</span>
							</h1>
						</div>
						<div>
							<img src={logo} alt="wishlist is empty" />
						</div>
					</div>
				)}
			</div>
			<footer>
				<FooterCard />
			</footer>
		</div>
	);
};
