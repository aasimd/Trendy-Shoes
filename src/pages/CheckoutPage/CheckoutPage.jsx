/** @format */
import "./CheckoutPage.css";
import { AddNewAddressCard } from "../../Components/AddNewAddressCard/AddNewAddressCard";
import { CheckoutPriceDetails } from "../../Components/CheckoutPriceDetails/CheckoutPriceDetails";
import { DeliveryAddressSelectCard } from "../../Components/DeliveryAddressSelectCard/DeliveryAddressSelectCard";
import { FooterCard } from "../../Components/FooterCard/FooterCard.jsx";
import { NavBar } from "../../Components/NavBar/NavBar";
import { ServicesCard } from "../../Components/ServicesCard/ServicesCard";
export const CheckoutPage = () => {
	return (
		<div>
			<nav>
				<NavBar />
			</nav>
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
			<div>
				<ServicesCard />
			</div>
			<footer>
				<FooterCard />
			</footer>
		</div>
	);
};
