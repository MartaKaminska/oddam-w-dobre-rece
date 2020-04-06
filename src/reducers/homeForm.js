export const filledName = ( name = '', action ) => {
	if(action.type === 'FORM_NAME') {
		return action.payload;
	} 
	return name;
};
export const filledEmail = ( email = '', action ) => {
	if(action.type === 'FORM_EMAIL'){
		return action.payload;
	}
	return email;
}
export const filledContent = ( content = '', action ) => {
	if(action.type === 'FORM_CONTENT'){
		return action.payload;
	}
	return content;
}
export const validForm = ( validForm = false, action ) => {
	if(action.type === 'FORM_VALIDATION'){
		return action.payload;
	}
	return validForm;
}
export const validFormName = ( validName = true, action ) => {
	if(action.type === 'FORM_VALIDATION_NAME'){
		return action.payload;
	}
	return validName;
}
export const validFormEmail = ( validEmail = true, action ) => {
	if(action.type === 'FORM_VALIDATION_EMAIL'){
		return action.payload;
	}
	return validEmail;
}
export const validFormContent = ( validContent = true, action ) => {
	if(action.type === 'FORM_VALIDATION_CONTENT'){
		return action.payload;
	}
	return validContent;
}

