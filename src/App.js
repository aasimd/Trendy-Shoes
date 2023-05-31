/** @format */

import "./App.css";
import Mockman from "mockman-js";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage.jsx";
import { ProductsListingPage } from "./pages/ProductsListingPage/ProductsListingPage.jsx";
import { ProductInfo } from "./pages/ProductsInfo/ProductsInfo";
import { LogInPage } from "./pages/LogInPage/LogInPage";
import { CartPage } from "./pages/CartPage/CartPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { WishlistPage } from "./pages/WishlistPage/WishlistPage";
import { CheckoutPage } from "./pages/CheckoutPage/CheckoutPage";
import { Auth } from "./Components/Auth/Auth";
function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/products" element={<ProductsListingPage />} />
				<Route path="/mockman" element={<Mockman />} />
				<Route path="/products/:productId" element={<ProductInfo />} />
				<Route path="/login" element={<LogInPage />} />
				<Route path="/checkout" element={<CheckoutPage />} />
				<Route
					path="/cart"
					element={
						<Auth>
							<CartPage />
						</Auth>
					}
				/>
				<Route
					path="/profile"
					element={
						<Auth>
							<ProfilePage />
						</Auth>
					}
				/>
				<Route
					path="/wishlist"
					element={
						<Auth>
							<WishlistPage />
						</Auth>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
