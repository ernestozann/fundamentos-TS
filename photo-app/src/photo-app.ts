export enum PhotoOrientation {
	Landscape,
	Portrait,
	Square,
	Panorama,
}

export class User {
	private album: Album[];

	constructor(private id: number,
							private username: string,
							private firstName: string,
							private isPro: boolean) {
		this.album = [];
	}

	addAlbum(album: Album){
		this.album.push(album);
	}
}

export class Item {
	protected readonly _id: number;
	protected _title: string;

	constructor(id: number, title:string) {
		this._id = id;
		this._title = title;
	}

	get id() {
		return this._id;
	}
	// set id(id: number) {
	// 	this._id = id;
	// }
	get title() {
		return this._title;
	}
	set title(title: string) {
		this._title = title;
	}
}

export class Album extends Item{
	private pictures: Picture[];

	public constructor(id: number, title: string) {
		super(id, title);
		this.pictures = [];
	}

	public addPicture(picture: Picture) {
		this.pictures.push(picture);
	}
}

export class Picture extends Item {
	constructor(id: number, 
							title: string,
							private _date: string,
							private _orientation:PhotoOrientation) {
		super(id, title);
	}

	//actions of the class
	toString() {
		return `[id: ${this.id},
						title: ${this._title},
						orientation: ${this._orientation}]`;
	}
}

