//void

//tipo explicito
function showInfo(user: any): any{
	console.log('user info', user.id, user.username, user.firstName);
	// return 'hola';
}

showInfo({id: 1, username: 'Eru', firstName: 'Martinez'});

//tipo inferido
function showFormattedInfo(user: any) {
	console.log('user info', `
		id:${user.id}
		userName:${user.username}
		userFirstName:${user.firstName}
	`);
}

showFormattedInfo({id: 1, username: 'Eru', firstName: 'Martinez'});

//tipo void, como tipo de dato
let unUsable: void;
// unUsable = null;
unUsable = undefined;

//tipo never

function handleError(code: number, message: string): never {
	// Process your code here
	// Generate a message
	throw new Error(`${message}. Code: ${code}`);
}

try {
	handleError(404, 'NOT FOUND');
} catch (error) {}

function sumNumbers(limit:number): never {
	let sum = 0;
	while (true) {
		sum++;
	}
	//return sum;
}

sumNumbers(10);
//ciclo infinito