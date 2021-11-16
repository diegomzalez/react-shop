import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import '@styles/Login.scss';
import logo from '@logos/logo_yard_sale.svg'

const Login = () => {
	const form = useRef(null);

	const handlerSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			username: formData.get('email'),
			password: formData.get('password')
		}
		console.log(data);
	}

	return (
		<div className="Login">
			<div className="Login-container">
				<img src={logo} alt="logo" className="logo" />
				<form ref={form} action="/" className="form">
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" name="email" placeholder="platzi@example.cm" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
					<Link to="/">
						<button onClick={handlerSubmit}  className="primary-button-login-button">
							Log in
						</button>
					</Link>
					<a href="/new-password">Forgot my password</a>
				</form>
				<Link to="/signup">
					<button className="secondary-button signup-button" >
						Sign up
						
					</button>
				</Link>
			</div>
		</div>
	);
}

export default Login;
