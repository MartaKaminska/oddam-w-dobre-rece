import React from 'react';
import { connect } from 'react-redux';
import { formName, formEmail, formContent, formValidation, formValidationName, formValidationEmail, formValidationContent } from '../../actions/homeForm';
// elements
import image from '../../assets/Background-Contact-Form.jpg';
import decoration from '../../assets/Decoration.svg';

function HomeContact(props) {
	const handleChangeName = (e) => {
		props.formName(e.target.value);
	}
	const handleChangeEmail = (e) => {
		props.formEmail(e.target.value);
	}
	const handleChangeContent = (e) => {
		props.formContent(e.target.value);
	}
	const validateForm = (e) => {
		e.preventDefault();
		let name = props.name.split(' ');
		let emailTest = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		let check = 0;
		if(name.length !== 1 || name[0] === ''){
			props.formValidationName(false);
			check = 1;
		} else {
			props.formValidationName(true);
		}
		if(!emailTest.test(props.email)) {
			props.formValidationEmail(false);
			check = 1;
		} else {
			props.formValidationEmail(true);
		}
		if(props.content.length < 120) {
			props.formValidationContent(false);
			check = 1;
		} else {
			props.formValidationContent(true);
		}
		if(check === 0) {
			props.formValidation();
			const message = {
				name: props.name,
				email: props.email,
				message: props.content
			};
			fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST',
				body: JSON.stringify(message)
			});
		}
		console.log(props)
	}
	return <div className="home-contact" id={props.id}>
		<div className="contact-left-column">
			<img src={image} alt="clothes"/>
		</div>
		<div className="contact-right-column">
			<h2>Skontaktuj się z nami</h2>
			<img src={decoration} alt="decoration" />
			{props.validForm && <p className="valid-form">Wiadomość została wysłana!< br/>Wkrótce się skontaktujemy.</p> }
			<form onSubmit={e => this.validate(e)}>
				<div className="form-contact">
					<div className="form-input">
						<label htmlFor="name">Wpisz swoje imię</label>
						<input 
							type="text"
							name="name"
							className={!props.validName ? "red-border" : null}
							onChange={(e) => handleChangeName(e)}
							value={props.name}
							placeholder="Krzysztof"/>
						{!props.validName && <p className="valid-text">Imię powinno być jednym wyrazem!</p>}
					</div>
					<div className="form-input">
						<label htmlFor="email">Wpisz swój email</label>
						<input 
							type="email" 
							name="email"
							className={!props.validEmail ? "red-border" : null}
							onChange={(e) => handleChangeEmail(e)}
							value={props.email}
							placeholder="abc@xyz.pl" />
						{!props.validEmail && <p className="valid-text">Podany email jest nieprawidłowy!</p>}
					</div>
				</div>
				<label htmlFor="content">Wpisz swoją wiadomość</label>
				<textarea 
					name="content"
					className={!props.validContent ? "red-border" : null}
					onChange={(e) => handleChangeContent(e)}
					value={props.content}
					placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
				{!props.validContent && <p className="valid-text">Wiadomość musi mieć conajmniej 120 znaków!</p>}
				<button 
					type="submit"
					onClick={(e) => validateForm(e)}>
						Wyślij
				</button>
			</form>
		</div>
	</div>
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