/** @format */
import "./WishlistPage.css";
import React, { useContext, useEffect } from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
import { PageContext } from "../../contexts/PageContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductCard } from "../../Components/ProductCard/ProductCard";
import { NavLink } from "react-router-dom";
import logo from "../../images/emptyWishlis.svg";
import { FooterCard } from "../../Components/FooterCard/FooterCard.jsx";
import { ProgressBar } from "react-loader-spinner";
import { ServicesCard } from "../../Components/ServicesCard/ServicesCard";
import { removeItemFromWishlist } from "../../FetchFunctions/FetchFunctions";
export const WishlistPage = () => {
	const { state, dispatch } = useContext(PageContext);
	const clearWishlist = () => {
		dispatch({ type: "changeIsLoading", payload: true });
		const idArray = state.wishlistData.map(({ _id }) => _id);
		idArray.forEach((id) => removeItemFromWishlist(dispatch, id));
		setTimeout(() => {
			dispatch({ type: "changeIsLoading", payload: false });
		}, 1500);
	};
	useEffect(() => {
		dispatch({ type: "changeIsLoading", payload: true });
		setTimeout(() => {
			dispatch({ type: "changeIsLoading", payload: false });
		}, 700);
	}, []);
	return (
		<div>
			<div
				className={state.isLoading ? "loader-spinner" : "loader-spinner-hidden"}
			>
				<ProgressBar
					height="100px"
					width="400px"
					ariaLabel="progress-bar-loading"
					wrapperStyle={{}}
					wrapperClass="progress-bar-wrapper"
					borderColor="#F4442E"
					barColor="#51E5FF"
				/>
			</div>
			<ToastContainer />
			<nav>
				<NavBar />
			</nav>

			<div className="wishlist-products-list">
				{state.wishlistData.length > 0 ? (
					<section className="products-list">
						<h1 className="your-wishlist-h1">Your Wishlist</h1>
						<button
							className="clear-wishlist-btn"
							onClick={() => clearWishlist()}
						>
							Empty Wishlist
						</button>
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
			<div>
				<ServicesCard />
			</div>
			<footer>
				<FooterCard />
			</footer>
		</div>
	);
};
