/** @format */

import React from "react";
import { createContext, useReducer, useEffect } from "react";

import { reducerFunction } from "../ReducerFunction/reducerFunction";
import {
	fetchCategories,
	fetchProductsData
} from "../FetchFunctions/FetchFunctions";

export const PageContext = createContext();

export const PageContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducerFunction, {
		productsData: [],
		isLoading: true,
		categories: [],
		filteredByCategory: false,
		genderFilters: [],
		filteredByPrice: false,
		selectedPrice: 15000,
		categoryFilters: [],
		userInput: "",
		showSearchResults: false,
		selectedRating: "",
		sortType: "reset",
		shoeSizes: [],
		selectedSize: "all",
		showOutOfStock: false,
		selectedProduct: {},
		isLoggedIn: false,
		loginError: "",
		loginEncodedToken: "",
		addressData: [
			{
				id: 1,
				name: "John Doe",
				pincode: 400064,
				city: "Mumbai",
				street: "Goregaon-Malad Link Road, Kamble Villa",
				state: "Maharashtra"
			}
		],
		userInfo: {},
		wishlistData: [],
		cartData: []
	});

	useEffect(() => {
		fetchProductsData(dispatch);
		fetchCategories(dispatch);
		setTimeout(
			() => dispatch({ type: "changeIsLoading", payload: false }),
			3000
		);
	}, []);

	const filterArray = () => {
		const displayArray = state.filteredByCategory
			? state.dataFilteredByCategory
			: state.productsData;
		const filteredByPriceData = state.filteredByPrice
			? displayArray.filter(({ price }) => price <= state.selectedPrice)
			: displayArray;
		const searchResultsData = state.showSearchResults
			? [...filteredByPriceData].filter((product) => {
					const brandTitle = product.brand + product.title;
					return brandTitle
						.toLowerCase()
						.trim()
						.includes(state.userInput.toLowerCase().trim());
			  })
			: filteredByPriceData;
		const filteredByRatingsData = [...searchResultsData].filter(
			(product) => product.rating > state.selectedRating
		);
		const SortedArray = () => {
			return state.sortType === ""
				? filteredByRatingsData
				: [...filteredByRatingsData].sort((a, b) => {
						if (state.sortType === "asc") return a.price - b.price;
						if (state.sortType === "desc") return b.price - a.price;
						if (state.sortType === "ratings-asc") return a.rating - b.rating;
						if (state.sortType === "ratings-desc") return b.rating - a.rating;
				  });
		};

		const filteredBySizeData =
			state.selectedSize === "all"
				? SortedArray()
				: [...SortedArray()].filter(({ size }) =>
						size.includes(Number(state.selectedSize))
				  );
		const showOutOfStockData = state.showOutOfStock
			? filteredBySizeData
			: [...filteredBySizeData].filter(({ inStock }) => inStock);

		const filteredByGenderData =
			state.genderFilters.length > 0
				? [...showOutOfStockData].filter(({ gender }) =>
						state.genderFilters.includes(gender)
				  )
				: showOutOfStockData;
		const filteredByCategoryData = () =>
			state.categoryFilters.length > 0
				? [...filteredByGenderData].filter(({ categoryName }) =>
						state.categoryFilters.includes(categoryName)
				  )
				: filteredByGenderData;
		return filteredByCategoryData();
	};
	const displayData = filterArray();
	return (
		<PageContext.Provider
			value={{
				state,
				dispatch,
				displayData
			}}
		>
			{children}
		</PageContext.Provider>
	);
};
