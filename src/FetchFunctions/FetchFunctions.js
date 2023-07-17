/** @format */
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
export const fetchCategories = async (dispatch) => {
    try {
        const response = await fetch(`/api/categories`)
        const { categories } = await response.json()
        dispatch({ type: 'setCategories', payload: categories })
    } catch (e) {
        console.error(e)
    }
    dispatch({ type: 'changeIsLoading', payload: false })
}

export const fetchSelectedCategory = async (id, dispatch) => {
    dispatch({ type: 'changeIsLoading', payload: true })
    try {
        const response = await fetch(`/api/categories/${id}`)
        const { category } = await response.json()
        dispatch({
            type: 'setCategoryFilters',
            payload: [category.categoryName],
        })
    } catch (e) {
        console.error(e)
    }
    dispatch({ type: 'changeIsLoading', payload: false })
}
export const fetchProductsData = async (dispatch) => {
    try {
        const response = await fetch('/api/products')
        const { products } = await response.json()
        dispatch({ type: 'getDATA', payload: products })
        dispatch({ type: 'setShoeSizes', payload: products })
    } catch (e) {
        console.error(e)
    }
}
export const fetchSelectedProduct = async (dispatch, productId) => {
    try {
        const response = await fetch(`/api/products/${productId}`)
        const { product } = await response.json()
        dispatch({ type: 'setSelectedProduct', payload: product })
    } catch (e) {
        console.error(e)
    }
    dispatch({ type: 'changeIsLoading', payload: false })
}
export const fetchEncodedToken = async (data, dispatch) => {
    const creds = {
        email: data.email,
        password: data.password,
    }
    try {
        const response = await fetch(`/api/auth/login`, {
            method: 'POST',
            body: JSON.stringify(creds),
        })
        const { encodedToken, foundUser } = await response.json()
        localStorage.setItem('encodedtoken', encodedToken)
        dispatch({ type: 'setLoginEncodedToken', payload: encodedToken })
        dispatch({ type: 'setUserInfo', payload: foundUser })
        if (encodedToken === undefined) {
            console.error('Wrong email id or password entered')
            return false
        } else {
            dispatch({
                type: 'setLoginError',
                payload: '',
            })
            getCartData(dispatch)
            getWishlistData(dispatch)

            return true
        }
    } catch ({ errors }) {
        console.error(errors)
        dispatch({
            type: 'setLoginError',
            payload: 'Wrong Email ID or Password entered',
        })
        return false
    }
}
export const fetchSignupUser = async (data, dispatch) => {
    try {
        const creds = JSON.stringify(data)
        const response = await fetch('/api/auth/signup', {
            method: 'POST',
            body: creds,
        })
        const { encodedToken, createdUser } = await response.json()
        if (encodedToken !== undefined) {
            localStorage.setItem('encodedtoken', encodedToken)
            dispatch({ type: 'setLoginEncodedToken', payload: encodedToken })
            dispatch({ type: 'setUserInfo', payload: createdUser })
            return true
        } else {
            return false
        }
    } catch (e) {
        console.error('error in signing up user')
        return false
    }
}
export const fetchAddItemToWishlist = async (productToAdd) => {
    try {
        const encodedToken = localStorage.getItem('encodedtoken')
        await fetch(`/api/user/wishlist`, {
            method: 'POST',
            body: JSON.stringify({ product: productToAdd }),
            headers: {
                authorization: `${encodedToken}`,
            },
        })
    } catch (e) {
        console.error('Failed to add item')
    }
}
export const getWishlistData = async (dispatch) => {
    try {
        const encodedToken = localStorage.getItem('encodedtoken')
        const response = await fetch(`/api/user/wishlist`, {
            method: 'GET',
            headers: {
                authorization: `${encodedToken}`,
            },
        })
        const data = await response.json()
        dispatch({ type: 'setWishlistData', payload: data.wishlist })
    } catch (e) {
        console.error(e.message)
    }
}
export const getCartData = async (dispatch) => {
    try {
        const encodedToken = localStorage.getItem('encodedtoken')
        const response = await fetch(`/api/user/cart`, {
            method: 'GET',
            headers: {
                authorization: `${encodedToken}`,
            },
        })
        const { cart } = await response.json()
        dispatch({ type: 'setCartData', payload: cart })
    } catch (e) {
        console.error(e.message)
    }
}
export const removeItemFromWishlist = async (dispatch, id) => {
    try {
        const encodedToken = localStorage.getItem('encodedtoken')
        const response = await fetch(`/api/user/wishlist/${id}`, {
            headers: {
                authorization: `${encodedToken}`,
            },
            method: 'DELETE',
        })
        const data = await response.json()
        dispatch({ type: 'setWishlistData', payload: data.wishlist })
    } catch (e) {
        console.error(e.message)
    }
}
export const fetchAddItemToCart = async (dispatch, productToAdd) => {
    try {
        const encodedToken = localStorage.getItem('encodedtoken')
        const response = await fetch(`/api/user/cart`, {
            method: 'POST',
            body: JSON.stringify({ product: productToAdd }),
            headers: {
                authorization: `${encodedToken}`,
            },
        })
        const data = await response.json()
        dispatch({ type: 'setCartData', payload: data.cart })
    } catch (e) {
        console.error('Failed to add item')
    }
}
export const fetchCartIncrement = async (dispatch, id) => {
    try {
        const encodedToken = localStorage.getItem('encodedtoken')
        const response = await fetch(`/api/user/cart/${id}`, {
            method: 'POST',
            body: JSON.stringify({
                action: {
                    type: 'increment',
                },
            }),
            headers: {
                authorization: `${encodedToken}`,
            },
        })
        const data = await response.json()
        dispatch({ type: 'setCartData', payload: data.cart })
    } catch (e) {
        console.error('Failed to increase item quantity')
    }
}
export const fetchCartDecrement = async (dispatch, id) => {
    try {
        const encodedToken = localStorage.getItem('encodedtoken')
        const response = await fetch(`/api/user/cart/${id}`, {
            method: 'POST',
            body: JSON.stringify({
                action: {
                    type: 'decrement',
                },
            }),
            headers: {
                authorization: `${encodedToken}`,
            },
        })
        const data = await response.json()
        dispatch({ type: 'setCartData', payload: data.cart })
    } catch (e) {
        console.error('Failed to decrease item quantity')
    }
}

export const removeItemFromCart = async (dispatch, id) => {
    try {
        const encodedToken = localStorage.getItem('encodedtoken')
        const response = await fetch(`/api/user/cart/${id}`, {
            headers: {
                authorization: `${encodedToken}`,
            },
            method: 'DELETE',
        })
        const data = await response.json()
        dispatch({ type: 'setCartData', payload: data.cart })
    } catch (e) {
        console.error(e.message)
    }
}
