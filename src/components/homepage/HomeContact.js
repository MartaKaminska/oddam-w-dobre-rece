import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formName, formEmail, formContent, formValidation, formValidationName, formValidationEmail, formValidationContent } from '../../actions/homeForm';
// elements
import image from '../../assets/Background-Contact-Form.jpg';
import decoration from '../../assets/Decoration.svg';


class HomeContact extends Component {
	handleChangeName(e) {
		this.props.formName(e.target.value);
	}
	handleChangeEmail(e) {
		this.props.formEmail(e.target.value);
	}
	handleChangeContent(e) {
		this.props.formContent(e.target.value);
	}
	validate = (e) => {
		e.preventDefault();
		this.props.formValidation();
		console.log(this.props)
	}

	render() {
		return <div className="home-contact" id={this.props.id}>
			<div className="contact-left-column">
				<img src={image} alt="clothes"/>
			</div>
			<div className="contact-right-column">
				<h2>Skontaktuj się z nami</h2>
				<img src={decoration} alt="decoration" />
				{this.props.validForm && <p className="valid-form">Wiadomość została wysłana!< br/>Wkrótce się skontaktujemy.</p> }
				<form onSubmit={e => this.validate(e)}>
					<div className="form-contact">
						<div>
							<label htmlFor="name">Wpisz swoje imię</label>
							<input 
								type="text"
								name="name"
								onChange={(e) => this.handleChangeName(e)}
								value={this.props.name}
								placeholder="Krzysztof"/>
						</div>
						{!this.props.validName && <p className="valid-text">Imię powinno być jednym wyrazem!</p>}
						<div>
							<label htmlFor="email">Wpisz swój email</label>
							<input 
								type="email" 
								name="email"
								onChange={(e) => this.handleChangeEmail(e)}
								value={this.props.email}
								placeholder="abc@xyz.pl" />
						</div>
						{!this.props.validEmail && <p className="valid-text">Podany email jest nieprawidłowy!</p>}
					</div>
					<label htmlFor="content">Wpisz swoją wiadomość</label>
					<textarea 
						name="content"
						onChange={(e) => this.handleChangeContent(e)}
						value={this.props.content}
						placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
					{!this.props.validContent && <p className="valid-text">Wiadomość musi mieć conajmniej 120 znaków!</p>}
					<button 
						type="submit"
						onClick={this.validate}>
							Wyślij
					</button>
				</form>
			</div>
		</div>
	}
}

const mapStateToProps = state => {
	return {
		name: state.name,
		email: state.email,
		content: state.content,
		validForm: state.validForm,
		validName: state.validFormName,
		validEmail: state.validFormEmail,
		validContent: state.validFormContent
	}
}

export default connect(mapStateToProps, { formName, formEmail, formContent, formValidation, formValidationName, formValidationEmail, formValidationContent })(HomeContact);