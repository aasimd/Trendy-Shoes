/** @format */
import "./LoginPage.css";
import React, { useContext, useState } from "react";
import {
	fetchEncodedToken,
	fetchSignupUser
} from "../../FetchFunctions/FetchFunctions";
import { PageContext } from "../../contexts/PageContext";
import { useLocation, useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const LogInPage = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [pageState, setPageState] = useState("login");
	const [loginInfo, setLoginInfo] = useState({
		email: "",
		password: "",
		showPassword: false
	});
	const [signupInfo, setSignupInfo] = useState({
		email: "",
		password: "",
		firstname: "",
		lastname: ""
	});
	const { state, dispatch } = useContext(PageContext);

	const loginAsGuestHandler = () => {
		setLoginInfo((prev) => ({
			...prev,
			email: "adarshbalika@gmail.com",
			password: "adarshbalika"
		}));
	};
	const randomDataToSignupHandler = () => {
		setSignupInfo((prev) => ({
			...prev,
			email: "johndoe@gmail.com",
			password: "johndoe",
			firstname: "John",
			lastname: "Doe"
		}));
	};
	const loginHandler = () => {
		if (loginInfo.email.length > 0 && loginInfo.password.length > 0) {
			fetchEncodedToken(
				{
					email: loginInfo.email,
					password: loginInfo.password
				},
				state,
				dispatch,
				navigate,
				location
			);
			if (state.isLoggedIn === true) {
				toast.success("Logged in!", {
					position: "top-right",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light"
				});
			}
		} else {
			toast.error("Wrong Credentials!", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light"
			});
		}
	};
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
					lastName: signupInfo.lastname
				},
				dispatch,
				navigate,
				location
			);
			console.log("success");
		} else {
			console.log("error");
			console.log(signupInfo.email);
			toast.error("Wrong Credentials!", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light"
			});
		}
	};
	return (
		<div>
			<button onClick={() => navigate("/products")}>Explore Products</button>
			{pageState === "login" ? (
				<div className="login-page">
					<h1>Login</h1>

					<label htmlFor="email">Email address</label>
					<input
						required
						onChange={(event) =>
							setLoginInfo((prev) => ({ ...prev, email: event.target.value }))
						}
						type="email"
						value={loginInfo.email}
						name="email"
						id="email"
					/>

					<label htmlFor="password">Password</label>
					<input
						onChange={(event) =>
							setLoginInfo((prev) => ({
								...prev,
								password: event.target.value
							}))
						}
						type={loginInfo.showPassword ? "text" : "password"}
						value={loginInfo.password}
						name="password"
						id="password"
						required
					/>
					<div>
						<input
							name="password-visibility"
							id="password-visibility"
							type="checkbox"
							onChange={(event) =>
								setLoginInfo((prev) => ({
									...prev,
									showPassword: event.target.checked
								}))
							}
							value={loginInfo.showPassword}
						/>
						<label htmlFor="password-visibility">Show Password</label>
					</div>
					<p style={{ color: "red" }}>{state.loginError}</p>
					<ToastContainer />
					<button onClick={loginHandler}>Login </button>
					<button onClick={() => loginAsGuestHandler()}>
						Use Guest Credentials
					</button>
					<button onClick={() => setPageState(() => "signup")}>
						Create New Account
					</button>
				</div>
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
									firstname: event.target.value
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
									lastname: event.target.value
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
									email: event.target.value
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
									password: event.target.value
								}))
							}
						/>
						<ToastContainer />
						<button onClick={() => signupUserHandler()}>
							Create New Account
						</button>
						<button
							onClick={() => {
								randomDataToSignupHandler();
							}}
						>
							Use Random Credentials to Signup
						</button>

						<button onClick={() => setPageState(() => "login")}>
							Already have an Account?
						</button>
					</div>
				</div>
			)}
		</div>
	);
};
