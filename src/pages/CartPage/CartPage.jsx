/** @format */
import './CartPage.css'
import React, { useContext, useEffect } from 'react'
import { PageContext } from '../../contexts/PageContext'
import { removeItemFromCart } from '../../FetchFunctions/FetchFunctions'
import { NavBar } from '../../Components/NavBar/NavBar'
import { CartProductCard } from '../../Components/CartProductCard/CartProductCard'
import { useNavigate } from 'react-router'
import { ToastContainer } from 'react-toastify'
import { NavLink } from 'react-router-dom'
import emptyCart from '../../images/emptyCart.svg'
import { ProgressBar } from 'react-loader-spinner'
import { FooterCard } from '../../Components/FooterCard/FooterCard.jsx'
import { ServicesCard } from '../../Components/ServicesCard/ServicesCard'
export const CartPage = () => {
    const { state, dispatch } = useContext(PageContext)
    const navigate = useNavigate()
    const TotalPriceOfCartProducts = state.cartData.reduce(
        (acc, curr) => acc + curr.price * curr.qty,
        0
    )
    const clearCart = () => {
        dispatch({ type: 'changeIsLoading', payload: true })
        const idArray = state.cartData.map(({ _id }) => _id)
        idArray.forEach((id) => removeItemFromCart(dispatch, id))
        setTimeout(() => {
            dispatch({ type: 'changeIsLoading', payload: false })
        }, 1200)
    }
    useEffect(() => {
        dispatch({ type: 'changeIsLoading', payload: true })
        setTimeout(() => {
            dispatch({ type: 'changeIsLoading', payload: false })
        }, 700)
    }, [])
    return (
        <div>
            <div
                className={
                    state.isLoading ? 'loader-spinner' : 'loader-spinner-hidden'
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
            <div>
                <nav>
                    <NavBar />
                </nav>
                <div className="cart-page">
                    {state.cartData.length > 0 ? (
                        <>
                            <h1 className="cart-header">Your Shopping Cart</h1>
                            <div className="cart-products-list">
                                <div className="clear-cart-btn">
                                    <button onClick={() => clearCart()}>
                                        <i className="fa-solid fa-trash"></i>{' '}
                                        Clear Cart
                                    </button>
                                </div>
                                <ul>
                                    {state.cartData.map((product) => (
                                        <CartProductCard
                                            product={product}
                                            key={product?._id}
                                        />
                                    ))}
                                </ul>
                            </div>
                            <div className="cart-price-details-card">
                                <ToastContainer />
                                <h3 className="cart-price-details-header">
                                    Cart price details
                                </h3>
                                <ul className="cart-price-details-products-list-container">
                                    {state.cartData.map((shoe) => (
                                        <li>
                                            <p>
                                                {shoe.brand} {shoe.title} (
                                                {shoe.qty})
                                            </p>
                                            <p>{shoe.price * shoe.qty}</p>
                                        </li>
                                    ))}
                                </ul>
                                <div className="cart-price-details-total-price-container">
                                    <>
                                        <b>Total Price:</b>
                                        <p>{TotalPriceOfCartProducts}</p>
                                    </>
                                    <button
                                        onClick={() => navigate('/checkout')}
                                        className="proceed-to-checkout-btn"
                                    >
                                        Proceed to Checkout
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="empty-cart">
                            <div>
                                <h1>
                                    Your cart is empty
                                    <br />
                                    <span>
                                        Add Products to Cart from{' '}
                                        <NavLink
                                            to="/products"
                                            title="Explore products"
                                        >
                                            Explore
                                        </NavLink>
                                    </span>
                                </h1>
                            </div>
                            <div>
                                <img src={emptyCart} alt="Cart is Empty" />
                            </div>
                        </div>
                    )}
                </div>
                <div>
                    <ServicesCard />
                </div>
                <footer>
                    <FooterCard />
                </footer>
            </div>
        </div>
    )
}
