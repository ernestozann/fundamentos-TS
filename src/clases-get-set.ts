export{};

enum PhotoOrientation {
	landscape,
	portrait,
	square ,
	panorama,
}

// get and set

class Picture {
	//Properties
	private _id: number;
	private _title: string;
	private _orientation: PhotoOrientation;

	public constructor(id: number, title: string, orientation:PhotoOrientation) {
		this._id = id;
		this._title = title;
		this._orientation = orientation;
	}

	get id() {
		return this._id;
	}
	set id(id: number) {
		this._id = id;
	}
	get title() {
		return this._title;
	}
	set title(title: string) {
		this._title = title;
	}
	get orientation() {
		return this._orientation;
	}
	set orientation(o: PhotoOrientation) {
		this._orientation = o;
	}

	//actions of the class
	public toString() {
		return `[id: ${this.id},
						title: ${this._title},
						orientation: ${this._orientation}]`;
	}
}

class Album {
	private _id: number;
	private _title: string;
	private pictures: Picture[];

	public constructor(id: number, title: string) {
		this._id = id;
		this._title = title;
		this.pictures = [];
	}

	get id() {
		return this._id;
	}
	set id(id: number) {
		this._id = id;
	}
	get title() {
		return this._title;
	}
	set title(t: string) {
		this._title = t;
	}

	public addPicture(picture: Picture) {
		this.pictures.push(picture);
	}
}

const album: Album = new Album(1, 'Personal picture');
const picture: Picture = new Picture(1, 'Platzi session', PhotoOrientation.square);
album.addPicture(picture);

console.log('album', album);

//accessing to the public members of the class '3'
console.log('picture.id', picture.id);

picture.id = 100; //private
picture.title = 'Another title'; //private
album.title = 'Personal activities'; //private
console.log('album', album);