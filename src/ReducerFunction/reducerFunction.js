/** @format */

export const reducerFunction = (state, { type, payload }) => {
	switch (type) {
		case "getDATA":
			return {
				...state,
				productsData: [...payload]
			};
		case "changeIsLoading":
			return { ...state, isLoading: payload };
		case "setCategories":
			return { ...state, categories: payload };
		case "setFilteredByPrice":
			return { ...state, filteredByPrice: payload };
		case "setSelectedPrice":
			return { ...state, selectedPrice: payload };
		case "setCategoryFilters":
			return {
				...state,
				categoryFilters: payload
			};
		case "removeCategoryFilters":
			return {
				...state,
				categoryFilters: payload
			};
		case "setShowSearchResults":
			return {
				...state,
				showSearchResults: payload
			};
		case "setUserInput":
			return { ...state, userInput: payload };
		case "setSelectedRating":
			return { ...state, selectedRating: payload };
		case "setSortType":
			return { ...state, sortType: payload };
		case "setShoeSizes":
			return {
				...state,
				shoeSizes: [...state.productsData]
					.reduce((acc, { size }) => [...acc, ...size], [])
					.reduce(
						(acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]),
						[]
					)
					.sort((a, b) => a - b)
			};
		case "setSelectedSize":
			return { ...state, selectedSize: payload };
		case "setShowOutOfStock":
			return { ...state, showOutOfStock: payload };
		case "setSelectedProduct":
			return { ...state, selectedProduct: payload };
		case "setGenderFilters":
			return { ...state, genderFilters: payload };
		case "removeGenderFilters":
			return { ...state, genderFilters: payload };
		case "clearFilters":
			return {
				...state,
				categoryFilters: [],
				genderFilters: [],
				selectedPrice: 15000,
				showOutOfStock: false,
				selectedRating: "",
				selectedSize: "all",
				sortType: "reset"
			};
		case "setLogin":
			return {
				...state,
				isLoggedIn: payload
			};
		case "setLoginError":
			return { ...state, loginError: payload };
		case "setLoginEncodedToken":
			return { ...state, loginEncodedToken: payload };
		case "setUserInfo":
			return { ...state, userInfo: payload };
		case "addNewAddress":
			return { ...state, addressData: [...state.addressData, payload] };
		case "setDeleteAddress":
			return {
				...state,
				addressData: [...state.addressData].filter(
					(address) => address.id !== payload
				)
			};
		case "setWishlistData":
			return { ...state, wishlistData: [...payload] };
		case "setCartData":
			return { ...state, cartData: [...payload] };
		default:
			return state;
	}
};
