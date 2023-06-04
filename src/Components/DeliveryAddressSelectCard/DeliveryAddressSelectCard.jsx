/** @format */

import React, { useContext } from "react";
import { PageContext } from "../../contexts/PageContext";
import "./DeliveryAddressSelectCard.css";
export const DeliveryAddressSelectCard = ({
	deliveryAddress,
	setDeliveryAddress
}) => {
	const { state, dispatch } = useContext(PageContext);
	return (
		<div>
			<div className="address-list-section">
				<h2>Your Addresses</h2>
				{state.addressData.length > 0 ? (
					<ul>
						{state.addressData.map((address) => {
							const { id, name, city, state, pincode, street } = address;
							return (
								<li id="delivery-address-container">
									<label key={id}>
										<input
											className="delivery-address-radio"
											type="radio"
											name="delivery-address"
											onChange={() =>
												dispatch({
													type: "setDeliveryAddress",
													payload: address
												})
											}
											/>
										<h2>{name}</h2>
										<p>
											{street}
											<br />
											{pincode}
											<br />
											{city}, {state}
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
