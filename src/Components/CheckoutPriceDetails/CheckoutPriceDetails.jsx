/** @format */
import "./CheckoutPriceDetails.css";
import React, { useContext } from "react";
import { PageContext } from "../../contexts/PageContext";
import "../../pages/CartPage/CartPage.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
import { removeItemFromCart } from "../../FetchFunctions/FetchFunctions";
export const CheckoutPriceDetails = () => {
	const { state, dispatch } = useContext(PageContext);
	const {name, street, city, pincode } = state.deliveryAddress;
	const navigate = useNavigate();
	const TotalPriceOfCartProducts = state.cartData.reduce(
		(acc, curr) => acc + curr.price * curr.qty,
		0
	);
	const GetTotalItems = state.cartData.reduce((acc, curr) => acc + curr.qty, 0);
	const orderPlaced = () => {
		toast.success("Order Placed Successfully!", {
			position: "top-center",
			autoClose: 2500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light"
		});
		const idArray = state.cartData.map((product) => product._id);
		setTimeout(() => {
			navigate("/");
			dispatch({ type: "setDeliveryAddress", payload: {} });
			idArray.forEach((id) => removeItemFromCart(dispatch, id));
		}, 3000);
	};
	return (
		<div className="bill-details-container">
			<ToastContainer />
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
			<div className="checkout-price-total">
				<b>Total Price:</b>
				<b>{TotalPriceOfCartProducts + 100}</b>
			</div>
			<hr />
			{state.deliveryAddress.name ? (
				<div>
					<h3>Deliver to</h3>
					<div className="address-container">
						<h2>{name}</h2>
						<p>
							{street}
							<br />
							{pincode}
							<br />
							{city}
						</p>

						<button className="place-order-btn" onClick={() => orderPlaced()}>
							Place Order
						</button>
					</div>
				</div>
			) : (
				<h3 style={{ color: "red" }}>
					Please select a delivery Address to proceed
				</h3>
			)}
		</div>
	);
};
