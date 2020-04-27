import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginEmail, loginPassword, loginValidation } from '../actions/regLoginForm';
import { NavLink } from 'react-router-dom'
// elements
import PanelMenu from './navigation/PanelMenu';
import decoration from '../assets/Decoration.svg';
// function
import { checkUserList } from './localStorage';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			login: ''
		}
	}
	handleChangeEmail = (e) => {
		this.props.loginEmail(e.target.value);
	}
	handleChangePassword = (e) => {
		this.props.loginPassword(e.target.value);
	}
	validate = () => {
		if(checkUserList(this.props.email, this.props.password)) {
			this.setState({ login: 'yes' })
		} else {
			this.setState({ login: 'no' })
		}
	}
	changeLoginValidation = () => {
		this.props.loginValidation(true);
	}
	render() {
		return <div className="login">
			<PanelMenu />
			<h2>Zaloguj się</h2>
			<img src={decoration} alt="decoration" />
				<form onSubmit={e => this.validate(e)}>
					{this.state.login === 'no' ? 
						<p className="valid-form">Błędny adres lub haslo. Proszę spróbuj ponownie lub załóż konto</p>: 
						null}
					<div className="form-content">
						<div className="form-input">
							<label htmlFor="email">Email</label>
							<input 
								type="email"
								name="email"
								onChange={(e) => this.handleChangeEmail(e)}
								value={this.props.email} />
						</div>
						<div className="form-input">
							<label htmlFor="password">Hasło</label>
							<input 
								onMouseLeave={this.validate}
								type="password" 
								name="password"
								onChange={(e) => this.handleChangePassword(e)}
								value={this.props.password} />
						</div>
					</div>
					<div className="buttons">
						<NavLink to='/register'>
								Załóż konto
						</NavLink>
						{this.state.login === 'yes' ?
							<NavLink to='/' 
								onClick={this.changeLoginValidation}>
									Zaloguj się
							</NavLink>:
						<div
							className='no-active'>Zaloguj się</div>
					}
					</div>
				</form>
		</div>
	}
}
const mapStateToProps = state => {
	return {
		email: state.loginEmail,
		password: state.loginPassword,
		valid: state.loginValidation
	}
}

export default connect(mapStateToProps, { loginEmail, loginPassword, loginValidation })(Login);