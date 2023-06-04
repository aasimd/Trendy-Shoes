/** @format */

import React, { useContext } from "react";
import { AddressCard } from "../../Components/AddressCard/AddressCard";
import { PageContext } from "../../contexts/PageContext";

export const AddressListCard = () => {
	const { state } = useContext(PageContext);
	return (
		<div>
			<div className="address-list-section">
				<h2>Your Addresses</h2>
				{state.addressData.length > 0 ? (
					<ul>
						{state.addressData.map((address) => (
							<AddressCard address={address} />
						))}
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
