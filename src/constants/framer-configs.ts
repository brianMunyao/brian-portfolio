import { Variants } from 'framer-motion';

export const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1, // Time between animations of each child
			delayChildren: 0.1, // Delay before the first child starts animating
		},
	},
};

export const childVariants: Variants = {
	hidden: { opacity: 0, y: 8 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			ease: 'anticipate',
			duration: 0.3,
		},
	},
};
