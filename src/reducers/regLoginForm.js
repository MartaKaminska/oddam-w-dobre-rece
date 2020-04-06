export const loginEmail = ( email = '', action ) => {
	if(action.type === 'LOGIN_EMAIL'){
		return action.payload;
	};
	return email;
};
export const loginPassword = ( password = '', action ) => {
	if(action.type === 'LOGIN_PASSWORD') {
		return action.payload;
	}; 
	return password;
};
export const confRegisterPassword = ( confPassword = '', action ) => {
	if(action.type === 'CONFIRM_REGISTER_PASSWORD') {
		return action.payload;
	}; 
	return confPassword;
};
export const loginValidation = ( loginValid = false, action ) => {
	if(action.type === 'LOGIN_VALIDATION'){
		return action.payload;
	};
	return loginValid;
};
export const registerValidationEmail = ( email = true, action ) => {
	if(action.type === 'REGISTER_VALIDATION_EMAIL') {
		return action.payload;
	}; 
	return email;
};
export const registerValidationPassword = ( password = true, action ) => {
	if(action.type === 'REGISTER_VALIDATION_PASSWORD') {
		return action.payload;
	}; 
	return password;
};
export const registerValidationConfPassword = ( confPassword = true, action ) => {
	if(action.type === 'REGISTER_VALIDATION_CONFIRM_PASSWORD'){
		return action.payload;
	};
	return confPassword;
};
export const registerValidation = ( loginValid = false, action ) => {
	if(action.type === 'REGISTER_VALIDATION'){
		return action.payload;
	};
	return loginValid;
};