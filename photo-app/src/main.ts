import {PhotoOrientation} from './photo-orientation';
import { Album } from './album';
import { Picture } from './picture';
import { User } from './user';

const user = new User(1, 'Eru-san', 'Ernesto', true);
const album = new Album(10, 'Platzi Pictures');
const picture = new Picture(1, 'TypeScript Course', '06-15-2020', PhotoOrientation.Landscape);
//create relations between objects
user.addAlbum(album);
album.addPicture(picture);
console.log('user', user);

//delete album
user.removeAlbum(album);
console.log('user', user);