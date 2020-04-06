export const formName = (name) => {
	return {
		type: 'FORM_NAME',
		payload: name
	};
};
export const formEmail = (email) => {
	return {
		type: 'FORM_EMAIL',
		payload: email
	};
};
export const formContent = (content) => {
	return {
		type: 'FORM_CONTENT',
		payload: content
	};
};
export const formValidation = () => {
	return {
		type: 'FORM_VALIDATION',
		payload: true
	};
};
export const formValidationName = (state) => {
	return {
		type: 'FORM_VALIDATION_NAME',
		payload: state
	};
};
export const formValidationEmail = (state) => {
	return {
		type: 'FORM_VALIDATION_EMAIL',
		payload: state
	};
};
export const formValidationContent = (state) => {
	return {
		type: 'FORM_VALIDATION_CONTENT',
		payload: state
	};
};