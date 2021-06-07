// Corchetes []

//tipo explicito
let users: string[];
users = ['Maldinni', 'Tosty', 'Ikoruk', 'Eru', 'Kanatasix'];
//users = [1, true, 'Mapachetrache']; //error por tipo

//Tipo Inferido
let otherUsers = ['Maldinni', 'Tosty', 'Ikoruk', 'Eru', 'Kanatasix'];
//otherUsers = [1, true, 'Mapachetrache']; //error por tipo

//Aray<TIPO>
let pictureTitles: Array<String>;
pictureTitles = ['Favorite sunset', 'Vacation Time', 'Landscape'];

//Accediendo a los valores en un array
console.log('first user:', users[0]);
console.log('first Title:', pictureTitles[0]);

// Propiedades en array
console.log('users.length', users.length);

//uso de funciones en arreglos
users.push('aPlatziUser');
users.sort(); //ordenar alfabeticamente
console.log('users:', users);
console.log('updated users.length', users.length);
