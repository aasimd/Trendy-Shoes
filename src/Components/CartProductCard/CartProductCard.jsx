/** @format */
import "./CartProductCard.css";
import React, { useContext, useState } from "react";
import { PageContext } from "../../contexts/PageContext.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
	fetchAddItemToWishlist,
	getWishlistData,
	removeItemFromCart,
	removeItemFromWishlist,
	fetchSelectedProduct,
	fetchCartIncrement,
	fetchCartDecrement
} from "../../FetchFunctions/FetchFunctions";
import { useNavigate } from "react-router";
export const CartProductCard = ({ product }) => {
	const { state, dispatch } = useContext(PageContext);
	const navigate = useNavigate();
	const AddToWishlistHandler = (_id) => {
		const id = _id.slice(0, _id.length - selectedSize.length);
		const productToAdd = state.productsData.find(
			(product) => product._id === id
		);
		fetchAddItemToWishlist(productToAdd);
		getWishlistData(dispatch);
		toast.success("Added to Wishlist!", {
			position: "bottom-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light"
		});
	};

	const removeHandler = (id) => {
		removeItemFromCart(dispatch, id);
		toast.info("Removed from cart!", {
			position: "bottom-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light"
		});
	};
	const RemoveFromWishlistHandler = (_id) => {
		const id = _id.slice(0, _id.length - selectedSize.length);
		removeItemFromWishlist(dispatch, id);
		toast.info("Removed From Wishlist!", {
			position: "bottom-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light"
		});
	};
	const quantityIncrementHandler = (id) => {
		fetchCartIncrement(dispatch, id);
	};
	const quantityDecrementHandler = (id) => {
		fetchCartDecrement(dispatch, id);
	};
	const productClickHandler = (_id) => {
		const id = _id.slice(0, _id.length - selectedSize.length);
		fetchSelectedProduct(dispatch, id);
		dispatch({ type: "changeIsLoading", payload: true });
		navigate(`/products/${id}`);
	};
	const { _id, image, title, price, selectedSize, quantity, brand } = product;
	return (
		<div>
			<li key={_id}>
				<section className="cart-product-card">
					<div className="cart-product-image-container">
						<img
							src={image}
							alt={title}
							onClick={() => productClickHandler(_id)}
						/>
					</div>
					<article>
						<p>{title}</p>
						<p>
							<b>Brand: </b>
							{brand}
						</p>
						<p>
							<b>Size:</b> {selectedSize}
						</p>
						<p>
							<b>Price: </b>Rs.{price} <span>Rs.{parseInt(price * 1.2)}</span>
						</p>
						<p>20% OFF</p>
						<p>
							<b>Quantity: </b>
							<button
								onClick={() =>
									product.qty !== 1 && quantityDecrementHandler(_id)
								}
								className="quantity-change-buttons"
							>
								<i className="fas fa-minus-circle"></i>
							</button>{" "}
							<p className="product-quantity">{product.qty}</p>
							<button
								onClick={() => quantityIncrementHandler(_id)}
								className="quantity-change-buttons"
							>
								<i className="fas fa-plus-circle"></i>
							</button>
						</p>
						<button
							className="cart-product-remove-button"
							onClick={() => removeHandler(product._id, product.selectedSize)}
						>
							<i class="fa-regular fa-trash-can"></i> Remove
						</button>
						{state.wishlistData.findIndex(
							(product) =>
								product._id === _id.slice(0, _id.length - selectedSize.length)
						) < 0 ? (
							<button
								onClick={() => {
									AddToWishlistHandler(_id);
								}}
								className="cart-add-to-wishlist-button"
							>
								<i class="fa-regular fa-heart"></i> Wishlist
							</button>
						) : (
							<button
								onClick={() => RemoveFromWishlistHandler(_id)}
								className="cart-add-to-wishlist-button"
							>
								<i class="fa-solid fa-heart" style={{ color: "#ff0000" }}></i>{" "}
								Wishlist
							</button>
						)}
					</article>
				</section>
			</li>
		</div>
	);
};
