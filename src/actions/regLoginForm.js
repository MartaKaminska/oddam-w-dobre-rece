export const loginEmail = (email) => {
	return {
		type: 'LOGIN_EMAIL',
		payload: email
	};
};
export const loginPassword = (password) => {
	return {
		type: 'LOGIN_PASSWORD',
		payload: password
	};
};
export const confRegisterPassword = (confPassword) => {
	return {
		type: 'CONFIRM_REGISTER_PASSWORD',
		payload: confPassword
	};
};
export const loginValidation = () => {
	return {
		type: 'LOGIN_VALIDATION',
		payload: true
	};
};
export const registerValidationEmail = (state) => {
	return {
		type: 'REGISTER_VALIDATION_EMAIL',
		payload: state
	};
};
export const registerValidationPassword = (state) => {
	return {
		type: 'REGISTER_VALIDATION_PASSWORD',
		payload: state
	};
};
export const registerValidationConfPassword = (state) => {
	return {
		type: 'REGISTER_VALIDATION_CONFIRM_PASSWORD',
		payload: state
	};
};
export const registerValidation = () => {
	return {
		type: 'REGISTER_VALIDATION',
		payload: true
	};
};