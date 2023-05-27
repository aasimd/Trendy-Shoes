/** @format */

import React, { useState, useContext } from "react";
import { PageContext } from "../../contexts/PageContext";
import { NavBar } from "../../Components/NavBar/NavBar";

export const ProfilePage = () => {
	const { state, dispatch } = useContext(PageContext);
	const [newAddress, setNewAddress] = useState({
		name: "",
		street: "",
		pincode: "",
		city: "",
		state: ""
	});
	return (
		<div>
			<nav>
				<NavBar />
			</nav>
			ProfilePage
			<button onClick={() => dispatch({ type: "setLogin", payload: false })}>
				Log out
			</button>
			<div>
				<button>Profile Information</button>
				<button>Addresses</button>
				<button>Order History</button>
				<div>
					<h1>Addresses</h1>
					<ul>
						{state.addressData.map((address) => {
							const { id, name, city, state, pincode, street } = address;
							return (
								<li key={pincode}>
									<h2>{name}</h2>

									<p>
										{street}
										<br />
										<b>{pincode}</b>
										<br />
										{city} {"   "}
										<b>{state}</b>
									</p>
									<button
										onClick={() => {
											dispatch({ type: "setDeleteAddress", payload: id });
										}}
									>
										Delete Address
									</button>
									<button onClick={(name) => console.log(name)}>Click</button>
								</li>
							);
						})}
					</ul>
					{state.addressData.length < 3 ? (
						<div>
							<button
								onClick={() =>
									setNewAddress({
										name: "",
										street: "",
										pincode: "",
										city: "",
										state: "",
										id: 1 + state.addressData.length
									})
								}
							>
								Add new Address
							</button>
							<input
								onChange={(event) =>
									setNewAddress((prev) => ({
										...prev,
										name: event.target.value
									}))
								}
								type="text"
								name="name"
								id="name"
								placeholder="name"
								value={newAddress.name}
								required
							/>
							<input
								onChange={(event) =>
									setNewAddress((prev) => ({
										...prev,
										street: event.target.value
									}))
								}
								type="text"
								name="street"
								id="street"
								placeholder="street"
								value={newAddress.street}
								required
							/>
							<input
								onChange={(event) =>
									setNewAddress((prev) => ({
										...prev,
										pincode: event.target.value
									}))
								}
								type="number"
								name="pincode"
								id="pincode"
								placeholder="pincode"
								value={newAddress.pincode}
								required
							/>
							<input
								onChange={(event) =>
									setNewAddress((prev) => ({
										...prev,
										city: event.target.value
									}))
								}
								type="text"
								name="city"
								id="city"
								placeholder="city"
								value={newAddress.city}
								required
							/>
							<input
								onChange={(event) =>
									setNewAddress((prev) => ({
										...prev,
										state: event.target.value
									}))
								}
								type="text"
								name="state"
								id="state"
								placeholder="state"
								required
							/>
							<button
								onClick={() =>
									dispatch({ type: "addNewAddress", payload: newAddress })
								}
							>
								Submit
							</button>
						</div>
					) : (
						""
					)}
				</div>
			</div>
		</div>
	);
};
