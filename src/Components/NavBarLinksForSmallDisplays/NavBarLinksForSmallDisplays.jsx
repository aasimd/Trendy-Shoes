/** @format */
import "./NavBarLinksForSmallDisplays.css";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { PageContext } from "../../contexts/PageContext";
import { getActiveStyle } from "../NavBar/NavBar";
export const NavBarLinksForSmallDisplays = () => {
	const { state, dispatch } = useContext(PageContext);
	const totalProductsInWishlist = state.wishlistData.length;
	const totalProductsInCart = state.cartData.reduce(
		(acc, product) => acc + product.qty,
		0
	);
	return (
		<div>
			<div className="nav-bar-links-for-small-displays">
				<div
					className={
						state.showNavBarLinks
							? "nav-bar-links-visible-for-small-displays"
							: "nav-bar-links-hidden-for-small-displays"
					}
				>
					<div>
						<NavLink
							className={getActiveStyle}
							to="/products"
							title="Explore products"
							onClick={() => dispatch({ type: "clearFilters" })}
						>
							Explore Products
						</NavLink>
					</div>
					<div>
						<NavLink
							className={getActiveStyle}
							to="/profile"
							title="User Profile"
						>
							<i class="fa-regular fa-user"></i> User Profile
						</NavLink>
					</div>
					<div id="wishlist-logo">
						<NavLink className={getActiveStyle} to="/wishlist" title="Wishlist">
							<i class="fa-regular fa-heart"></i> Wishlist{" "}
							{state.isLoggedIn ? totalProductsInWishlist : ""}
						</NavLink>
					</div>
					<div id="cart-logo">
						<NavLink
							className={getActiveStyle}
							to="/cart"
							title="Shopping Cart"
						>
							<i class="fa-solid fa-cart-shopping"></i> Shopping Cart{" "}
							{state.isLoggedIn ? totalProductsInCart : ""}
						</NavLink>
					</div>
					<div className="nav-menu-button">
						<button onClick={() => dispatch({ type: "setShowNavBarLinks" })}>
							<i class="fa-solid fa-close"></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
