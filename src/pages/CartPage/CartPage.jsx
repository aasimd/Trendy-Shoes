/** @format */
import "./CartPage.css";
import React, { useContext } from "react";
import { PageContext } from "../../contexts/PageContext";
import { removeItemFromCart } from "../../FetchFunctions/FetchFunctions";
import { NavBar } from "../../Components/NavBar/NavBar";
import { CartProductCard } from "../../Components/CartProductCard/CartProductCard";
import { useNavigate } from "react-router";
import { ToastContainer } from "react-toastify";
import { NavLink } from "react-router-dom";
import emptyCart from "../../images/emptyCart.svg";
import { FooterCard } from "../../Components/FooterCard/FooterCard.jsx";
export const CartPage = () => {
	const { state, dispatch } = useContext(PageContext);
	const navigate = useNavigate();
	const TotalPriceOfCartProducts = state.cartData.reduce(
		(acc, curr) => acc + curr.price * curr.qty,
		0
	);
	const clearCart = () => {
		const idArray = state.cartData.map(({ _id }) => _id);
		idArray.forEach((id) => removeItemFromCart(dispatch, id));
	};
	return (
		<div>
			<nav>
				<NavBar />
			</nav>
			<div className="cart-page">
				<h1 className="cart-header">Your Cart</h1>
				{state.cartData.length > 0 ? (
					<>
						<div className="cart-products-list">
							<button className="clear-cart-btn" onClick={() => clearCart()}>
								Clear Cart
							</button>
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
											{shoe.brand} {shoe.title} ({shoe.qty})
										</p>
										<p>{shoe.price * shoe.qty}</p>
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
					<div className="empty-cart">
						<div>
							<h1>
								Your cart is empty
								<br />
								<span>
									Add Products to Cart from{" "}
									<NavLink to="/products" title="Explore products">
										Explore
									</NavLink>
								</span>
							</h1>
						</div>
						<div>
							<img src={emptyCart} alt="Cart is Empty" />
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
