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
export const formValidationName = () => {
	return {
		type: 'FORM_VALIDATION_NAME',
		payload: false
	};
};
export const formValidationEmail = () => {
	return {
		type: 'FORM_VALIDATION_EMAIL',
		payload: false
	};
};
export const formValidationContent = () => {
	return {
		type: 'FORM_VALIDATION_CONTENT',
		payload: false
	};
};