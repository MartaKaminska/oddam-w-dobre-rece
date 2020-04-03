import { combineReducers } from 'redux';

const filledName = ( name = '', action ) => {
	if(action.type === 'FORM_NAME') {
		return action.payload;
	} 
	return name;
};
const filledEmail = ( email = '', action ) => {
	if(action.type === 'FORM_EMAIL'){
		return action.payload;
	}
	return email;
}
const filledContent = ( content = '', action ) => {
	if(action.type === 'FORM_CONTENT'){
		return action.payload;
	}
	return content;
}
const validForm = ( validForm = false, action ) => {
	if(action.type === 'FORM_VALIDATION'){
		return action.payload;
	}
	return validForm;
}
const validFormName = ( validName = true, action ) => {
	if(action.type === 'FORM_VALIDATION_NAME'){
		return action.payload;
	}
	return validName;
}
const validFormEmail = ( validEmail = true, action ) => {
	if(action.type === 'FORM_VALIDATION_EMAIL'){
		return action.payload;
	}
	return validEmail;
}
const validFormContent = ( validContent = true, action ) => {
	if(action.type === 'FORM_VALIDATION_CONTENT'){
		return action.payload;
	}
	return validContent;
}

export default combineReducers({
	name: filledName ,
	email: filledEmail,
	content: filledContent,
	validForm,
	validFormName,
	validFormEmail,
	validFormContent
});