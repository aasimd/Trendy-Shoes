/** @format */
import React, { useContext, useState } from "react";
import {
	fetchEncodedToken,
	fetchSignupUser
} from "../../FetchFunctions/FetchFunctions";
import { PageContext } from "../../contexts/PageContext";
import { useLocation, useNavigate } from "react-router";

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
	const loginHandler = () => {
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
	};
	const signupUserHandler = () => {
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
	};
	return (
		<div>
			<button onClick={() => navigate("/products")}>go back</button>
			{pageState === "login" ? (
				<div>
					<h1>Login</h1>
					<div>
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
					</div>
					<div>
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
					</div>
					<div>
						<button onClick={loginHandler}>Login </button>
					</div>
					<button onClick={() => loginAsGuestHandler()}>Login as Guest</button>
					<button onClick={() => setPageState(() => "signup")}>
						Create New Account
					</button>
				</div>
			) : (
				<div>
					<div>
						<h1>SignUp</h1>
						<label for="first-name">First Name</label>
						<input
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
						<div>
							<button onClick={() => signupUserHandler()}>
								Create New Account
							</button>
							<button
								onClick={() => {
									loginAsGuestHandler();
									setPageState(() => "login");
								}}
							>
								Login as Guest
							</button>
						</div>

						<button onClick={() => setPageState(() => "login")}>
							Already have an Account?
						</button>
					</div>
				</div>
			)}
		</div>
	);
};
