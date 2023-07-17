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
import { SignupCard } from '../../Components/SignupCard/SignupCard'
export const LogInPage = () => {
    
    const [pageState, setPageState] = useState('login')

    
    return (
        <div>
            <nav>
                <NavBar />
            </nav>

            {pageState === 'login' ? (
                <LoginCard setPageState={setPageState} />
            ) : (
                <SignupCard setPageState={setPageState} />
            )}
        </div>
    )
}
