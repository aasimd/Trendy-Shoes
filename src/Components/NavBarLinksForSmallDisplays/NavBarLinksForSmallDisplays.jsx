/** @format */
import './NavBarLinksForSmallDisplays.css'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { PageContext } from '../../contexts/PageContext'
import { getActiveStyle } from '../NavBar/NavBar'
export const NavBarLinksForSmallDisplays = () => {
    const { state, dispatch } = useContext(PageContext)
    const totalProductsInWishlist = state.wishlistData.length
    const totalProductsInCart = state.cartData.reduce(
        (acc, product) => acc + product.qty,
        0
    )
    return (
        <div>
            <div className="nav-bar-links-for-small-displays">
                <div
                    className={
                        // state.showNavBarLinks
                        //     ?
                        'nav-bar-links-visible-for-small-displays'
                        // : 'nav-bar-links-hidden-for-small-displays'
                    }
                >
                    <ul>
                        <li>
                            <NavLink
                                className={getActiveStyle}
                                to="/products"
                                title="Explore products"
                                onClick={() =>
                                    dispatch({ type: 'clearFilters' })
                                }
                            >
                                {/* <i class="fa-solid fa-shoe-prints"></i>
                                <br /> */}
                                Explore
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={getActiveStyle}
                                to="/profile"
                                title="User Profile"
                            >
                                {/* <i class="fa-regular fa-user"></i>
                                <br />  */}
								Profile
                            </NavLink>
                        </li>
                        <li id="wishlist-logo">
                            <NavLink
                                className={getActiveStyle}
                                to="/wishlist"
                                title="Wishlist"
                            >
                                {/* <i class="fa-regular fa-heart"></i> */}
                                {/* <br />  */}
								Wishlist{' '}
                                {state.isLoggedIn && `(${totalProductsInCart})`}
                            </NavLink>
                        </li>
                        <li id="cart-logo">
                            <NavLink
                                className={getActiveStyle}
                                to="/cart"
                                title="Shopping Cart"
                            >
                                {/* <i class="fa-solid fa-cart-shopping"></i>
                                <br />  */}
								Cart
                                {state.isLoggedIn && `(${totalProductsInCart})`}
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
