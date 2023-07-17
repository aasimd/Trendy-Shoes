import React, { useContext, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { PageContext } from '../../contexts/PageContext'
import {
    fetchEncodedToken,
    getCartData,
    getWishlistData,
} from '../../FetchFunctions/FetchFunctions'
import { useLocation, useNavigate } from 'react-router'

export const LoginCard = ({ setPageState }) => {
    const { state, dispatch } = useContext(PageContext)
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: '',
        showPassword: false,
    })
    const navigate = useNavigate()
    const location = useLocation()
    const loginAsGuestHandler = () => {
        setLoginInfo((prev) => ({
            ...prev,
            email: 'aasim123@gmail.com',
            password: 'aasim123',
        }))
    }
    const loginHandler = async (e) => {
        e.preventDefault()
        const response = await fetchEncodedToken(
            {
                email: loginInfo.email,
                password: loginInfo.password,
            },
            dispatch
        )
        if (response) {
            dispatch({ type: 'setLogin', payload: true })
            getWishlistData(dispatch)
            getCartData(dispatch)
            toast.success('Logged in!', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            })
            setTimeout(() => {
                navigate(location?.state?.from?.pathname)
            }, 1000)
        } else {
            toast.error('Wrong Credentials!', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            })
        }
    }
    return (
        <div className="login-page">
            <h1>Login</h1>
            <form onSubmit={(event) => loginHandler(event)}>
                <div>
                    <label htmlFor="email">Email address</label>
                    <input
                        required
                        onChange={(event) =>
                            setLoginInfo((prev) => ({
                                ...prev,
                                email: event.target.value,
                            }))
                        }
                        type="email"
                        value={loginInfo.email}
                        name="email"
                        id="email"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        onChange={(event) =>
                            setLoginInfo((prev) => ({
                                ...prev,
                                password: event.target.value,
                            }))
                        }
                        type={loginInfo.showPassword ? 'text' : 'password'}
                        value={loginInfo.password}
                        name="password"
                        id="password"
                        required
                    />
                </div>
                <div>
                    <input
                        name="password-visibility"
                        id="password-visibility"
                        type="checkbox"
                        onChange={(event) =>
                            setLoginInfo((prev) => ({
                                ...prev,
                                showPassword: event.target.checked,
                            }))
                        }
                        value={loginInfo.showPassword}
                    />
                    <label htmlFor="password-visibility">Show Password</label>
                </div>
                <p style={{ color: 'red' }}>{state.loginError}</p>
                <ToastContainer />
                <div className="submit-button">
                    <input type="submit" />
                </div>
            </form>
            <button onClick={() => loginAsGuestHandler()}>
                Use Guest Credentials
            </button>
            <button onClick={() => setPageState(() => 'signup')}>
                Create New Account
            </button>
        </div>
    )
}
