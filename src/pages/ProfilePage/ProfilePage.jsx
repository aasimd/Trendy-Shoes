/** @format */
import "./ProfilePage.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useContext, useEffect } from "react";
import { PageContext } from "../../contexts/PageContext";
import { NavBar } from "../../Components/NavBar/NavBar";
import { AddressListCard } from "../../Components/AddressListCard/AddressListCard";
import { AddNewAddressCard } from "../../Components/AddNewAddressCard/AddNewAddressCard";
import { FooterCard } from "../../Components/FooterCard/FooterCard.jsx";
import { ProgressBar } from "react-loader-spinner";
export const ProfilePage = () => {
	const { state, dispatch } = useContext(PageContext);
	const [pageState, setPageState] = useState("ProfileInfo");
	useEffect(() => {
		dispatch({ type: "changeIsLoading", payload: true });
		setTimeout(() => {
			dispatch({ type: "changeIsLoading", payload: false });
		}, 500);
	}, []);
	const logoutHandler = () => {
		dispatch({ type: "setLogin", payload: false });
	};
	return (
		<div>
			<div
				className={state.isLoading ? "loader-spinner" : "loader-spinner-hidden"}
			>
				<ProgressBar
					height="100px"
					width="400px"
					ariaLabel="progress-bar-loading"
					wrapperStyle={{}}
					wrapperClass="progress-bar-wrapper"
					borderColor="#F4442E"
					barColor="#51E5FF"
				/>
			</div>
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
					{/* <button
						onClick={() => setPageState("OrderHistory")}
						className={
							pageState === "OrderHistory"
								? "active-profile-button"
								: "inactive-profile-button"
						}
					>
						Order History
					</button> */}
				</div>
				<div className="profile-content">
					{pageState === "Addresses" && (
						<div>
							<div className="address-section">
								<div>
									<AddressListCard />
								</div>
								<div>
									<AddNewAddressCard />
								</div>
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
								<button onClick={() => logoutHandler()}>Logout</button>
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
