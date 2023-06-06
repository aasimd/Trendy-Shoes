/** @format */

import React, { useContext, useState } from "react";
import { PageContext } from "../../contexts/PageContext";
import "./DeliveryAddressSelectCard.css";
export const DeliveryAddressSelectCard = () => {
	const { state, dispatch } = useContext(PageContext);
	const setDeliveryAddressFunc = (event) => {
		const isChecked = event.target.checked;
		const id = event.target.value;
		if (isChecked) {
			const findAddress = state.addressData.find(
				(address) => address.id === id
			);
			dispatch({ type: "setDeliveryAddress", payload: findAddress });
		} else {
			dispatch({ type: "setDeliveryAddress", payload: undefined });
		}
	};
	return (
		<div>
			<div className="address-list-section">
				<h2>Your Addresses</h2>
				{state.addressData.length > 0 ? (
					<ul>
						{state.addressData.map((address) => {
							const { id, name, city, addressState, pincode, street } = address;
							return (
								<li id="delivery-address-container">
									<label key={id}>
										<input
											className="delivery-address-radio"
											type="radio"
											name="delivery-address"
											checked={state.deliveryAddress.id === id}
											value={id}
											onChange={(event) => {
												setDeliveryAddressFunc(event);
											}}
										/>
										<h2>{name}</h2>
										<p>
											{street}
											<br />
											{pincode}
											<br />
											{city}, {addressState}
										</p>
									</label>
								</li>
							);
						})}
					</ul>
				) : (
					<div className="empty-address-message">
						<b>
							You dont have any saved Addresses, <br />
							Please add a new Address.
						</b>
					</div>
				)}
			</div>
		</div>
	);
};
