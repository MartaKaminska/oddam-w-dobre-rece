import { combineReducers } from 'redux';
import { filledName, filledEmail, filledContent, validForm, validFormName, validFormEmail, validFormContent } from './homeForm';
import { loginEmail, loginPassword, confRegisterPassword, loginValidation, registerValidationEmail, registerValidationPassword, registerValidationConfPassword, registerValidation } from './regLoginForm';
import { whoWeHelp, foundList, foundCurrentPage, assocList, assocCurrentPage, localList, localCurrentPage } from './whoWeHelp';
import { formStep, formNext, formDonation, formBags, formLocation, formWho, formOrganization, formAddressStreet, formAddressCity, formAddressCode, formAddressTelephone, formPickUpDate, formPickUpHour, formPickUpNotes } from './form';

export default combineReducers({
	name: filledName ,
	email: filledEmail,
	content: filledContent,
	validForm,
	validFormName,
	validFormEmail,
	validFormContent,
	loginEmail,
	loginPassword,
	confRegisterPassword,
	loginValidation,
	registerValidationEmail,
	registerValidationPassword,
	registerValidationConfPassword,
	registerValidation,
	whoWeHelp,
	foundList,
	foundCurrentPage,
	assocList,
	assocCurrentPage,
	localList,
	localCurrentPage,
	formStep,
	formNext,
	formDonation,
	formBags,
	formLocation,
	formWho,
	formOrganization,
	formAddressStreet,
	formAddressCity,
	formAddressCode,
	formAddressTelephone,
	formPickUpDate,
	formPickUpHour,
	formPickUpNotes
});