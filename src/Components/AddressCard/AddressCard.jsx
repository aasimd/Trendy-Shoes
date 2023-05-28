/** @format */

import React, { useState } from "react";
import { useContext } from "react";
import { PageContext } from "../../contexts/PageContext";

export const AddressCard = ({ address }) => {
	const { id, name, city, state, pincode, street } = address;
	const { dispatch } = useContext(PageContext);
	const [editAddress, setEditAddress] = useState(false);

	const prevAddress = {
		name: name,
		street: street,
		pincode: pincode,
		city: city,
		state: state
	};
	const [newAddress, setNewAddress] = useState({
		name: prevAddress.name,
		street: prevAddress.street,
		pincode: prevAddress.pincode,
		city: prevAddress.city,
		state: prevAddress.state
	});

	return (
		<div>
			<li key={pincode}>
				<div>
					{editAddress ? (
						<div className="address-edit-container">
							<input
								type="text"
								placeholder={`Name: ${name}`}
								onChange={(event) => {
									if (event.target.value.length > 0) {
										setNewAddress((prev) => ({
											...prev,
											name: event.target.value
										}));
									} else {
										setNewAddress((prev) => ({
											...prev,
											name: prevAddress.name
										}));
									}
								}}
							/>

							<input
								type="text"
								placeholder={`Street: ${street}`}
								onChange={(event) => {
									if (event.target.value.length > 0) {
										setNewAddress((prev) => ({
											...prev,
											street: event.target.value
										}));
									} else {
										setNewAddress((prev) => ({
											...prev,
											street: prevAddress.street
										}));
									}
								}}
							/>
							<input
								type="number"
								placeholder={`Pincode: ${pincode}`}
								onChange={(event) => {
									if (event.target.value.length > 0) {
										setNewAddress((prev) => ({
											...prev,
											pincode: event.target.value
										}));
									} else {
										setNewAddress((prev) => ({
											...prev,
											pincode: prevAddress.pincode
										}));
									}
								}}
							/>
							<input
								type="text"
								placeholder={`City: ${city}`}
								onChange={(event) => {
									if (event.target.value.length > 0) {
										setNewAddress((prev) => ({
											...prev,
											city: event.target.value
										}));
									} else {
										setNewAddress((prev) => ({
											...prev,
											city: prevAddress.city
										}));
									}
								}}
							/>
							<input
								type="text"
								placeholder={`State: ${state}`}
								onChange={(event) => {
									if (event.target.value.length > 0) {
										setNewAddress((prev) => ({
											...prev,
											state: event.target.value
										}));
									} else {
										setNewAddress((prev) => ({
											...prev,
											state: prevAddress.city
										}));
									}
								}}
							/>
							<button
								onClick={() => {
									setEditAddress(false);
									dispatch({ type: "setDeleteAddress", payload: id });
									dispatch({ type: "addNewAddress", payload: newAddress });
								}}
							>
								Save Changes
							</button>
						</div>
					) : (
						<div className="address-container">
							<h2>{newAddress.name}</h2>
							<p>
								{newAddress.street}
								<br />
								{newAddress.pincode}
								<br />
								{newAddress.city}, {newAddress.state}
							</p>
							<div>
								<button onClick={() => setEditAddress(true)}>Edit</button>
								<button
									onClick={() => {
										dispatch({ type: "setDeleteAddress", payload: id });
									}}
								>
									Delete
								</button>
							</div>
						</div>
					)}
				</div>
			</li>
		</div>
	);
};
