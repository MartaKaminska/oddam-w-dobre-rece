import React from 'react';
import { connect } from 'react-redux';
import { loginEmail, loginPassword, confRegisterPassword, registerValidationEmail, registerValidationPassword, registerValidationConfPassword, registerValidation } from '../actions/regLoginForm';
import { NavLink } from 'react-router-dom'
// elements
import PanelMenu from './navigation/PanelMenu';
import decoration from '../assets/Decoration.svg';

function Register(props) {
	const handleChangeEmail = (e) => {
		props.loginEmail(e.target.value);
	}
	const handleChangePassword = (e) => {
		props.loginPassword(e.target.value);
	}
	const handleChangeConfPassword = (e) => {
		props.confRegisterPassword(e.target.value);
	}
	const validate = (e) => {
		e.preventDefault();
		let emailTest = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		let check = 0;
		if(!emailTest.test(props.email)) {
			props.registerValidationEmail(false);
			check = 1;
		} else {
			props.registerValidationEmail(true);
		}
		if(props.password.length < 6) {
			props.registerValidationPassword(false);
			check = 1;
		} else {
			props.registerValidationPassword(true);
		}
		if(props.confPassword.length < 6 && props.confPassword !== props.password) {
			props.registerValidationConfPassword(false);
			check = 1;
		} else {
			props.registerValidationConfPassword(true);
		}
		if(check === 0) {
			console.log('check = ',check)
			props.registerValidation(true);
			
		}
	console.log(props)
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
					{!props.validEmail && <p className="valid-text">Niepoprawny email</p>}
					<div className="form-input">
						<label htmlFor="password">Hasło</label>
						<input 
							type="password" 
							name="password"
							onChange={(e) => handleChangePassword(e)}
							value={props.password} />
					</div>
					{!props.validPassword && <p className="valid-text">Hasło musi mieć conajmniej 6 znaków</p>}

					<div className="form-input">
						<label htmlFor="confPassword">Powtórz hasło</label>
						<input 
							type="password" 
							name="confPassword"
							onChange={(e) => handleChangeConfPassword(e)}
							value={props.confPassword} />
					</div>
					{!props.validConfPassword && <p className="valid-text">Wpisz poprawnie podane wcześniej hasło</p>}

				</div>
				<div className="buttons">
					<NavLink to='/login' 
						activeClassName="active-top-menu">
							Zaloguj się
					</NavLink>
					<NavLink to='/' 
						onClick={(e) => validate(e)}>
							Załóż konto
					</NavLink>
				</div>
			</form>
		
	</div>
}

const mapStateToProps = state => {
	return {
		email: state.loginEmail,
		password: state.loginPassword,
		confPassword: state.confRegisterPassword,
		validEmail: state.registerValidationEmail,
		validPassword: state.registerValidationPassword,
		validConfPassword: state.registerValidationConfPassword,
		validation: state.registerValidation
	}
}

export default connect(mapStateToProps, { loginEmail, loginPassword, confRegisterPassword, registerValidationEmail, registerValidationPassword, registerValidationConfPassword, registerValidation })(Register);