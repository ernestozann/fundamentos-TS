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

type PhotoSize = 
'75x75' | 
'150x150' |
'100x75' |
'240x180'|
'320x240' |
'400x300' |
'500x375' |
'640x480' |
'800x600' |
'1024x768' |
'1600x1200' |
'2048x1536' |
'3072x2304' | 
'4096x3072';
let square75: PhotoSize = '75x75';
let square150: PhotoSize = '150x150';
let miniature: PhotoSize = '100x75';
let small240: PhotoSize = '240x180';
let small320: PhotoSize = '320x240';
let small400: PhotoSize = '400x300';
let medium500: PhotoSize = '500x375';
let medium640: PhotoSize = '640x480';
let medium800: PhotoSize = '800x600';
let bigPic1024: PhotoSize = '1024x768';
let bigPic1600: PhotoSize = '1600x1200';
let bigPic2048: PhotoSize = '2048x1536';
let extraLarge3K: PhotoSize = '3072x2304';
let extraLarge4K: PhotoSize = '4096x3072';