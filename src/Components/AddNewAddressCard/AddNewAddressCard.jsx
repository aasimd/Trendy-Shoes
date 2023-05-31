/** @format */

import React, { useContext, useState } from "react";
import { PageContext } from "../../contexts/PageContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const AddNewAddressCard = () => {
	const { state, dispatch } = useContext(PageContext);
	const [newAddress, setNewAddress] = useState({
		name: "",
		street: "",
		pincode: "",
		city: "",
		state: ""
	});

	const [addNewAddress, setAddNewAddress] = useState(false);
	const addAdressClickHandler = () => {
		if (
			newAddress.name.length > 0 &&
			newAddress.street.length > 0 &&
			newAddress.pincode.length > 0 &&
			newAddress.city.length > 0 &&
			newAddress.state.length > 0
		) {
			dispatch({
				type: "addNewAddress",
				payload: newAddress
			});
			toast.success("New Address added", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light"
			});
			setAddNewAddress(() => false);
		} else {
			toast.error("Address Credentials cannot be empty", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light"
			});
		}
	};
	return (
		<div>
			<div className="add-new-address-section">
				{state.addressData.length >= 3 ? (
					<div>Address Limit Reached</div>
				) : (
					<button
						className="add-new-address-button"
						onClick={() => {
							setNewAddress({
								name: "",
								street: "",
								pincode: "",
								city: "",
								state: "",
								id: 1 + state.addressData.length
							});
							setAddNewAddress(true);
						}}
					>
						<span>
							<i class="fa-regular fa-plus"></i>
						</span>{" "}
						Add new Address
					</button>
				)}
				{addNewAddress ? (
					<div className="add-new-address-container">
						{state.addressData.length < 3 ? (
							<div>
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
								<button onClick={() => addAdressClickHandler()}>Submit</button>
								<button onClick={() => setAddNewAddress(() => false)}>
									Cancel
								</button>
								<ToastContainer />
							</div>
						) : (
							""
						)}
					</div>
				) : (
					""
				)}
			</div>
		</div>
	);
};
