import React from 'react';
import { connect } from 'react-redux';
import { loginValidation, registerValidation } from '../../actions/regLoginForm';
import { NavLink } from 'react-router-dom';

function TopMenu(props) {
	const validate = () => {
		// e.preventDefault();
		// props.loginValidation(false);
		// props.registerValidation(false)
	}
	console.log(props)
	const show = () => {
		if(props.loginValidation || props.registerValidation) {
			return <ul className="top-menu">
				<li>{props.email}</li>
				<li onClick={validate()}><NavLink to='/logout' activeClassName="active-top-menu">Wyloguj</NavLink></li>
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
		loginValidation: state.loginValidation,
		registerValidation: state.registerValidation
	}
}

export default connect(mapStateToProps, { loginValidation, registerValidation })(TopMenu);