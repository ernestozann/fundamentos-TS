import {Album, PhotoOrientation, Picture, User} from './photo-app';
const user = new User(1, 'Eru-san', 'Ernesto', true);
const album = new Album(10, 'Platzi Pictures');
const picture = new Picture(1, 'TypeScript Course', '06-15-2020', PhotoOrientation.Landscape);
//create relations between objects
user.addAlbum(album);
album.addPicture(picture);

console.log('user', user);