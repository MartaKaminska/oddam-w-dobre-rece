import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loginEmail, loginPassword, confRegisterPassword, registerValidationEmail, registerValidationPassword, registerValidationConfPassword, registerValidation } from '../actions/regLoginForm';
import { NavLink } from 'react-router-dom'
// elements
import PanelMenu from './navigation/PanelMenu';
import decoration from '../assets/Decoration.svg';
// function
import { registerChecking, addToUserList } from './localStorage';

class Register extends Component {
	constructor(props) {
		super(props)
		this.state = {
			userExist: false,
			registered: ''
		}
	}
	handleChangeEmail = (e) => {
		this.props.loginEmail(e.target.value);
	}
	handleChangePassword = (e) => {
		this.props.loginPassword(e.target.value);
	}
	handleChangeConfPassword = (e) => {
		this.props.confRegisterPassword(e.target.value);
	}
	validate = (e) => {
		let check = 0;
		let emailTest = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(!registerChecking(this.props.email)) {
			if(!emailTest.test(this.props.email)) {
				this.props.registerValidationEmail(false);
				check = 1;
			} else {
				this.props.registerValidationEmail(true);
			}
			if(this.props.password.length < 6) {
				this.props.registerValidationPassword(false);
				check = 1;
			} else {
				this.props.registerValidationPassword(true);
			}
			if(this.props.confPassword.length < 6 && this.props.confPassword !== this.props.password) {
				this.props.registerValidationConfPassword(false);
				check = 1;
			} else {
				this.props.registerValidationConfPassword(true);
			} 
			if(check === 0) {
				this.setState({ registered: true });
			}
			this.setState({ userExist: false })
		} else {
			this.setState({ userExist: true })
		}
	}
	changeRegisterValidation = () => {
		this.props.registerValidation(true);
		addToUserList(this.props.email, this.props.password)
	}
	render() {
		return <div className="login">
			<PanelMenu />
			<h2>Zaloguj się</h2>
			<img src={decoration} alt="decoration" />
				<form onSubmit={e => this.validate(e)}>
				{this.state.userExist && <p className="valid-form">Użytkownik o podanym adresie email jest już zarejestrowany w bazie. Zaloguj się do konta.</p> }
					<div className="form-content"
						onMouseLeave={this.validate}
						onBlur={this.validate}
						>
						<div className="form-input">
							<label htmlFor="email">Email</label>
							<input 
								type="email"
								name="email"
								onChange={(e) => this.handleChangeEmail(e)}
								value={this.props.email} />
						</div>
						{!this.props.validEmail && !this.state.userExist ? <p className="valid-text">Niepoprawny email</p>: null}
						<div className="form-input">
							<label htmlFor="password">Hasło</label>
							<input 
								type="password" 
								name="password"
								onChange={(e) => this.handleChangePassword(e)}
								value={this.props.password} />
						</div>
						{!this.props.validPassword && !this.state.userExist ? <p className="valid-text">Hasło musi mieć conajmniej 6 znaków</p>: null}
						<div className="form-input">
							<label htmlFor="confPassword">Powtórz hasło</label>
							<input 
								type="password" 
								name="confPassword"
								onChange={(e) => this.handleChangeConfPassword(e)}
								value={this.props.confPassword} />
						</div>
						{!this.props.validConfPassword && !this.state.userExist ? <p className="valid-text">Wpisz poprawnie podane wcześniej hasło</p>: null}
					</div>
					<div className="buttons">
						<NavLink to='/login' 
							activeClassName="active-top-menu">
								Zaloguj się
						</NavLink>
						{this.state.registered ? 
							<NavLink 
								onClick={this.changeRegisterValidation}
								to='/' >
								Załóż konto</NavLink>:
							<div className='no-active'>Załóż konto</div>
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
		confPassword: state.confRegisterPassword,
		validEmail: state.registerValidationEmail,
		validPassword: state.registerValidationPassword,
		validConfPassword: state.registerValidationConfPassword,
		validation: state.registerValidation
	}
}

export default connect(mapStateToProps, { loginEmail, loginPassword, confRegisterPassword, registerValidationEmail, registerValidationPassword, registerValidationConfPassword, registerValidation })(Register);