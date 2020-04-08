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