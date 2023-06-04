/** @format */
import "./ProductListingPage.css";
import { useContext, useEffect } from "react";
import { PageContext } from "../../contexts/PageContext";
import { NavBar } from "../../Components/NavBar/NavBar";
import { Filters } from "../../Components/Filters/Filters.jsx";
import { ProductCard } from "../../Components/ProductCard/ProductCard";
import { FooterCard } from "../../Components/FooterCard/FooterCard.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ServicesCard } from "../../Components/ServicesCard/ServicesCard";
import { ProgressBar } from "react-loader-spinner";
export const ProductsListingPage = () => {
	const { state, dispatch, displayData } = useContext(PageContext);
	useEffect(() => {
		dispatch({ type: "changeIsLoading", payload: true });
		setTimeout(() => {
			dispatch({ type: "changeIsLoading", payload: false });
		}, 500);
	}, []);
	return (
		<div>
			{state.isLoading ? (
				<div>
					<div
						className={
							state.isLoading ? "loader-spinner" : "loader-spinner-hidden"
						}
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
				</div>
			) : (
				<div>
					<div>
						<div className="products-listing-page">
							<ToastContainer />
							<nav className="nav-container">
								<NavBar />
							</nav>
							<main>
								<aside className="filters-container">
									<Filters />
								</aside>
								{displayData.length > 0 ? (
									<section className="products-list">
										<ul>
											{displayData.map((product) => (
												<ProductCard product={product} />
											))}
										</ul>
									</section>
								) : (
									<h1 id="no-data-found">No data found</h1>
								)}
							</main>
						</div>
						<div>
							<ServicesCard />
						</div>
						<footer>
							<FooterCard />
						</footer>
					</div>
				</div>
			)}
		</div>
	);
};
