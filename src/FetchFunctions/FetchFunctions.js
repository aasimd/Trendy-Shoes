/** @format */
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const fetchCategories = async (dispatch) => {
	try {
		const response = await fetch(`/api/categories`);
		const { categories } = await response.json();
		dispatch({ type: "setCategories", payload: categories });
	} catch (e) {
		console.error(e);
	}
	dispatch({ type: "changeIsLoading", payload: false });
};

export const fetchSelectedCategory = async (id, dispatch) => {
	dispatch({ type: "changeIsLoading", payload: true });
	try {
		const response = await fetch(`/api/categories/${id}`);
		const { category } = await response.json();
		dispatch({ type: "setCategoryFilters", payload: [category.categoryName] });
	} catch (e) {
		console.error(e);
	}
	dispatch({ type: "changeIsLoading", payload: false });
};
export const fetchProductsData = async (dispatch) => {
	try {
		const response = await fetch("/api/products");
		const { products } = await response.json();
		dispatch({ type: "getDATA", payload: products });
		dispatch({ type: "setShoeSizes", payload: products });
	} catch (e) {
		console.error(e);
	}
};
export const fetchSelectedProduct = async (dispatch, productId) => {
	try {
		const response = await fetch(`/api/products/${productId}`);
		const { product } = await response.json();
		dispatch({ type: "setSelectedProduct", payload: product });
	} catch (e) {
		console.error(e);
	}
	dispatch({ type: "changeIsLoading", payload: false });
};
export const fetchEncodedToken = async (
	data,
	state,
	dispatch,
	navigate,
	location
) => {
	const creds = {
		email: data.email,
		password: data.password
	};
	try {
		const response = await fetch(`/api/auth/login`, {
			method: "POST",
			body: JSON.stringify(creds)
		});
		const { encodedToken, foundUser } = await response.json();
		localStorage.setItem("encodedtoken", encodedToken);
		dispatch({ type: "setLoginEncodedToken", payload: encodedToken });
		dispatch({ type: "setUserInfo", payload: foundUser });
		if (encodedToken === undefined) {
			console.error("Wrong email id or password entered");
			dispatch({
				type: "setLoginError",
				payload: "Wrong Email ID or Password entered"
			});
		} else {
			dispatch({ type: "setLogin", payload: true });
			dispatch({
				type: "setLoginError",
				payload: ""
			});
		}
		navigate(location?.state?.from?.pathname);
	} catch ({ errors }) {
		console.error(errors);
		dispatch({
			type: "setLoginError",
			payload: "Wrong Email ID or Password entered"
		});
	}
};
export const fetchSignupUser = async (data, dispatch, navigate, location) => {
	try {
		const creds = JSON.stringify(data);
		const response = await fetch("/api/auth/signup", {
			method: "POST",
			body: creds
		});
		const { encodedToken, createdUser } = await response.json();
		localStorage.setItem("encodedtoken", encodedToken);
		dispatch({ type: "setLoginEncodedToken", payload: encodedToken });
		dispatch({ type: "setUserInfo", payload: createdUser });
		dispatch({ type: "setLogin", payload: true });
		navigate(location?.state?.from?.pathname);
	} catch (e) {
		console.log("error in signing up user");
	}
};
export const fetchAddItemToWishlist = async (productToAdd) => {
	try {
		const encodedToken = localStorage.getItem("encodedtoken");
		const response = await fetch(`/api/user/wishlist`, {
			method: "POST",
			body: JSON.stringify({ product: productToAdd }),
			headers: {
				authorization: `${encodedToken}`
			}
		});
	} catch (e) {
		console.error("Failed to add item");
	}
};
export const getWishlistData = async (dispatch) => {
	try {
		const encodedToken = localStorage.getItem("encodedtoken");
		const response = await fetch(`/api/user/wishlist`, {
			method: "GET",
			headers: {
				authorization: encodedToken
			}
		});
		const { wishlist } = await response.json();
		dispatch({ type: "setWishlistData", payload: wishlist });
	} catch (e) {
		console.error(e.message);
	}
};
export const removeItemFromWishlist = async (dispatch, id) => {
	try {
		const encodedToken = localStorage.getItem("encodedtoken");
		const response = await fetch(`/api/user/wishlist/${id}`, {
			headers: {
				authorization: `${encodedToken}`
			},
			method: "DELETE"
		});
		const data = await response.json();
		dispatch({ type: "setWishlistData", payload: data.wishlist });
	} catch (e) {
		console.error(e.message);
	}
};
export const fetchAddItemToCart = async (dispatch, productToAdd) => {
	try {
		const encodedToken = localStorage.getItem("encodedtoken");
		const response = await fetch(`/api/user/cart`, {
			method: "POST",
			body: JSON.stringify({ product: productToAdd }),
			headers: {
				authorization: `${encodedToken}`
			}
		});
		const data = await response.json();
		dispatch({ type: "setCartData", payload: data.cart });
	} catch (e) {
		console.error("Failed to add item");
	}
};
export const removeItemFromCart = async (dispatch, id) => {
	try {
		const encodedToken = localStorage.getItem("encodedtoken");
		const response = await fetch(`/api/user/cart/${id}`, {
			headers: {
				authorization: `${encodedToken}`
			},
			method: "DELETE"
		});
		const data = await response.json();
		dispatch({ type: "setCartData", payload: data.cart });
	} catch (e) {
		console.error(e.message);
	}
};
