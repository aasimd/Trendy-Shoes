/** @format */
import { useNavigate } from "react-router";
import { useContext } from "react";
import { ProgressBar } from "react-loader-spinner";
import { NavBar } from "../../Components/NavBar/NavBar";
import { PageContext } from "../../contexts/PageContext";
import { fetchSelectedCategory } from "../../FetchFunctions/FetchFunctions";
import "./LandingPage.css";
import { FooterCard } from "../../Components/FooterCard/FooterCard.jsx";
import { ServicesCard } from "../../Components/ServicesCard/ServicesCard";
export const LandingPage = () => {
	const { state, dispatch } = useContext(PageContext);
	const navigate = useNavigate();
	const categoryClickHandler = (id) => {
		navigate("/products");
		fetchSelectedCategory(id, dispatch);
	};
	const highestRatedShoesHandler = () => {
		navigate("/products");
		dispatch({ type: "setSortType", payload: "ratings-desc" });
	};
	const viewAllClickHandler = () => {
		dispatch({ type: "setFilteredByCategory", payload: false });
		navigate("/products");
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
			<div className="landing-page">
				<nav>
					<NavBar />
				</nav>

				<div className="landing-page-menu">
					<div className="view-all-banner">
						<img
							onClick={viewAllClickHandler}
							src="https://hips.hearstapps.com/hmg-prod/images/cushioned-shoes-15408-1632754154.jpg"
							alt="view-all-banner"
						/>
						<h1>View All Products</h1>
					</div>
					{state.categories.map((category) => {
						const { image, categoryName, _id } = category;
						return (
							<li key={_id} onClick={() => categoryClickHandler(_id)}>
								<div className="category-banner">
									<img src={image} alt={categoryName} />
									<h2>{categoryName}</h2>
								</div>
							</li>
						);
					})}
					<div
						className="category-banner"
						onClick={() => highestRatedShoesHandler()}
					>
						<img
							src="https://www.kicksonfire.com/wp-content/uploads/2019/02/Air-Jordan-1-Retro-High-OG-Turbo-Green-2.jpg?x58464"
							alt="highest-rated"
						/>
						<h2>Highest Rated</h2>
					</div>
				</div>
				<div>
					<ServicesCard />
				</div>
				<footer>
					<FooterCard />
				</footer>
			</div>
		</div>
	);
};
