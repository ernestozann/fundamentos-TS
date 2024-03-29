import { Item } from "./item";
import { Picture } from "./picture";
export class Album extends Item{
	pictures: Picture[];

	constructor(id: number, title: string) {
		super(id, title);
		this.pictures = [];
	}

	addPicture(picture: Picture) {
		this.pictures.push(picture);
	}
}