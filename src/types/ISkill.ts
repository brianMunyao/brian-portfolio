import { IconType } from 'react-icons';

interface ISkill {
	Logo?: IconType;
	name: string;
	tag: string;
	backColor: string;
	textColor: string;
	isNew?: boolean;
	isTop?: boolean;
}

export default ISkill;
