/** @format */
import "./ProductCard.css";
import React, { useState, useContext } from "react";
import { PageContext } from "../../contexts/PageContext";
import {
	fetchAddItemToCart,
	fetchAddItemToWishlist,
	fetchSelectedProduct,
	getWishlistData,
	removeItemFromWishlist
} from "../../FetchFunctions/FetchFunctions";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ProductCard = ({ product }) => {
	const { dispatch, state, displayData } = useContext(PageContext);
	const [showSize, setShowSize] = useState(false);
	const navigate = useNavigate();
	const productClickHandler = (id) => {
		fetchSelectedProduct(dispatch, id);
		dispatch({ type: "changeIsLoading", payload: true });
		navigate(`/products/${id}`);
	};
	const AddToWishlistHandler = (id) => {
		const productToAdd = displayData.find((product) => product._id === id);
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
	const RemoveFromWishlistHandler = (id) => {
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
	const AddToCartHandler = (id, event) => {
		const productToAdd = displayData.find((product) => product._id === id);
		const productWithSelectedSize = {
			...productToAdd,
			selectedSize: event.target.value,
			_id: productToAdd._id + event.target.value
		};
		fetchAddItemToCart(dispatch, productWithSelectedSize);
		setShowSize(!showSize);
	};
	const { size, price, title, brand, image, _id, id, inStock } = product;
	return (
		<li key={_id} className={!inStock ? "out-of-stock" : ""}>
			<img
				width={"100%"}
				max-height={"200px"}
				src={image}
				alt={_id}
				onClick={() => (inStock ? productClickHandler(_id) : "")}
			/>
			<br />
			<article onClick={() => (inStock ? productClickHandler(_id) : "")}>
				<b>{brand}</b>
				<br />
				<p>{title}</p>
				<br />
				<p className="product-price">
					Rs. {price} <span>Rs. {parseInt(price * 1.2)}</span>
				</p>
			</article>
			<button
				disabled={!inStock ? true : false}
				style={{ cursor: !inStock ? "not-allowed" : "pointer" }}
				onClick={() => {
					state.wishlistData.findIndex((product) => product._id === _id) >= 0
						? RemoveFromWishlistHandler(_id)
						: AddToWishlistHandler(_id);
				}}
				className="add-to-wishlist-button"
				alt="Add to Wishlist"
			>
				{state.wishlistData.findIndex((product) => product._id === _id) >= 0 ? (
					<i class="fa-solid fa-heart" style={{ color: "#ff0000" }}></i>
				) : (
					<i class="fa-solid fa-heart" style={{ color: "white" }}></i>
				)}
			</button>
			<div className="size-list-to-add-to-cart">
				{showSize && (
					<>
						Select your shoe size:
						<ul>
							<br />
							{size.map((size) => (
								<button
									value={size}
									onClick={(event) => AddToCartHandler(_id, event)}
								>
									UK {size}
								</button>
							))}
						</ul>
					</>
				)}
			</div>

			<button
				onClick={() => setShowSize(!showSize)}
				className="add-to-cart-button"
				disabled={!inStock ? true : false}
				style={{
					cursor: !inStock ? "not-allowed" : "pointer",
					display: !inStock ? "none" : "block"
				}}
			>
				{!showSize ? "Add to Cart" : "X"}
			</button>
		</li>
	);
};
