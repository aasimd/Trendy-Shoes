/** @format */
import "./ProductListingPage.css";
import { useContext } from "react";
import { PageContext } from "../../contexts/PageContext";
import { NavBar } from "../../Components/NavBar/NavBar";
import { Filters } from "../../Components/Filters/Filters.jsx";
import { ProductCard } from "../../Components/ProductCard/ProductCard";
import { FooterCard } from "../../Components/FooterCard/FooterCard.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ProductsListingPage = () => {
	const { state, dispatch, displayData } = useContext(PageContext);
	const { isLoading } = state;

	return (
		<div>
			{isLoading ? (
				<>Loading...</>
			) : (
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
							<section className="products-list">
								{displayData.length > 0 ? (
									<ul>
										{displayData.map((product) => (
											<ProductCard product={product} />
										))}
									</ul>
								) : (
									<h1 className="no-data-found">No data found</h1>
								)}
							</section>
						</main>
					</div>

					<footer>
						<FooterCard />
					</footer>
				</div>
			)}
		</div>
	);
};
