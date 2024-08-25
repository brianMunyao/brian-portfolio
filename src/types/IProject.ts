interface IProject {
	id: number;
	name: string;
	color: string;
	tags: string[];
	description: string;
	img: string;
	to: string;
	gallery: string[];
	link?: string;
	features?: string[];
	mobileImages?: string[];
	webImages?: string[];
}

export default IProject;
