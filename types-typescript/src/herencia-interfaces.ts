export {};

enum PhotoOrientation {
	landscape = 0, //0
	portrait = 1, //1
	square = 2, //2
	panorama = 3, //3
}

interface Entity {
	id: number,
	title: string,
}

interface Album extends Entity {
	//inherits attributes from Entity
	description: string,
}

interface Picture extends Entity {
	orientation: PhotoOrientation,
}

const album: Album = {
	id: 1,
	title: 'Meetups',
	description: 'Community events around the globe',
};

const picture: Picture = {
	id: 1,
	title: 'Family',
	orientation: PhotoOrientation.landscape,
};

let newPicture = {} as Picture;
newPicture.id = 2;
newPicture.title = 'Moon';

console.log('album', album);
console.log('picture', picture);
console.log('newPicture', newPicture);