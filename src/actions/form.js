export const formStep = (step) => {
	return {
		type:'FORM_STEP',
		payload: step
	};
};
export const formNext = (state) => {
	return {
		type: 'FORM_NEXT',
		payload: state
	}
}
export const formDonation = (name) => {
	return {
		type: 'FORM_DONATION',
		payload: name
	};
};
export const formBags = (bags) => {
	return {
		type: 'FORM_BAGS',
		payload: bags
	};
};
export const formLocation = (city) => {
	return {
		type: 'FORM_LOCATION',
		payload: city
	};
};
export const formWho = (who) => {
	return {
		type: 'FORM_WHO',
		payload: who
	};
};
export const formOrganization = (name) => {
	return {
		type: 'FORM_ORGANIZATION',
		payload: name
	};
};
export const formAddressStreet = (street) => {
	return {
		type: 'FORM_ADDRESS_STREET',
		payload: street
	};
};
export const formAddressCity = (city) => {
	return {
		type: 'FORM_ADDRESS_CITY',
		payload: city
	};
};
export const formAddressCode = (code) => {
	return {
		type: 'FORM_ADDRESS_CODE',
		payload: code
	};
};
export const formAddressTelephone = (number) => {
	return {
		type: 'FORM_ADDRESS_TELEPHONE',
		payload: number
	};
};
export const formPickUpDate = (date) => {
	return {
		type: 'FORM_PICKUP_DATE',
		payload: date
	};
};
export const formPickUpHour = (hour) => {
	return {
		type: 'FORM_PICKUP_HOUR',
		payload: hour
	};
};
export const formPickUpNotes = (notes) => {
	return {
		type: 'FORM_PICKUP_NOTES',
		payload: notes
	};
};