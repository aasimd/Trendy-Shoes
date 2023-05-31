/** @format */
import "./CheckoutPage.css";
import React from "react";
import { AddNewAddressCard } from "../../Components/AddNewAddressCard/AddNewAddressCard";
import { CheckoutPriceDetails } from "../../Components/CheckoutPriceDetails/CheckoutPriceDetails";
import { DeliveryAddressSelectCard } from "../../Components/DeliveryAddressSelectCard/DeliveryAddressSelectCard";

export const CheckoutPage = () => {
	return (
		<div>
			<h1>CheckoutPage</h1>
			<div className="checkout-page">
				<div className="checkout-address-list-container">
					<DeliveryAddressSelectCard />
				</div>
				<div className="checkout-add-new-address-container">
					<AddNewAddressCard />
				</div>
				<div className="checkout-price-details-container">
					<CheckoutPriceDetails />
				</div>
			</div>
		</div>
	);
};
