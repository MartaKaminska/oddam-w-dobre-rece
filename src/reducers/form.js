export const formStep = (step = 1, action) => {
	if(action.type === 'FORM_STEP') {
		return action.payload;
	};
	return step;
};
export const formNext = (state = '', action) => {
	if(action.type === 'FORM_NEXT') {
		return action.payload;
	};
	return state;
};
export const formDonation = (name = '', action) => {
	if(action.type === 'FORM_DONATION') {
		return action.payload;
	};
	return name;
};
export const formBags = (bags = null, action) => {
	if(action.type === 'FORM_BAGS') {
		return action.payload;
	};
	return bags;
};
export const formLocation = (city = '', action) => {
	if(action.type === 'FORM_LOCATION') {
		return action.payload;
	};
	return city;
};
export const formWho = (who = [], action) => {
	if(action.type === 'FORM_WHO') {
		return [...who, action.payload]
	};
	return who;
};
export const formOrganization = (name = '', action) => {
	if(action.type === 'FORM_ORGANIZATION') {
		return action.payload;
	};
	return name;
};
export const formAddressStreet = (street = '', action) => {
	if(action.type === 'FORM_ADDRESS_STREET') {
		return action.payload;
	};
	return street
};
export const formAddressCity = (city = '', action) => {
	if(action.type === 'FORM_ADDRESS_CITY') {
		return action.payload;
	};
	return city;
};
export const formAddressCode = (code = '', action) => {
	if(action.type === 'FORM_ADDRESS_CODE') {
		return action.payload;
	};
	return code;
};
export const formAddressTelephone = (number = '', action) => {
	if(action.type === 'FORM_ADDRESS_TELEPHONE') {
		return action.payload;
	};
	return number;
};
export const formPickUpDate = (date = new Date(), action) => {
	if(action.type === 'FORM_PICKUP_DATE') {
		return action.payload;
	};
	return date;
};
export const formPickUpHour = (hour = new Date(), action) => {
	if(action.type === 'FORM_PICKUP_HOUR') {
		return action.payload;
	};
	return hour;
};
export const formPickUpNotes = (notes = '', action) => {
	if(action.type === 'FORM_PICKUP_NOTES') {
		return action.payload;
	};
	return notes;
};