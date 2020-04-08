import React from 'react';
import { connect } from 'react-redux';
import { loginEmail, loginPassword, confRegisterPassword, loginValidation, registerValidation } from '../../actions/regLoginForm';
import { NavLink } from 'react-router-dom';

function TopMenu(props) {
	const logout = () => {
		props.loginValidation(false);
		props.registerValidation(false)
		props.loginEmail('');
		props.loginPassword('');
		props.confRegisterPassword('');
	}
	const show = () => {
		if(props.login || props.register) {
			return <ul className="top-menu">
				<li>{props.email}</li>
				<li><NavLink to='/form' activeClassName="active-top-menu">Oddaj rzeczy</NavLink></li>
				<li onClick={logout}><NavLink to='/logout' activeClassName="active-top-menu">Wyloguj</NavLink></li>
			</ul>
		} else {
			return <ul className="top-menu">
				<li><NavLink to='/login' activeClassName="active-top-menu">Zaloguj się</NavLink></li>
				<li><NavLink to='/register' activeClassName="active-top-menu">Załóż konto</NavLink></li>
			</ul>
		}
	}
	return show()
}
const mapStateToProps = state => {
	return {
		email: state.loginEmail,
		password: state.loginPassword,
		confPassword: state.confRegisterPassword,
		login: state.loginValidation,
		register: state.registerValidation
	}
}

export default connect(mapStateToProps, { loginEmail, loginPassword, confRegisterPassword, loginValidation, registerValidation })(TopMenu);