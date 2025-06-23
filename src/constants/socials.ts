import { Github, LinkedinIcon } from 'lucide-react';
import { SiUpwork } from 'react-icons/si';

export const LinkedInLink = 'https://www.linkedin.com/in/brian-kalusi';
export const GithubLink = 'https://github.com/brianMunyao';
export const UpworkLink =
	'https://www.upwork.com/freelancers/~017fc889dc8614bd43';

export const socials = [
	{
		icon: LinkedinIcon,
		href: LinkedInLink,
		label: 'LinkedIn',
	},
	{ icon: Github, href: GithubLink, label: 'GitHub' },
	{
		icon: SiUpwork,
		href: UpworkLink,
		label: 'Upwork',
	},
];
