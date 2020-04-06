const listOfFound = [
	{
		name: 'Fundacja “Dbam o Zdrowie”',
		description: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki',
		goal: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.'
	}, {
		name: 'Fundacja “Dla dzieci”',
		description: 'ubrania, meble, zabawki',
		goal: 'Cel i misja: Pomoc dzieciom z ubogich rodzin.'
	}, {
		name: 'Fundacja “Bez domu”',
		description: 'ubrania, jedzenie, ciepłe koce',
		goal: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.'
	}, {
		name: 'Fundacja “Lorem Ipsum 1”',
		description: 'Egestas, sed, tempus',
		goal: 'Cel i misja: Quis varius quam quisque id diam vel quam elementum pulvinar..'
	}, {
		name: 'Fundacja “Lorem Ipsum 2”',
		description: 'Ut, aliquam, purus, sit, amet',
		goal: 'Cel i misja: Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.'
	}, {
		name: 'Fundacja “Lorem Ipsum 3”',
		description: 'Mi, quis, hendrerit, dolor',
		goal: 'Cel i misja: Scelerisque in dictum non consectetur a erat nam.'
	},{
		name: 'Fundacja “Lorem Ipsum 4”',
		description: 'Mi, quis, hendrerit, dolor',
		goal: 'Cel i misja: Scelerisque in dictum non consectetur a erat nam.'
	}
];
const listOfAssoc = [
	{
		name: 'Organizacja “Lorem Ipsum 1”',
		description: 'Egestas, sed, tempus',
		goal: 'Cel i misja: Quis varius quam quisque id diam vel quam elementum pulvinar..'
	}, {
		name: 'Organizacja “Lorem Ipsum 2”',
		description: 'Ut, aliquam, purus, sit, amet',
		goal: 'Cel i misja: Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.'
	}, {
		name: 'Organizacja “Lorem Ipsum 3”',
		description: 'Mi, quis, hendrerit, dolor',
		goal: 'Cel i misja: Scelerisque in dictum non consectetur a erat nam.'
	}, {
		name: 'Organizacja “Lorem Ipsum 4”',
		description: 'Mi, quis, hendrerit, dolor',
		goal: 'Cel i misja: Scelerisque in dictum non consectetur a erat nam.'
	}, {
		name: 'Organizacja “Lorem Ipsum 4”',
		description: 'Mi, quis, hendrerit, dolor',
		goal: 'Cel i misja: Scelerisque in dictum non consectetur a erat nam.'
	}
]
const listOfLocal = [
	{
		name: 'Zbiórka “Lorem Ipsum 1”',
		description: 'Egestas, sed, tempus',
		goal: 'Cel i misja: Quis varius quam quisque id diam vel quam elementum pulvinar..'
	}, {
		name: 'Zbiórka “Lorem Ipsum 2”',
		description: 'Ut, aliquam, purus, sit, amet',
		goal: 'Cel i misja: Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.'
	}, {
		name: 'Zbiórka “Lorem Ipsum 3”',
		description: 'Mi, quis, hendrerit, dolor',
		goal: 'Cel i misja: Scelerisque in dictum non consectetur a erat nam.'
	}
]
export const whoWeHelp = ( type = 'found', action) => {
	if(action.type === 'WHO_WE_HELP') {
		return action.payload;
	};
	return type
};
export const foundList = ( list = listOfFound, action ) => {
	if(action.type === 'FOUND_LIST') {
		return action.payload;
	}; 
	return list;
};
export const foundCurrentPage = ( num = 1, action ) => {
	if(action.type === 'FOUND_CURRENT_PAGE'){
		return action.payload;
	};
	return num;
};
export const assocList = ( list = listOfAssoc, action ) => {
	if(action.type === 'ASSOC_LIST') {
		return action.payload;
	}; 
	return list;
};
export const assocCurrentPage = ( num = 1, action ) => {
	if(action.type === 'ASSOC_CURRENT_PAGE'){
		return action.payload;
	};
	return num;
};
export const localList = ( list = listOfLocal, action ) => {
	if(action.type === 'LOCAL_LIST') {
		return action.payload;
	}; 
	return list;
};
export const localCurrentPage = ( num = 1, action ) => {
	if(action.type === 'LOCAL_CURRENT_PAGE'){
		return action.payload;
	};
	return num;
};