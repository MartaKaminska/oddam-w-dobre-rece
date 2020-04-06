export const whoWeHelp = (type) => {
	return {
		type: 'WHO_WE_HELP',
		payload: type
	};
};
export const foundList = (list) => {
	return {
		type: 'FOUND_LIST',
		payload: list
	};
};
export const foundCurrentPage = (num) => {
	return {
		type: 'FOUND_CURRENT_PAGE',
		payload: num
	};
};
export const assocList = (list) => {
	return {
		type: 'ASSOC_LIST',
		payload: list
	};
};
export const assocCurrentPage = (num) => {
	return {
		type: 'ASSOC_CURRENT_PAGE',
		payload: num
	};
};
export const localList = (list) => {
	return {
		type: 'LOCAL_LIST',
		payload: list
	};
};
export const localCurrentPage = (num) => {
	return {
		type: 'LOCAL_CURRENT_PAGE',
		payload: num
	};
};