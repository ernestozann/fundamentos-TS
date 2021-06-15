export {};
// [1, 'user']
let user: [number, string];
user = [1, 'Eru'];

console.log('user', user);
console.log('username', user[1]);
console.log('username.length', user[1].length);
console.log('Id', user[0]);

//Tuple con varios valores
// id, username, isPro
let userInfo: [number, string, boolean];
userInfo = [2, 'Eru', true];
console.log('userInfo', userInfo);

//arreglo de tuple
let array: [number, string][] = [];
array.push([1, 'Tosty']); //0
array.push([2, 'Eru']); //1
array.push([3, 'Kanata6']); //2
console.log('array', array);

// uso de funciones Array
// kanata6 -> kanatasix

array[2][1] = array[2][1].replace('Kanata6','Kanatasix'); 
console.log('array', array);