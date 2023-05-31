/** @format */

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useContext } from "react";
import { PageContext } from "../../contexts/PageContext";
import { fetchAddItemToCart } from "../../FetchFunctions/FetchFunctions";
import "../ProductCard/ProductCard.css";
export const SizeListCard = ({ size, _id, setShowSize }) => {
	const { state, dispatch, displayData } = useContext(PageContext);
	const AddToCartHandler = (id, event) => {
		const productToAdd = state.productsData.find(
			(product) => product._id === id
		);
		const productWithSelectedSize = {
			...productToAdd,
			selectedSize: event.target.value,
			_id: productToAdd._id + event.target.value,
			quantity: 1
		};
		fetchAddItemToCart(dispatch, productWithSelectedSize);
		setShowSize(false);
		toast.success("Successfully Added to cart!", {
			position: "bottom-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: 3,
			theme: "light"
		});
	};
	const sizeButtonStylesClass = (size, id) => {
		const findShoeInCart = state.cartData.find(
			(shoe) => shoe._id === `${id}${size}`
		);
		if (findShoeInCart !== undefined) {
			return findShoeInCart.selectedSize === size.toString();
		}
	};
	const disableSizeButton = (size, id) => {
		const findShoeInCart = state.cartData.find(
			(shoe) => shoe._id === `${id}${size}`
		);
		if (findShoeInCart !== undefined) {
			return findShoeInCart.selectedSize === size.toString();
		}
	};
	return (
		<button
			title={
				disableSizeButton(size, _id)
					? "Already Added to Cart"
					: "Add Size to Cart"
			}
			className={
				sizeButtonStylesClass(size, _id) ? "in-cart-size" : "not-in-cart-size"
			}
			value={size}
			onClick={(event) => {
				AddToCartHandler(_id, event);
			}}
			disabled={disableSizeButton(size, _id) ? true : false}
		>
			UK {size}
		</button>
	);
};
