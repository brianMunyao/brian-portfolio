export type IProject = {
	id: string;
	title: string;
	description: string;
	fullDescription?: string;
	color: string;
	main_image: string;

	category:
		| 'Co-founded Product'
		| 'Client Project'
		| 'Personal Innovation'
		| 'Internal Tool'
		| 'Personal Project'
		| 'Academic Project';
	type:
		| 'Mobile & Web App'
		| 'Web Application'
		| 'AI-Powered Mobile App'
		| 'Mobile App'
		| 'Full-Stack Web App'
		| 'Static Website'
		| 'React Website'
		| 'AI-Powered Mobile & Web App';
	tags: string[];
	year: string;
	status: 'Live' | 'Prototype' | 'Completed' | 'Published' | 'Archive';

	is_featured?: boolean;

	web_link?: string;
	repo_link?: string;
	play_store_link?: string;
	app_store_link?: string;

	// Project Details
	features: string[];
	achievements?: string[];
	technologies?: string[];

	// Metrics and Performance
	keyMetrics?: Record<string, string>;

	mobileImages?: string[];
	webImages?: string[];
};
