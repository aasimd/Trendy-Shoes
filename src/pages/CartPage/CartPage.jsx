/** @format */

import React, { useContext } from "react";
import { PageContext } from "../../contexts/PageContext";
import { removeItemFromCart } from "../../FetchFunctions/FetchFunctions";
import { NavBar } from "../../Components/NavBar/NavBar";

export const CartPage = () => {
	const { state, dispatch } = useContext(PageContext);
	const removeHandler = (id,size) => {
		removeItemFromCart(dispatch, id,size);
	};
	return (
		<div>
			{" "}
			<NavBar />
			CartPage
			<ul>
				{state.cartData.map((product) => (
					<li key={product.id}>
						{product.title}
						{product.selectedSize}
						<button
							onClick={() => removeHandler(product._id, product.selectedSize)}
						>
							Remove
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};
