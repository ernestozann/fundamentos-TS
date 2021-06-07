//Tipo explicito
let idUser: any;
idUser = 1; //number
idUser = '1'; //string
console.log(idUser);

//tipo inferido
let otherId;
otherId = 1;
otherId = '1';
console.log(otherId);

let surprise: any = 'Hello typeScript';
//surprise.sayHello(); //Error
const res = surprise.substring(6);//Error
console.log(res);