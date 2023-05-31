/** @format */

import React, { useContext } from "react";
import { PageContext } from "../../contexts/PageContext";

export const ProductInfo = () => {
	const { state, dispatch } = useContext(PageContext);
	const {
		_id,
		title,
		brand,
		price,
		categoryName,
		gender,
		size,
		image,
		inStock,
		rating
	} = state.selectedProduct;
	return (
		<div>
			{state.isLoading ? (
				<>Loading...</>
			) : (
				<div className="product-info-page">
					<div>{/* <img src={image} alt={title} /> */}</div>
					<article>
						<h1>{brand}</h1>
						<h2>{title}</h2>
						<p>
							<b>Rating: </b>
							{rating} Stars
						</p>
						<div>
							<h1>
								{price} <span>{price * 1.2}</span>
							</h1>
							<h3>20% OFF</h3>
						</div>
						<p>
							<b>Category: </b> {categoryName}
						</p>
						<p>
							<b>Avaibility:</b> {inStock ? "In Stock" : "Out of Stock"}
						</p>
						<div>
							<b>Size: </b>
							<ul>{size.map((size) => size)}</ul>
						</div>
					</article>
				</div>
			)}
		</div>
	);
};
