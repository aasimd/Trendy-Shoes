/** @format */

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useContext } from "react";
import { PageContext } from "../../contexts/PageContext";
import {
	fetchAddItemToCart,
	fetchCartIncrement
} from "../../FetchFunctions/FetchFunctions";
import "../ProductCard/ProductCard.css";
import { useNavigate } from "react-router";
export const SizeListCard = ({ size, _id, setShowSize }) => {
	const { state, dispatch } = useContext(PageContext);
	const navigate = useNavigate();
	const AddToCartHandler = (id, event) => {
		if (state.isLoggedIn) {
			const findShoeInCart = state.cartData.find(
				(shoe) => shoe._id === `${id}${size}`
			);
			if (findShoeInCart !== undefined) {
				const id2 = `${id}${size}`;
				fetchCartIncrement(dispatch, id2);
			} else {
				const productToAdd = state.productsData.find(
					(product) => product._id === id
				);
				const productWithSelectedSize = {
					...productToAdd,
					selectedSize: event.target.value,
					_id: productToAdd._id + event.target.value
				};
				fetchAddItemToCart(dispatch, productWithSelectedSize);
				setShowSize(false);
			}
			toast.success(`Size ${size} Successfully Added to cart!`, {
				position: "bottom-right",
				autoClose: 1500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light"
			});
		} else {
			toast.info("Please login to add products to Cart!", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light"
			});
			setTimeout(() => {
				navigate("/profile");
			}, 1200);
		}
	};
	return (
		<button
			className="size-button"
			title={"Add Size to Cart"}
			value={size}
			onClick={(event) => {
				AddToCartHandler(_id, event);
			}}
		>
			{size}
		</button>
	);
};
