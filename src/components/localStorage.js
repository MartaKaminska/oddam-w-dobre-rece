export const registerChecking = (email) => {
	const userList = JSON.parse(localStorage.getItem('users'));
	for(let element of userList) {
		if(element.email === email) {
			return true
		} else {
			return false
		}
	}
}
export const addToUserList = (email, password) => {
	let userList = [];
	let storage = JSON.parse(localStorage.getItem('users'));
	let userData = {
		'email': email,
		'password': password,
	}
	if(storage !== null) {
		userList = storage;
		userList.push(userData);
	} else {
		userList.push(userData);
	}
	localStorage.setItem('users', JSON.stringify(userList));
};
export const checkUserList = (email, password) => {
	const userList = JSON.parse(localStorage.getItem('users'));
	for(let element of userList) {
		if(element.email === email && element.password === password) {
			console.log('true')
			console.log(userList)
			return true
		} else {
			console.log('false')
			console.log(userList)
			return false
		}
	}
}
