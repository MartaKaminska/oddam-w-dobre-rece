import { connect } from 'react-redux';
import { formValidation, formValidationName, formValidationEmail, formValidationContent } from '../../../actions/homeForm';

const validate = (props) => {
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
	// return [props.name, props.email, props.content, props.validForm]
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

export default connect(mapStateToProps, { formValidation, formValidationName, formValidationEmail, formValidationContent })(validate);