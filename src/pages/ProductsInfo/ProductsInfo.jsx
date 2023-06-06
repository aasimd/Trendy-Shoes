/** @format */
import {
	fetchAddItemToCart,
	fetchCartIncrement,
	removeItemFromWishlist,
	fetchAddItemToWishlist,
	getWishlistData
} from "../../FetchFunctions/FetchFunctions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useContext, useState } from "react";
import { PageContext } from "../../contexts/PageContext";
import "./ProductsInfo.css";
import { NavBar } from "../../Components/NavBar/NavBar";
import { FooterCard } from "../../Components/FooterCard/FooterCard.jsx";
import { ServicesCard } from "../../Components/ServicesCard/ServicesCard.jsx";
import { ProgressBar } from "react-loader-spinner";
import { useNavigate } from "react-router";
export const ProductInfo = () => {
	const { state, dispatch } = useContext(PageContext);
	const {
		_id,
		title,
		brand,
		price,
		categoryName,
		size,
		image,
		inStock,
		rating
	} = state.selectedProduct;
	const [selectedSizeFromProductInfo, setSelectedSizeFromProductInfo] =
		useState();
	const navigate = useNavigate();
	const AddToCartHandler = (id) => {
		if (state.isLoggedIn) {
			if (selectedSizeFromProductInfo !== undefined) {
				const findShoeInCart = state.cartData.find(
					(shoe) => shoe._id === `${id}${selectedSizeFromProductInfo}`
				);
				if (findShoeInCart !== undefined) {
					const id2 = `${id}${selectedSizeFromProductInfo}`;
					fetchCartIncrement(dispatch, id2);
				} else {
					const productToAdd = state.productsData.find(
						(product) => product._id === id
					);
					const productWithSelectedSize = {
						...productToAdd,
						selectedSize: selectedSizeFromProductInfo.toString(),
						_id: `${productToAdd._id}${selectedSizeFromProductInfo}`,
						quantity: 1
					};
					fetchAddItemToCart(dispatch, productWithSelectedSize);
				}
				toast.success(
					`Size ${selectedSizeFromProductInfo} Successfully Added to cart!`,
					{
						position: "bottom-right",
						autoClose: 1500,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "light"
					}
				);
			} else {
				toast.info("Please Select a size to Add to Cart!", {
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
		} else {
			toast.info("Please login to add products to Cart!", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light"
			});
			setTimeout(() => {
				navigate("/profile");
			}, 1200);
		}
		setSelectedSizeFromProductInfo(() => undefined);
	};
	const AddToWishlistHandler = (id) => {
		if (state.isLoggedIn) {
			const productToAdd = state.productsData.find(
				(product) => product._id === id
			);
			fetchAddItemToWishlist(productToAdd);
			getWishlistData(dispatch);
			toast.success("Added to Wishlist!", {
				position: "bottom-right",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light"
			});
		} else {
			toast.info("Please login to add products to wishlist!", {
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
	const RemoveFromWishlistHandler = (id) => {
		removeItemFromWishlist(dispatch, id);
		toast.info("Removed From Wishlist!", {
			position: "bottom-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light"
		});
	};
	const wishlistHandler = (_id) => {
		if (state.isLoggedIn) {
			state.wishlistData.findIndex((product) => product._id === _id) >= 0
				? RemoveFromWishlistHandler(_id)
				: AddToWishlistHandler(_id);
		} else {
			toast.info("Please login to add products to wishlist!", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light"
			});
			setTimeout(() => {
				navigate("/profile");
			}, 1200);
		}
	};
	return (
		<div style={{ position: "relative" }}>
			{state.isLoading ? (
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
			) : (
				<div>
					<nav>
						<NavBar />
					</nav>
					<div className="product-info-page">
						<ToastContainer />

						<div className="product-info-img-container">
							<img src={image} alt={title} />
						</div>
						<article>
							<h1 className="product-info-brand">{brand}</h1>
							<h2 className="product-info-title">{title}</h2>
							<p className="product-info-rating">
								<i class="fa-solid fa-star" style={{ color: "#ffc800" }}></i>{" "}
								{rating}/5 Ratings
							</p>
							<hr />
							<div className="product-info-price">
								<h1>
									{price} <span>{parseInt(price * 1.2)}</span>
									<h3>(20% OFF)</h3>
								</h1>
							</div>
							<hr />
							<p className="product-info-category">
								<b>Category: </b> {categoryName}
							</p>
							<p className="product-info-inStock">
								<b>Avaibility:</b> {inStock ? "In Stock" : "Out of Stock"}
							</p>
							<div className="product-info-size">
								<b>Select Size (UK Size) </b>
								<ul>
									{size.map((size) => (
										<button
											className={
												selectedSizeFromProductInfo === size
													? "selected-product-info-size-button"
													: "product-info-size-button"
											}
											onClick={() => {
												selectedSizeFromProductInfo === size
													? setSelectedSizeFromProductInfo(() => undefined)
													: setSelectedSizeFromProductInfo(() => size);
											}}
										>
											{size}
										</button>
									))}
								</ul>
							</div>
							<div className="add-to-cart-wishlist-buttons">
								<button onClick={() => AddToCartHandler(_id)}>
									<i class="fa-solid fa-cart-plus"></i> Add to Cart
								</button>
								<button onClick={() => wishlistHandler(_id)}>
									{state.wishlistData.findIndex(
										(product) => product._id === _id
									) >= 0 ? (
										<i
											class="fa-solid fa-heart"
											style={{ color: "#ff0000" }}
										></i>
									) : (
										<i class="fa-regular fa-heart"></i>
									)}{" "}
									Wishlist
								</button>
							</div>
						</article>
					</div>
					<div>
						<ServicesCard />
					</div>
					<footer>
						<FooterCard />
					</footer>
				</div>
			)}
		</div>
	);
};
