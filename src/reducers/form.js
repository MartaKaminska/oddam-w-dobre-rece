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