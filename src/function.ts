//create a photograph
// function createPicture(title, date, size) {
// 	//title
// }

type SquareSize = '100x100' | '500x500' | '1000x1000' ;

//using TS, define types for parameters
// function createPicture(title: string, date: string, size: SquareSize) {
// 	//gets created the pic
// 	console.log(`
// 	create Picture with:
// 	Title:${title}
// 	Date:${date}
// 	Size:${size}
// 	`)
// };

// createPicture('Selfie', '06-04-2020', '1000x1000');
// createPicture('Camping', '06-24-2020');

//optional parameters on functions
function createPicture(title?: string, date?: string, size?: SquareSize) {
	//gets created the pic
	console.log(`
	create Picture with:
	Title:${title}
	Date:${date}
	Size:${size}
	`)
};

createPicture('Selfie', '06-04-2020', '1000x1000');
createPicture('Camping', '06-24-2020');
createPicture('Skating');
createPicture();

//Flat Array Functions
let createPic = (title: string, date:string, size:SquareSize): object => {
	// return {
	// 	tittle: tittle,
	// 	date: date,
	// 	size: size,
	// };
	return {
		title,
		date,
		size,
	};
};

const picture = createPic('Platzi session', '2021-06-10', '100x100');
console.log('picture', picture);