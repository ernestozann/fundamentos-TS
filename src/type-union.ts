export {};
// 10, '10'
// let idUser: IdUser;
// idUser = 10;
// idUser = '10';

// // Buscar userName dado un ID
// function getUserNameById(id: number | string) {
// 	// logica de negocio, find the user
// 	return id;
// }

// getUserNameById(20);
// getUserNameById('20');

//alias de tipos: TS
type IdUser = number | string;
type UserName = string;
let idUser: IdUser;
idUser = 10;
idUser = '10';

// Buscar userName dado un ID
function getUserNameById(id: IdUser):UserName {
	// logica de negocio, find the user
	return 'Eru';
}

getUserNameById(20);
getUserNameById('20');

//Tipos literales
// 100x100, 500x500, 1000x1000
type SquareSize = '100x100' | '500x500' | '1000x1000';
//let smallPicture: SquareSize = '200x200' //Error
let smallPicture: SquareSize = '100x100';
let mediumPicture: SquareSize = '500x500';

type PhotoSize = '75x75' | '240x180' | '500x375' | '1024x768' | '3072x2304';
let squarePic: PhotoSize = '75x75';
let smallPic: PhotoSize = '240x180';
let mediumPic: PhotoSize = '500x375';
let largePic: PhotoSize = '1024x768';
let extraLargePic: PhotoSize = '3072x2304';