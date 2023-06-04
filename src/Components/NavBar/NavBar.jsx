/** @format */

import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import "./NavBar.css";
import { useContext } from "react";
import { PageContext } from "../../contexts/PageContext";

const getActiveStyle = ({ isActive }) =>
	isActive ? "active-nav-links" : "inactive-nav-links";
export const NavBar = () => {
	const navigate = useNavigate();
	const { state, dispatch } = useContext(PageContext);
	const totalProductsInWishlist = state.wishlistData.length;
	const totalProductsInCart = state.cartData.reduce(
		(acc, product) => acc + product.qty,
		0
	);
	return (
		<div className="nav-bar">
			<div className="navbar-logo">
				<img
					onClick={() => {
						dispatch({ type: "setGenderFilters", payload: [] });
						navigate("/");
					}}
					src={
						"https://trendy-shoes.s3.amazonaws.com/site/assets/images/logo.png"
					}
					alt="loadinggif"
				/>
			</div>
			<div className="search-bar">
				<i className="fa-solid fa-magnifying-glass search-icon"></i>
				<input
					type="text"
					placeholder=" Search shoes"
					value={state.userInput.trim()}
					onChange={(event) => {
						dispatch({ type: "setUserInput", payload: event.target.value });
						dispatch({ type: "setShowSearchResults", payload: true });
					}}
					onClick={() => navigate("/products")}
				/>
				<button onClick={() => dispatch({ type: "setUserInput", payload: "" })}>
					<i class="fa-solid fa-xmark"></i>
				</button>
			</div>
			<div className="nav-bar-links">
				<div>
					<NavLink
						className={getActiveStyle}
						to="/products"
						title="Explore products"
						onClick={() => dispatch({ type: "clearFilters" })}
					>
						Explore
					</NavLink>
				</div>
				<div>
					<NavLink
						className={getActiveStyle}
						to="/profile"
						title="User Profile"
					>
						<i class="fa-regular fa-user"></i>
					</NavLink>
				</div>
				<div id="wishlist-logo">
					<NavLink className={getActiveStyle} to="/wishlist" title="Wishlist">
						<i class="fa-regular fa-heart"></i>
					</NavLink>
					<p>{totalProductsInWishlist}</p>
				</div>
				<div id="cart-logo">
					<NavLink className={getActiveStyle} to="/cart" title="Shopping Cart">
						<i class="fa-solid fa-cart-shopping"></i>
					</NavLink>
					<p>{totalProductsInCart}</p>
				</div>
			</div>
		</div>
	);
};
