/** @format */
import './LoginPage.css'
import React, { useContext, useState } from 'react'
import {
    fetchEncodedToken,
    fetchSignupUser,
    getCartData,
    getWishlistData,
} from '../../FetchFunctions/FetchFunctions'
import { PageContext } from '../../contexts/PageContext'
import { useLocation, useNavigate } from 'react-router'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { NavBar } from '../../Components/NavBar/NavBar'
import { ProgressBar } from 'react-loader-spinner'
import { LoginCard } from '../../Components/LoginCard/LoginCard'
export const LogInPage = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [pageState, setPageState] = useState('login')

    const [signupInfo, setSignupInfo] = useState({
        email: '',
        password: '',
        firstname: '',
        lastname: '',
    })
    const { state, dispatch } = useContext(PageContext)

    const randomDataToSignupHandler = () => {
        setSignupInfo((prev) => ({
            ...prev,
            email: 'johndoe@gmail.com',
            password: 'johndoe',
            firstname: 'John',
            lastname: 'Doe',
        }))
    }

    const signupUserHandler = () => {
        if (
            signupInfo.email.length > 0 &&
            signupInfo.password.length > 0 &&
            signupInfo.firstname.length > 0 &&
            signupInfo.lastname.length > 0
        ) {
            fetchSignupUser(
                {
                    email: signupInfo.email,
                    password: signupInfo.password,
                    firstName: signupInfo.firstname,
                    lastName: signupInfo.lastname,
                },
                dispatch,
                navigate,
                location
            )
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
        <div>
            <nav>
                <NavBar />
            </nav>

            {pageState === 'login' ? (
                <LoginCard setPageState={setPageState} />
            ) : (
                <div>
                    <div className="signup-page">
                        <h1>SignUp</h1>
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
                        <ToastContainer />
                        <button onClick={() => signupUserHandler()}>
                            Create New Account
                        </button>
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
                </div>
            )}
        </div>
    )
}
