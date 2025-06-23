import { LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

type IconType = ForwardRefExoticComponent<
	Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
>;

type ISkill = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	Logo?: IconType | any;
	name: string;
	tag: string;
	backColor: string;
	textColor: string;
	isNew?: boolean;
	isTop?: boolean;
};

export default ISkill;
