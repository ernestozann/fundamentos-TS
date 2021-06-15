export {};
// <tipo> // Angle bracket syntax
let userName: any;
// userName = 'Eru'; //too short
userName = 'Eru-san';

//tenemos una cadena, TS confia y compila
let message: string = (<string>userName).length > 5 ?
	`Welcome, ${userName}` :
	`${userName} is too short`;
console.log('message', message);

let userNameWithId: any = 'Eru-san 1';
//get just the userName
userName = (<string>userNameWithId).substring(0, 7);
console.log('userName only:', userName);

//Syntax "as"
message = (userName as string).length > 5 ?
	`Welcome ${userName}` :
	`${userName} is too short`;

let helloUser: any;
helloUser = 'Hello Eru-san';
userName = (helloUser as string).substring(6);
console.log('userName:', userName);