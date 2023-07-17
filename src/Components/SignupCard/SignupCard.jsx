import React, { useContext, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import {
    fetchSignupUser,
    getCartData,
    getWishlistData,
} from '../../FetchFunctions/FetchFunctions'
import { PageContext } from '../../contexts/PageContext'
import { useLocation, useNavigate } from 'react-router'

export const SignupCard = ({ setPageState }) => {
    const location = useLocation()
    const navigate = useNavigate()
    const [signupInfo, setSignupInfo] = useState({
        email: '',
        password: '',
        confirmpassword: '',
        firstname: '',
        lastname: '',
    })
    const { state, dispatch } = useContext(PageContext)

    const randomDataToSignupHandler = () => {
        setSignupInfo((prev) => ({
            ...prev,
            email: 'johndoe@gmail.com',
            password: 'johndoe',
            confirmpassword: 'johndoe',
            firstname: 'John',
            lastname: 'Doe',
        }))
    }

    const signupUserHandler = async (event) => {
        event.preventDefault()
        const response = await fetchSignupUser(
            {
                email: signupInfo.email,
                password: signupInfo.password,
                firstName: signupInfo.firstname,
                lastName: signupInfo.lastname,
            },
            dispatch
        )
        if (response) {
            dispatch({ type: 'setLogin', payload: true })
            getCartData(dispatch)
            getWishlistData(dispatch)
            dispatch({ type: 'changeIsLoading', payload: true })
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
            }, 1500)
        } else {
            toast.error('Email id already in use!', {
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
        <div className="signup-page">
            <h1>SignUp</h1>
            <form onSubmit={(event) => signupUserHandler(event)}>
                <div>
                    <label for="first-name">First Name</label>
                    <input
                        value={signupInfo.firstname}
                        required
                        name="firstname"
                        id="firstname"
                        type="text"
                        onChange={(event) =>
                            setSignupInfo((prev) => ({
                                ...prev,
                                firstname: event.target.value,
                            }))
                        }
                    />
                </div>
                <div>
                    <label for="last-name">Last Name</label>
                    <input
                        value={signupInfo.lastname}
                        required
                        name="lastname"
                        id="lastname"
                        type="text"
                        onChange={(event) =>
                            setSignupInfo((prev) => ({
                                ...prev,
                                lastname: event.target.value,
                            }))
                        }
                    />
                </div>
                <div>
                    <label for="email">Email address</label>
                    <input
                        value={signupInfo.email}
                        required
                        name="email"
                        id="email"
                        type="email"
                        onChange={(event) =>
                            setSignupInfo((prev) => ({
                                ...prev,
                                email: event.target.value,
                            }))
                        }
                    />
                </div>
                <div>
                    <label for="password">Password</label>
                    <input
                        value={signupInfo.password}
                        required
                        name="password"
                        id="password"
                        type="text"
                        onChange={(event) =>
                            setSignupInfo((prev) => ({
                                ...prev,
                                password: event.target.value,
                            }))
                        }
                    />
                </div>
                <div>
                    <label for="confirm-password"> Confirm Password</label>
                    <input
                        value={signupInfo.confirmpassword}
                        required
                        name="password"
                        id="confirmpassword"
                        type="text"
                        onChange={(event) =>
                            setSignupInfo((prev) => ({
                                ...prev,
                                confirmpassword: event.target.value,
                            }))
                        }
                    />
                </div>
                {signupInfo.password.length > 0 ||
                signupInfo.confirmpassword.length > 0 ? (
                    signupInfo.confirmpassword === signupInfo.password ? (
                        <h5 style={{ color: 'green' }}>Passwords Match</h5>
                    ) : (
                        <h5 style={{ color: 'red' }}>Passwords don't Match</h5>
                    )
                ) : (
                    ''
                )}
                <ToastContainer />
                <div className="submit-button">
                    <input type="submit" />
                </div>
            </form>
            <button
                onClick={() => {
                    randomDataToSignupHandler()
                }}
            >
                Use Random Credentials to Signup
            </button>
            <button onClick={() => setPageState(() => 'login')}>
                Already have an Account?
            </button>
        </div>
    )
}
