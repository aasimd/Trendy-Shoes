/** @format */
import "./CheckoutPriceDetails.css";
import React, { useContext } from "react";
import { PageContext } from "../../contexts/PageContext";
import "../../pages/CartPage/CartPage.css";
export const CheckoutPriceDetails = () => {
	const { state, dispatch } = useContext(PageContext);
	const TotalPriceOfCartProducts = state.cartData.reduce(
		(acc, curr) => acc + curr.price * curr.quantity,
		0
	);
	const GetTotalItems = state.cartData.reduce(
		(acc, curr) => acc + curr.quantity,
		0
	);
	return (
		<div className="bill-details-container">
			<h3 className="bill-details-header">Bill Details</h3>
			<div className="bill-charges-container">
				<div>
					{GetTotalItems !== 1 ? (
						<p>Price ( {GetTotalItems} Items )</p>
					) : (
						<p>Price ( {GetTotalItems} Item )</p>
					)}
					<p>{parseInt(TotalPriceOfCartProducts * 1.2)}</p>
				</div>
				<div>
					<p>Discount</p>
					<p>-{parseInt(TotalPriceOfCartProducts * 0.2)}</p>
				</div>
				<div>
					<p>Delivery Charges</p>
					<p>100</p>
				</div>
			</div>
			<div>
				<b>Total Price:</b>
				<b>{TotalPriceOfCartProducts + 100}</b>
			</div>
		</div>
	);
};
