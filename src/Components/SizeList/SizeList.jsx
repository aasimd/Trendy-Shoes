/** @format */

import React, { useContext } from "react";
import { PageContext } from "../../contexts/PageContext";
import { fetchAddItemToCart } from "../../FetchFunctions/FetchFunctions";
import "../ProductCard/ProductCard.css";
export const SizeListCard = ({ size, _id, setShowSize }) => {
	const { state, dispatch, displayData } = useContext(PageContext);
	// const [showSize, setShowSize] = useState(false);
	const AddToCartHandler = (id, event) => {
		const productToAdd = displayData.find((product) => product._id === id);
		const productWithSelectedSize = {
			...productToAdd,
			selectedSize: event.target.value,
			_id: productToAdd._id + event.target.value,
			quantity: 1
		};
		fetchAddItemToCart(dispatch, productWithSelectedSize);
		setShowSize(false);
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
