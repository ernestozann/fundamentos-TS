//function to show a pic
export {};

enum PhotoOrientation {
	landscape = 0, //0
	portrait = 1, //1
	square = 2, //2
	panorama = 3, //3
}

interface Picture {
	title: string,
	date: string,
	orientation: PhotoOrientation,
}

function showPicture(picture: Picture) {
	console.log(`[title: ${picture.title}, 
		date: ${picture.date}, 
		orientation: ${picture.orientation}]`);
}

let myPic = {
	title: 'Test title',
	date: '2021-06-10',
	orientation: PhotoOrientation.landscape,
};

showPicture(myPic);
showPicture({
	title: 'test title',
	date: '2021-06-10',
	orientation: PhotoOrientation.portrait,
	// extra: 'test', //error
})

interface PictureConfig {
	title?: string,
	date?: string,
	orientation?: PhotoOrientation,
}

function generatePicture(config: PictureConfig) {
	const pic = {title: 'Default', date: '2021-06-10'};
	if (config.title) {
		pic.title = config.title;
	}
	if (config.date) {
		pic.date = config.date;
	}
	return pic;
}

let picture = generatePicture({});
console.log('picture', picture);
picture = generatePicture({title: 'Travel Pic'});
console.log('picture', picture);
picture = generatePicture({title: 'Travel Pic', date: '2042-06-10'});
console.log('picture', picture);

// Interface: Users
interface User {
	readonly id: number,
	username: string,
	isPro: boolean,
}

let user: User;
user = {id: 10, username: 'Eru-san', isPro: true};
console.log('user:', user);
user.username = 'Eru';
console.log('user:', user);
// user.id = 25; //error