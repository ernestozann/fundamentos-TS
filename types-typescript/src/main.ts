console.log('Hola TypeScript platzi');

//Number
//Explicit
let phone: number;
phone = 1;
phone = 54234567;
// phone = 'hola'; //Error

//Inferido
let phoneNumber = 54234567;
phoneNumber = 123;
// phoneNumber = true; //Error por tipo

let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// Tipo Boolean
let isPro: boolean;
isPro = true;
//isPro = 1; //Error por tipo

// Inferido
let isUserPro = false;
isUserPro = true;
//isPro = 1; //Error por tipo

//Tipo String
let userName: string = 'Eru';
// userName = true; //Error por tipo

//Template string
//uso de backtick `
let userInfo: string;
userInfo = `
	User Info:
	userName:${userName}
	fullName:${userName + ' Martinez'}
	phone:${phone}
	isPro:${isPro}
`;
console.log('userInfo', userInfo);