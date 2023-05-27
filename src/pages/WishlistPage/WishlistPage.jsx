/** @format */

import React, { useContext, useEffect } from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
import { PageContext } from "../../contexts/PageContext";
import { getWishlistData,removeItemFromWishlist } from "../../FetchFunctions/FetchFunctions.js";
export const WishlistPage = () => {
	const { state, dispatch } = useContext(PageContext);
	useEffect(() => {
		getWishlistData(dispatch);
	}, []);
	
	const removeHandler = (id) => {
		removeItemFromWishlist(dispatch, id);
	};

	return (
		<div>
			<nav>
				<NavBar />
			</nav>
			WishlistPage
			<ul>
				{state.wishlistData.map((product) => (
					<li key={product.id}>
						{product.title}{" "}
						<button onClick={() => removeHandler(product._id)}>Remove</button>
					</li>
				))}
			</ul>
		</div>
	);
};
