export{};

enum PhotoOrientation {
	landscape,
	portrait,
	square ,
	panorama,
}

class Picture {
	//Properties
	private id: number;
	private title: string;
	private orientation: PhotoOrientation;

	public constructor(id: number, title: string, orientation:PhotoOrientation) {
		this.id = id;
		this.title = title;
		this.orientation = orientation;
	}

	//actions of the class
	public toString() {
		return `[id: ${this.id},
						title: ${this.title},
						orientation: ${this.orientation}]`;
	}
}

class Album {
	private id: number;
	private title: string;
	private pictures: Picture[];

	public constructor(id: number, title: string) {
		this.id = id;
		this.title = title;
		this.pictures = [];
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

// picture.id = 100; //private
// picture.title = 'Another title'; //private
// album.title = 'Personal activities'; //private
console.log('album', album);