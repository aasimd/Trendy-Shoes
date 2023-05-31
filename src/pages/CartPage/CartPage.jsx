/** @format */
import "./CartPage.css";
import React, { useContext } from "react";
import { PageContext } from "../../contexts/PageContext";
import { removeItemFromCart } from "../../FetchFunctions/FetchFunctions";
import { NavBar } from "../../Components/NavBar/NavBar";
import { CartProductCard } from "../../Components/CartProductCard/CartProductCard";
import { useNavigate } from "react-router";
import { ToastContainer } from "react-toastify";

export const CartPage = () => {
	const { state, dispatch } = useContext(PageContext);
	const navigate = useNavigate();
	const TotalPriceOfCartProducts = state.cartData.reduce(
		(acc, curr) => acc + curr.price * curr.quantity,
		0
	);
	return (
		<div className="cart-page">
			<nav>
				<NavBar />
			</nav>
			{state.cartData.length > 0 ? (
				<>
					<h1 className="cart-header">Your Cart</h1>
					<div className="cart-products-list">
						<ul>
							{state.cartData.map((product) => (
								<CartProductCard product={product} />
							))}
						</ul>
					</div>
					<div className="cart-price-details-card">
						<ToastContainer />
						<h3 className="cart-price-details-header">Cart price details</h3>
						<ul className="cart-price-details-products-list-container">
							{state.cartData.map((shoe) => (
								<li>
									<p>
										{shoe.brand} {shoe.title} ({shoe.quantity})
									</p>
									<p>{shoe.price * shoe.quantity}</p>
								</li>
							))}
						</ul>
						<div className="cart-price-details-total-price-container">
							<>
								<b>Total Price:</b>
								<p>{TotalPriceOfCartProducts}</p>
							</>
							<button
								onClick={() => navigate("/checkout")}
								className="proceed-to-checkout-btn"
							>
								Proceed to Checkout
							</button>
						</div>
					</div>
				</>
			) : (
				<h1>Your cart is empty</h1>
			)}
		</div>
	);
};
