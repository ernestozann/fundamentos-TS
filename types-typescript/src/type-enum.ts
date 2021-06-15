// Orientacion para fotografias
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;

enum PhotoOrientation {
	landscape = 0, //0
	portrait = 1, //1
	square = 2, //2
	panorama = 3, //3
}

const landscape: PhotoOrientation = PhotoOrientation.landscape;
const square: PhotoOrientation = PhotoOrientation.square;
console.log('landscape', PhotoOrientation.landscape);
console.log('portrait', PhotoOrientation[1]);
console.log('square',PhotoOrientation[square]);

enum PictureOrientation {
	landscape = 10, //0
	portrait, //11
	square, //12
	panorama, //13
}
console.log('portrait', PictureOrientation.portrait);

enum Country {
	Bolivia = 'Bol',
	Colombia = 'Col',
	Mexico = 'Mex',
	EEUU = 'USA',
	Spain = 'Esp',
}

const country = Country.Mexico;
console.log('Country', country);