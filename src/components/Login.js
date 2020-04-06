import React from 'react';
import { connect } from 'react-redux';
import { loginEmail, loginPassword, loginValidation } from '../actions/regLoginForm';
import { NavLink } from 'react-router-dom'
// elements
import PanelMenu from './navigation/PanelMenu';
import decoration from '../assets/Decoration.svg';

function Login(props) {
	const handleChangeEmail = (e) => {
		props.loginEmail(e.target.value);
	}
	const handleChangePassword = (e) => {
		props.loginPassword(e.target.value);
	}
	const validate = (e) => {
		e.preventDefault();
		props.loginValidation();
	}
	return <div className="login">
		<PanelMenu />
		<h2>Zaloguj się</h2>
		<img src={decoration} alt="decoration" />
		{props.validForm && <p className="valid-form">Błędny email lub hasło!</p> }
			<form onSubmit={e => this.validate(e)}>
				<div className="form-content">
					<div className="form-input">
						<label htmlFor="email">Email</label>
						<input 
							type="email"
							name="email"
							onChange={(e) => handleChangeEmail(e)}
							value={props.email} />
					</div>
					<div className="form-input">
						<label htmlFor="password">Hasło</label>
						<input 
							type="password" 
							name="password"
							onChange={(e) => handleChangePassword(e)}
							value={props.password} />
					</div>
				</div>
				<div className="buttons">
					<NavLink to='/register' 
						activeClassName="active-top-menu">
							Załóż konto
					</NavLink>
					<button 
						type="submit"
						onClick={(e) => validate(e)}>
							Zaloguj się
					</button>
				</div>
			</form>
		
	</div>
}

const mapStateToProps = state => {
	return {
		email: state.loginEmail,
		password: state.loginPassword,
		valid: state.loginValidation
	}
}

export default connect(mapStateToProps, { loginEmail, loginPassword, loginValidation })(Login);