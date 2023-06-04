/** @format */
import "./ProfilePage.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useContext } from "react";
import { PageContext } from "../../contexts/PageContext";
import { NavBar } from "../../Components/NavBar/NavBar";
import { AddressListCard } from "../../Components/AddressListCard/AddressListCard";
import { AddNewAddressCard } from "../../Components/AddNewAddressCard/AddNewAddressCard";
import { FooterCard } from "../../Components/FooterCard/FooterCard.jsx";
export const ProfilePage = () => {
	const { state, dispatch } = useContext(PageContext);
	const [pageState, setPageState] = useState("ProfileInfo");
	return (
		<div>
			<ToastContainer />
			<div className="profile-page">
				<nav className="profile-nav">
					<NavBar />
				</nav>
				<div className="profile-buttons">
					<button
						onClick={() => setPageState("ProfileInfo")}
						className={
							pageState === "ProfileInfo"
								? "active-profile-button"
								: "inactive-profile-button"
						}
					>
						Profile Information
					</button>
					<button
						onClick={() => setPageState("Addresses")}
						className={
							pageState === "Addresses"
								? "active-profile-button"
								: "inactive-profile-button"
						}
					>
						Addresses
					</button>
					<button
						onClick={() => setPageState("OrderHistory")}
						className={
							pageState === "OrderHistory"
								? "active-profile-button"
								: "inactive-profile-button"
						}
					>
						Order History
					</button>
				</div>
				<div className="profile-content">
					{pageState === "Addresses" && (
						<div>
							<div className="address-section">
								<AddressListCard />
								<AddNewAddressCard />
							</div>
						</div>
					)}
					{pageState === "ProfileInfo" && (
						<section>
							<div className="user-profile-section">
								<h1>User Profile</h1>
								<p>
									<span>Name </span>
									{`${state.userInfo.firstName} ${state.userInfo.lastName}`}
								</p>
								<p>
									<span>Email </span>
									{state.userInfo.email}
								</p>
								<button
									onClick={() => dispatch({ type: "setLogin", payload: false })}
								>
									Logout
								</button>
							</div>
						</section>
					)}
				</div>
			</div>
			<footer>
				<FooterCard />
			</footer>
		</div>
	);
};
